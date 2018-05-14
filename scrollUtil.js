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