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