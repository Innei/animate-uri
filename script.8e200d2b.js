parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ESML":[function(require,module,exports) {
var define;
var u;function D(u){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(u){return typeof u}:function(u){return u&&"function"==typeof Symbol&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u})(u)}parcelRequire=function(t,e,r,E){var n,F="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function i(u,D){if(!e[u]){if(!t[u]){var r="function"==typeof parcelRequire&&parcelRequire;if(!D&&r)return r(u,!0);if(F)return F(u,!0);if(o&&"string"==typeof u)return o(u);var E=new Error("Cannot find module '"+u+"'");throw E.code="MODULE_NOT_FOUND",E}C.resolve=function(D){return t[u][1][D]||D},C.cache={};var n=e[u]=new i.Module(u);t[u][0].call(n.exports,C,n,n.exports,this)}return e[u].exports;function C(u){return i(C.resolve(u))}}i.isParcelRequire=!0,i.Module=function(u){this.id=u,this.bundle=i,this.exports={}},i.modules=t,i.cache=e,i.parent=F,i.register=function(u,D){t[u]=[function(u,t){t.exports=D},{}]};for(var C=0;C<r.length;C++)try{i(r[C])}catch(t){n||(n=t)}if(r.length){var a=i(r[r.length-1]);"object"==("undefined"==typeof exports?"undefined":D(exports))&&"undefined"!=typeof module?module.exports=a:"function"==typeof u&&u.amd?u(function(){return a}):this[E]=a}if(parcelRequire=i,n)throw n;return i}({QCba:[function(u,D,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bindAllLink=t.animateUriFactory=t.EmojiRegExp=void 0,t.EmojiRegExp=/<% emojiSequence %>|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g,t.animateUriFactory=function(u){if(void 0===u&&(u={duration:60,shouldPushState:!0,backspacingEmoji:"🔨👴",buildingEmoji:"🍻"}),!("replaceState"in history))throw new Error("browser not support replaceState.");var D=void 0,e="",r=u.duration||100,E=u.shouldPushState||!0,n=u.backspacingEmoji||"🔨👴",F=u.buildingEmoji||"🍻";return{start:function(u,o){var i=this;if("string"!=typeof u||"/"!==u.charAt(0))throw new Error("to must start with `/`");D&&(D=clearInterval(D)),o&&"/"===o.charAt(0)&&history.replaceState(null,"",o);var C=!1,a=document.title;return D=setInterval(function(){var D=decodeURI(location.pathname).replace(t.EmojiRegExp,"");if(D===u)return i.stop();var r=u.indexOf(D)>-1,o=r?D.concat(u.charAt(D.length)):D.slice(0,D.length-1);C||(e=u,E&&history.pushState(null,a,u),C=!0),history.replaceState(null,a,""+o+(r?F:n))},r),this},stop:function(){return D=clearInterval(D),history.replaceState(null,"",e)}}},t.bindAllLink=function(u){for(var D=t.animateUriFactory(u),e=function(u){var t=u.getAttribute("href");t&&"/"===t.charAt(0)&&"/"!==t.charAt(1)&&u.addEventListener("click",function(u){u.preventDefault(),D.start(t)})},r=0,E=Array.from(document.querySelectorAll("a"));r<E.length;r++)e(E[r]);return D}},{}]},{},["QCba"],"animateUri");
},{}],"g4tf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./publish");t.animateUriFactory({duration:60,shouldPushState:!1}).start("/hello-world","/");var e=t.bindAllLink(),n=document.getElementById("destination"),r=document.getElementById("button");r.onclick=function(t){var r=n.value;"/"!=r.charAt(0)&&(r="/".concat(r)),e.start(r)};
},{"./publish":"ESML"}]},{},["g4tf"], null)
//# sourceMappingURL=animate-uri/script.8e200d2b.js.map