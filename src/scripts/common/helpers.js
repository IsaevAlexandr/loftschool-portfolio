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
function animatedScrollTo(className, duration) {
    var duration = duration || 300;
    var startPoint = window.pageYOffset;
    var iteration = 60;
    var distance = document.querySelector('.' + className).getBoundingClientRect().top;
    var endPoint = distance + startPoint;
    var distancePart = distance / iteration;

    var sumParts = startPoint;
    var tickTime = duration / iteration;

    var animate = setTimeout(function tick() {
        window.scrollTo(0, sumParts);

        iteration--;
        sumParts += distancePart;
        animate = setTimeout(tick, tickTime);
        if (iteration <= 0) {
            clearTimeout(animate);
        }
    }, tickTime)
}

export {toggleClass, animatedScrollTo};