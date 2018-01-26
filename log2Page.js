function log2Page() {
    console.log = function (text) {
        var $elem = document.getElementById('logItem');
        $elem = !$elem ? (function () {
            $elem = document.createElement('div');
            $elem.setAttribute('id', 'logItem');
            document.body.appendChild($elem);
            return $elem;
        })() : $elem;
        var innerText = $elem.innerText;
        var newText = typeof text === 'object' ? JSON.stringify(text) : text;
        innerText += newText + '\n';
        $elem.innerText = innerText;
    };
}

log2Page();