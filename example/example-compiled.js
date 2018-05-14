(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function() {
    var ScrollUtil = require('../scrollUtil');

    var containerEl = document.getElementsByClassName('scrollContainer')[0];

    document.getElementById('top').onclick = function() {
        ScrollUtil.scrollTo('top', containerEl);
    };

    document.getElementById('bottom').onclick = function() {
        ScrollUtil.scrollTo('bottom', containerEl);
    };

    document.getElementById('b').onclick = function() {
        scrollToLetter('b');
    };

    document.getElementById('j').onclick = function() {
        scrollToLetter('j');
    };

    document.getElementById('100px').onclick = function() {
        ScrollUtil.scrollTo(100, containerEl);
    };

    function scrollToLetter(letter) {
        var row = document.getElementById('row-' + letter);
        ScrollUtil.scrollTo(row, containerEl);
    }
})();
},{"../scrollUtil":2}],2:[function(require,module,exports){
module.exports = (function() {

    /**
     * Scroll to a target within a container element.
     * If the target is 'top' or 'bottom', then it will scroll to the top or bottom of the container element.
     * If the target is a DOM element, then it will scroll to the DOM element.
     * If the target is a number, then it will scroll to that many pixels below the top.
     * element.
     * @param target - (String|Number|element) where to scroll
     * @param containerEl - (element) element with the scroll bar
     */
    function scrollTo(target, containerEl) {
        if (target === 'top') {
            containerEl.scrollTop = 0;
        } else if (target === 'bottom') {
            containerEl.scrollTop = containerEl.scrollHeight - containerEl.offsetHeight;
        } else if (isElement(target)) {
            containerEl.scrollTop = target.offsetTop - containerEl.offsetTop;
        } else if (isNumber(target)) {
            containerEl.scrollTop = target;
        }
    }

    return {
        scrollTo: scrollTo
    }
})();

// Helper function - based on underscorejs _.isNumber
function isNumber(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]';
}

// Helper function - based on underscorejs _.isElement
function isElement(obj) {
    return !!(obj && obj.nodeType === 1);
}
},{}]},{},[1]);
