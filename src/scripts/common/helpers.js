function toggleClass(className, keyWord) {
    document.querySelector('.' + className).classList.toggle(className+ '_' + keyWord);
}
export {toggleClass};