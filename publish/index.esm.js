"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindAllLink = exports.animateUriFactory = exports.EmojiRegExp = void 0;
/*
 * @Author: Innei
 * @Date: 2020-08-13 21:31:23
 * @LastEditTime: 2020-08-14 14:20:13
 * @LastEditors: Innei
 * @FilePath: /url-animation/index.ts
 * @Coding with Love
 */
var isSSR = typeof window === 'undefined';
exports.EmojiRegExp = /<% emojiSequence %>|\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}/gu;
exports.animateUriFactory = function (config) {
    if (config === void 0) { config = {
        duration: 60,
        shouldPushState: true,
        backspacingEmoji: "\uD83D\uDD28\uD83D\uDC74",
        buildingEmoji: "\uD83C\uDF7B",
    }; }
    if (isSSR) {
        return;
    }
    if (!('replaceState' in history)) {
        throw new Error('browser not support replaceState.');
    }
    var timer = undefined;
    var navigator = '';
    var duration = config.duration || 100;
    var shouldPushState = config.shouldPushState || true;
    var backspacingEmoji = config.backspacingEmoji || "\uD83D\uDD28\uD83D\uDC74";
    var buildingEmoji = config.buildingEmoji || "\uD83C\uDF7B";
    return {
        /**
         *
         * @param {string} to
         * @param {string | undefined} startWith
         */
        start: function (to, startWith) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (typeof to !== 'string' || to.charAt(0) !== '/') {
                    reject(new Error('to must start with `/`'));
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
                    var beforeUri = decodeURI(location.pathname).replace(exports.EmojiRegExp, '');
                    if (beforeUri === to) {
                        resolve();
                        return _this.stop();
                    }
                    var isBuilding = to.indexOf(beforeUri) > -1;
                    // beforeUri = beforeUri.replace(
                    //   new RegExp(`${isBuilding ? buildingEmoji : backspacingEmoji}$`, 'gu'),
                    //   '',
                    // )
                    var stepUri = isBuilding
                        ? beforeUri.concat(to.charAt(beforeUri.length))
                        : beforeUri.slice(0, beforeUri.length - 1);
                    if (!once) {
                        navigator = to;
                        if (shouldPushState) {
                            history.pushState(null, currentTitle, to);
                        }
                        once = true;
                    }
                    history.replaceState(null, currentTitle, "" + stepUri + (!isBuilding ? backspacingEmoji : buildingEmoji));
                }, duration);
            });
        },
        stop: function () {
            timer = clearInterval(timer);
            return history.replaceState(null, '', navigator);
        },
        cancel: function () {
            timer = clearInterval(timer);
        },
    };
};
exports.bindAllLink = function (config) {
    if (isSSR) {
        return;
    }
    var instance = exports.animateUriFactory(config);
    var $$links = Array.from(document.querySelectorAll('a'));
    var _loop_1 = function ($link) {
        var destination = $link.getAttribute('href');
        if (destination &&
            destination.charAt(0) === '/' &&
            destination.charAt(1) !== '/') {
            $link.addEventListener('click', function (e) {
                e.preventDefault();
                instance === null || instance === void 0 ? void 0 : instance.start(destination);
            });
        }
    };
    for (var _i = 0, $$links_1 = $$links; _i < $$links_1.length; _i++) {
        var $link = $$links_1[_i];
        _loop_1($link);
    }
    return instance;
};
