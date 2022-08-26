import watchDom from '@hai2007/browser/watchDom.js';

var enhanceEcharts = function (echarts) {

    var _init = echarts.init;
    echarts.init = function (dom, theme, opts) {

        var instance;

        watchDom(dom, function () {

            var options = instance.getOption()

            instance.clear();
            instance.resize({
                width: dom.offsetWidth,
                height: dom.offsetHeight
            });
            instance.setOption(options);
        });

        instance = _init(dom, theme, opts);

        return instance;
    }

    return echarts;
};

if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = enhanceEcharts;
} else {
    window.enhanceEcharts = enhanceEcharts;
}
