"use strict";
/*
 * @Author: Innei
 * @Date: 2020-08-13 21:31:23
 * @LastEditTime: 2020-08-13 21:46:59
 * @LastEditors: Innei
 * @FilePath: /url-animation/package.ts
 * @Coding with Love
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.animateUriFactory = void 0;
exports.animateUriFactory = function () {
    /**
     * @type {number | null}
     */
    var timer = undefined;
    var duration = 100;
    var navigator = '';
    var shouldPushState = true;
    return {
        /**
         *
         * @param {{duration?: number,shouldPushState?: boolean}}
         */
        create: function (_a) {
            var _b = _a === void 0 ? {
                duration: 100,
                shouldPushState: true,
            } : _a, duration = _b.duration, shouldPushState = _b.shouldPushState;
            duration = duration !== null && duration !== void 0 ? duration : 100;
            shouldPushState = shouldPushState !== null && shouldPushState !== void 0 ? shouldPushState : true;
            return {
                start: this.start,
                stop: this.stop,
            };
        },
        /**
         *
         * @param {string} to
         * @param {string | undefined} startWith
         */
        start: function (to, startWith) {
            var _this = this;
            if (typeof to !== 'string' || to.charAt(0) !== '/') {
                throw new Error('to must start with `/`');
            }
            if (timer) {
                timer = clearInterval(timer);
            }
            if (startWith && startWith.charAt(0) === '/') {
                history.replaceState(null, '', startWith);
            }
            var once = false;
            var currentTitle = document.title;
            timer = setInterval(function () {
                var beforeUri = encodeURI(decodeURI(location.pathname).replace(/<% emojiSequence %>|\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}/gu, ''));
                // const handler = (event) => {
                //   clearInterval(timer)
                //   history.pushState(null, title ?? currentTitle, afterUri)
                //   event.preventDefault()
                //   const msg = '地址正在过度, 现在刷新可能出现问题哦'
                //   event.returnValue = msg
                //   return msg
                // }
                if (beforeUri === to) {
                    return _this.stop();
                    // window.removeEventListener('beforeunload', handler)
                }
                var isBuild = to.indexOf(beforeUri) > -1;
                var stepUri = isBuild
                    ? beforeUri.concat(to.charAt(beforeUri.length))
                    : beforeUri.slice(0, beforeUri.length - 1);
                if (!once) {
                    navigator = to;
                    if (shouldPushState) {
                        history.pushState(null, currentTitle, to);
                    }
                    once = true;
                }
                history.replaceState(null, currentTitle, "" + stepUri + (!isBuild ? "\uD83D\uDD28\uD83D\uDC74" : "\uD83C\uDF7B"));
            }, duration);
            // history.replaceState(null, title ?? currentTitle, uri)
        },
        stop: function () {
            timer = clearInterval(timer);
            return history.replaceState(null, '', navigator);
        },
    };
};
