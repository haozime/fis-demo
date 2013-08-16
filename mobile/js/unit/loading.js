define(function (require) {
    var dom = require('./dom'),
        mask = require('./mask');

    var loading = (function () {
        var _loading =  dom.find('.plg-loading')[0] ||
                        document.createElement('div');

        _loading.setAttribute('class', 'plg-loading');
        _loading.innerHTML = '加载。。。';
        document.body.appendChild(_loading);
        return loading ? loading : _loading;
    })();

    return {
        show : function () {
            mask.show();
            loading.style.display = 'block';
        },

        hide : function () {
            mask.hide();
            loading.style.display = 'none';
        }
    };
});