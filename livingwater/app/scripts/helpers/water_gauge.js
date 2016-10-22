var ProgressBar = require('progressbar.js');

/*
Pass in the element that will be filled in with usage.
*/

var displayUsage = function(element) {
    var bar = new ProgressBar.Path(element, {
        easing: 'easeInOut',
        duration: 1400
    });

    bar.set(0);
    bar.animate(1.0);
};

module.exports = displayUsage;
