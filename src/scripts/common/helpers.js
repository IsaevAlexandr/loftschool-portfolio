/**
 * Toggle active class from element
 * @param {*String} className 
 * @param {*String} keyWord 
 */
function toggleClass(className, keyWord) {
    document.querySelector('.' + className).classList.toggle(className+ '_' + keyWord);
}

/**
 * Smooth scroll to element
 * @param {*String} className 
 * @param {*Number} duration (ms) 
 */
function smoothScrollTo(className, duration) {
    var duration = duration || 300;
    var startPoint = window.pageYOffset;
    var distance = Math.ceil(document.querySelector('.' + className).getBoundingClientRect().top);
    var iteration = 120;
    var endPoint = distance + startPoint;
    var distancePerTick = distance / iteration;
    var sumParts = Math.ceil(startPoint + distancePerTick);
    var tickTime = Math.ceil(duration / iteration);

    var animate = setTimeout(function tick() {
        window.scrollTo(0, sumParts);
        iteration--;
        sumParts += distancePerTick;
        animate = setTimeout(tick, tickTime);
        if (iteration <= 0) {
            clearTimeout(animate);
        }
    }, tickTime)
}

export {toggleClass, smoothScrollTo};