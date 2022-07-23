/*!
 * enhanceEcharts - 一个加强版本的echarts，比如可以自动监听画布大小改变并进行重绘。
 * git+https://github.com/hai2007/enhanceEcharts.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 0.1.0
 *
 * Copyright (c) 2022 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Sat Jul 23 2022 17:10:23 GMT+0800 (中国标准时间)
 */
(function () {
    'use strict';

    /*!
     * 🌐 - 监听DOM改变
     * https://github.com/hai2007/browser.js/blob/master/watchDom.js
     *
     * author hai2007 < https://hai2007.gitee.io/sweethome >
     *
     * Copyright (c) 2022-present hai2007 走一步，再走一步。
     * Released under the MIT license
     */

    var _support_ = true;

    function watchDom (el, doback) {

        var observer = null;
        var _hadWilldo_ = false;
        var _hadNouse_ = false;

        var doit = function () {

            // 如果前置任务都完成了
            if (!_hadWilldo_) {
                _hadWilldo_ = true;

                // 既然前置任务已经没有了，那么就可以更新了？
                // 不是的，可能非常短的时间里，后续有改变
                // 因此延迟一点点来看看后续有没有改变
                // 如果改变了，就再延迟看看
                var interval = window.setInterval(function () {

                    // 判断当前是否可以立刻更新
                    if (!_hadNouse_) {
                        window.clearInterval(interval);

                        _hadWilldo_ = false;
                        doback();

                    }

                    _hadNouse_ = false;
                }, 100);

            } else {
                _hadNouse_ = true;
            }
        };

        try {


            observer = new ResizeObserver(doit);
            observer.observe(el);

        } catch (e) {

            // 如果浏览器不支持此接口

            if (_support_) {
                console.warn('ResizeObserver undefined!');

                // 不支持的话，提示一次就可以了
                _support_ = false;
            }

            // 使用resize进行退化支持
            doit();
            window.addEventListener('resize', doit, false);

        }

        return function () {
            if (observer) {

                // 解除对画布大小改变的监听
                observer.disconnect();

            }
        };

    }

    var enhanceEcharts = function (echarts) {

        var _init = echarts.init;
        echarts.init = function (dom, theme, opts) {

            var instance;

            watchDom(dom, function () {

                var options = JSON.parse(JSON.stringify(instance.getOption()));

                instance.clear();
                instance.resize({
                    width: dom.offsetWidth,
                    height: dom.offsetHeight
                });
                instance.setOption(options);
            });

            instance = _init(dom, theme, opts);

            return instance;
        };

        return echarts;
    };

    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = enhanceEcharts;
    } else {
        window.enhanceEcharts = enhanceEcharts;
    }

}());
