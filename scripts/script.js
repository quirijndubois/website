updateHeader();
UpdateHighlighting();
startCursorUpdate();

const pf = document.querySelector('.pf');
const pfBackground = document.querySelector('.pf-background');
// after 1 second set opacity to 1
setTimeout(() => {
    pfBackground.style.opacity = '1';
    pf.style.opacity = '1';
}, 1500);