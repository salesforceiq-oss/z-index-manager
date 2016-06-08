///<reference path="../typings/browser.d.ts"/>
declare var require: NodeRequire;
let ZIndexManager = require('../.src').default;

document.body.addEventListener('click', function(e) {
    if ((<Element>e.target).getAttribute('id') === 'newElBtn') {
        let num = ZIndexManager.getHighest().toString();
        let el = document.createElement('div');
        el.setAttribute('class', 'zElement');
        el.setAttribute('style', 'z-index: ' + num + ';');
        el.innerText = 'z-index: ' + num;
        document.body.appendChild(el);
    }
});
