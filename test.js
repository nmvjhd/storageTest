// test
var DB_NAME = 'GITV';
var DB_VERSION = 1; // Use a long long for this value (don't use a float)
var DB_STORE_NAME = 'history';
var db;
DB_INDEXEDDB.openDb(DB_NAME, DB_VERSION, DB_STORE_NAME, function (_db) {
    db = _db;

    var item = {
        "chnId": 2,
        "isDownload": 2,
        "focus": "琅琊风云再起",
        "initIssueTime": "2017-12-18 21:50:09",
        "pic": "http://pic7.ptqy.gitv.tv/image/20171218/29/0f/v_114307350_m_601.jpg",
        "type": 0,
        "vid": "ecdcb675c048e53aea46020a9cef5de1",
        "score": "8.2",
        "sourceCode": "",
        "cast": {
            "makerIds": "",
            "star": "",
            "director": "",
            "composer": "",
            "mainActor": "",
            "maker": "",
            "starIds": "",
            "hostIds": "",
            "actor": "",
            "songWriterIds": "",
            "songWriter": "",
            "mainActorIds": "",
            "guestIds": "",
            "producerIds": "",
            "host": "",
            "producer": "",
            "guest": "",
            "writer": "",
            "dubberIds": "",
            "directorIds": "",
            "actorIds": "",
            "composerIds": "",
            "dubber": "",
            "writerIds": ""
        },
        "tvQId": 874217700,
        "len": 2648,
        "epVipType": "0",
        "exclusive": 1,
        "tag": "国语,内地,复仇,宫斗,朝堂,偶像,古装,宫廷,自制",
        "contentType": 1,
        "drm": "",
        "order": 1,
        "indiviDemand": 0,
        "is3D": 0,
        "qpId": 205025001,
        "tvPic": "http://pic8.ptqy.gitv.tv/image/20171219/da/d9/a_100035374_m_600_m4.jpg",
        "tvIsPurchase": 0,
        "name": "琅琊榜之风起长林",
        "tvName": "琅琊榜之风起长林第1集",
        "tvPurchaseType": 0,
        "tvCount": 42,
        "desc": "梁渝两国在大梁边境甘州鏖战，大梁补给已断绝数十天。长林府世子萧平章率部奋战间隙，部将来报尚无援军迹象，恐难再挡进攻，劝萧平章撤离。萧平章不愿做长林军旗下的逃兵。四个月前的琅琊山上，萧平旌被罚潜入碧潭底捞寒晶石，正与小童嬉闹。萧平章来到琅琊阁，拿到了他前些时日所求问题的答案。与小弟萧平旌匆匆一晤便要启程。金陵城内，大殿之上梁帝与长林王爷萧庭生及众大臣议事。梁帝仅凭萧庭生一句推测便赐他兵符为长林军增援，此举引得皇后的胞兄、内阁首辅荀白水不满。负责军资调度补给的中书令宋浮担忧梁帝体衰而太子年幼，恐长林府功高欺主，暗示荀白水自己将有所动作。萧平旌送兄长下山，萧平章教导他要担起王府重担，平旌怀疑此次战局凶险。夜晚梦见兄长受伤，平旌心内不安，便在琅琊阁内四处打探消息，得知军资补给半路沉船，立刻下山去寻兄长。萧平章率部血战身受重伤。萧庭生和援军及时到来，虽守住了甘州，却看出北境隐患重重，着上报梁帝。梁帝得知萧平章受伤震怒，质问荀白水和宋浮为何甘州断绝补给整整一月。",
        "dynamicRanges": "",
        "vidl": [
            {
                "drmType": 1,
                "dr": -1,
                "m3utx": "http://cache.m.ptqy.gitv.tv/mus/text/205025001/6a37dc5f00905d77457b297b8691…b&isdol=0&code=2&vf=b452cc077b10227ca817678ce122eaf4&np_tag=nginx_part_tag",
                "m3u": "http://cache.m.ptqy.gitv.tv/mus/205025001/6a37dc5f00905d77457b297b869153a2/…b&isdol=0&code=2&vf=b452cc077b10227ca817678ce122eaf4&np_tag=nginx_part_tag",
                "code": 2,
                "vd": 1,
                "unencryptedDuration": 0,
                "screenSize": "640x360",
                "vid": "6a37dc5f00905d77457b297b869153a2",
                "isVip": false,
                "isPlay": true
            },
            {
                "drmType": 1,
                "dr": -1,
                "m3utx": "http://cache.m.ptqy.gitv.tv/mus/text/205025001/105fa9ce821a795dad944a5ad946…b&isdol=0&code=2&vf=0c6b088bd442e3add2210cd4f05e9eb6&np_tag=nginx_part_tag",
                "m3u": "http://cache.m.ptqy.gitv.tv/mus/205025001/105fa9ce821a795dad944a5ad946cabb/…b&isdol=0&code=2&vf=0c6b088bd442e3add2210cd4f05e9eb6&np_tag=nginx_part_tag",
                "code": 2,
                "vd": 2,
                "unencryptedDuration": 0,
                "screenSize": "896x504",
                "vid": "105fa9ce821a795dad944a5ad946cabb",
                "isVip": false,
                "isPlay": true
            },
            {
                "drmType": 1,
                "dr": -1,
                "m3utx": "http://cache.m.ptqy.gitv.tv/mus/text/205025001/ecdcb675c048e53aea46020a9cef…b&isdol=0&code=2&vf=21b57d5213944ca1baabb17c8d5fb988&np_tag=nginx_part_tag",
                "m3u": "http://cache.m.ptqy.gitv.tv/mus/205025001/ecdcb675c048e53aea46020a9cef5de1/…b&isdol=0&code=2&vf=21b57d5213944ca1baabb17c8d5fb988&np_tag=nginx_part_tag",
                "code": 2,
                "vd": 4,
                "unencryptedDuration": 0,
                "screenSize": "1280x720",
                "vid": "ecdcb675c048e53aea46020a9cef5de1",
                "isVip": false,
                "isPlay": true
            },
            {
                "vd": 5,
                "vid": "f86497dee81a3f4af19bdbd94cb4e807",
                "isVip": true,
                "isPlay": false
            },
            {
                "vd": 10,
                "vid": "223ba5ee47e028d1ed210dbd33e0ee24",
                "isVip": true,
                "isPlay": false
            }
        ],
        "purchaseType": 1,
        "stream": "jisu,720p,jisu_hvc,300,600,720p_hvc,600_hvc,300_hvc",
        "epIsDown": 2,
        "chnName": "电视剧",
        "vipType": "0",
        "isPurchase": 2,
        "isSeries": 1,
        "vipInfo": {
            "payMarkUrl": "http://pic0.ptqy.gitv.tv/common/20171106/ac/1b/vip_100000_v_601.png",
            "isTvod": 0,
            "payMark": "VIP_MARK",
            "isVip": 1,
            "isCoupon": 0,
            "isPkg": 0
        },
        "tvsets": 50,
        "epProbation": 0,
        "time": "",
        "pCount": "1891567768",
        "strategy": "",
        "tvIndiviDemand": 0,
        "payMarkType": "VIP_MARK",
        "playTime": 100,
        "adDuration": 0,
        "aid": 205025001,
        "clientIp": "202.108.14.16",
        "ugc": 0,
        "vd": 4,
        "ds": "A00012",
        "duration": 2648,
        "rTime": "",
        "previewType": "",
        "m3utx": "http://cache.m.ptqy.gitv.tv/mus/text/205025001/ecdcb675c048e53aea46020a9cef…b&isdol=0&code=2&vf=21b57d5213944ca1baabb17c8d5fb988&np_tag=nginx_part_tag",
        "tail": 2520,
        "um": 0,
        "cid": 2,
        "tipType": "",
        "m3u": "http://cache.m.ptqy.gitv.tv/mus/205025001/ecdcb675c048e53aea46020a9cef5de1/…b&isdol=0&code=2&vf=21b57d5213944ca1baabb17c8d5fb988&np_tag=nginx_part_tag",
        "ad": 1,
        "head": 58,
        "prv": "",
        "isJumpHeader": false,
        "position": 0
    };

    // // 添加
    // var customerData = [
    //     { id: 1, name: "Bill", age: 35, email: "bill@company.com" },
    //     { id: 3, name: "Donna", age: 32, email: "donna@home.org" }
    // ];
    // DB_INDEXEDDB.addItems(customerData, function (items) {
    //     console.log('add success');
    //     console.log(JSON.stringify(items));
    //     console.log('start getItems');
    //     DB_INDEXEDDB.getItems(function (items) {
    //         console.log(JSON.stringify(items));
    //     });
    // });

    // 更新
    // var item = { id: 3, name: "haha", age: 32, email: "haha@home.org" };
    DB_INDEXEDDB.setItem(item, function (res) {
        console.log(res);
    });

    // // 查询
    // DB_INDEXEDDB.getItemByKey(3, function (item) {
    //     console.log(item);
    // });
    // DB_INDEXEDDB.getItemByIndex("index_email", "donna@home.org", function (item) {
    //     console.log(item);
    // });
    //
    // // 删除
    // DB_INDEXEDDB.removeItem(2, function (res) {
    //   DB_INDEXEDDB.getItems(function (items) {
    //     console.log(items);
    //   });
    // });
}, function () {

}, function (_db) {
    db = _db;
    if(!db.objectStoreNames.contains(DB_STORE_NAME)){
        var store = db.createObjectStore(DB_STORE_NAME, { keyPath: 'tvQId' });

        store.createIndex('indexQpId', 'qpId', { unique: true });
    }
});
