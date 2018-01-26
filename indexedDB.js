var DB_INDEXEDDB = (function () {
    // 兼容处理
    window.indexedDB = window.indexedDB || window.webkitIndexedDB;
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || { READ_WRITE: "readwrite" }; // This line should only be needed if it is needed to support the object's constants for older browsers
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;
    indexedDB.onerror = function (e) {
        console.log('indexedDB catch error', e);
    };

    var DB = null;  // 暂存当前打开的数据库
    var DB_NAME = null;
    var DB_VERSION = null;
    var DB_STORE_NAME = null;

    function openDb(dbName, version, storeName, success, fail, upgrade) {
        console.log("openDb ...");
        var req = indexedDB.open(dbName, version);
        req.onsuccess = function (evt) {
            console.log("openDb success");
            DB = req.result;
            DB_NAME = dbName;
            DB_VERSION = version;
            DB_STORE_NAME = storeName;
            success && success(DB);
        };
        req.onerror = function () {
            console.log("openDb error:", req.error.errorCode);
            fail && fail(req.error);
        };

        req.onupgradeneeded = function () {
            console.log("openDb upgradeneeded");
            DB = req.result;
            DB_NAME = dbName;
            DB_VERSION = version;
            DB_STORE_NAME = storeName;
            upgrade && upgrade(DB);
        };
    }

    function getObjectStore(store_name, mode) {
        return DB.transaction(store_name, mode).objectStore(store_name);
    }

    function clearObjectStore(store_name, success, fail) {
        var store = getObjectStore(DB_STORE_NAME, 'readwrite');
        var req = store.clear();

        req.onsuccess = function (evt) {
            console.log("Store cleared");
            success && success();
        };
        req.onerror = function (evt) {
            console.error("clearObjectStore:", evt.target.errorCode);
            fail && fail(evt);
        };
    }

    function callbackReq(req, success, fail) {
        req.onsuccess = function () {
            success && success(req.result);
        };

        req.onerror = function () {
            fail && fail(req.error);
        }
    }

    function callbackReqCall(obj, method, args, success, fail) {
        var req;
        try {
            if (!(args instanceof Array)) {
                args = [args];
            }
            req = obj[method].apply(obj, args);
        } catch (e) {
            console.log('call ' + method + ' error', e);
            throw e;
        }

        callbackReq(req, success, fail);
    }

    function callbackCursorReqCall(obj, cursorArgs, success, fail) {
        if (!(cursorArgs instanceof Array)) {
            cursorArgs = [cursorArgs];
        }
        var result = [];
        callbackReqCall(obj, 'openCursor', cursorArgs, function (cursor) {
            if (cursor) {
                var value = cursor.value;
                result.push(value);
                cursor.continue();
            } else {
                success && success(result);
            }
        }, function (error) {
            console.log('openCursor fail');
            fail && fail(error);
        });
    }

    function addItem(item, success, fail) {
        var store = getObjectStore(DB_STORE_NAME, 'readwrite');
        callbackReqCall(store, 'add', item, success, fail);
    }

    function addItems(items, success, fail) {
        var count = 0;
        for (var i = 0; i < items.length; ++i) {
            var item = items[i];
            addItem(item, function (item) {
                count++;
                if (count === items.length) {
                    success && success(items);
                }
            }, function (evt) {
                fail && fail(evt);
                throw evt;
            });
        }
    }

    function getItems(success, fail) {
        var store = getObjectStore(DB_STORE_NAME, 'readonly');
        callbackCursorReqCall(store, [], success, fail);
    }

    function getItemByKey(key, success, fail) {
        var store = getObjectStore(DB_STORE_NAME, 'readonly');
        callbackReqCall(store, 'get', key, success, fail);
    }

    function getItemByIndex(indexName, indexValue, success, fail) {
        var store = getObjectStore(DB_STORE_NAME, 'readonly');
        var indexStore = store.index(indexName);
        callbackCursorReqCall(indexStore, IDBKeyRange.only(indexValue), success, fail);
    }

    function removeItem(id, success, fail) {
        var store = getObjectStore(DB_STORE_NAME, 'readwrite');
        callbackReqCall(store, 'delete', id, success, fail);
    }

    function setItem(item, success, fail) {
        var store = getObjectStore(DB_STORE_NAME, 'readwrite');
        callbackReqCall(store, 'put', item, success, fail);
    }

    // exports
    return {
        openDb: openDb,
        addItem: addItem,
        addItems: addItems,
        getItemByKey: getItemByKey,
        getItemByIndex: getItemByIndex,
        getItems: getItems,
        setItem: setItem,
        removeItem: removeItem,
    };
})();
