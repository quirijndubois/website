let headerOffset = 40

function updateHeader() {
    window.requestAnimationFrame(updateHeader);

    const header = document.querySelector('.header');

    headerHeight = header.getBoundingClientRect().top;

    if (window.scrollY > window.innerHeight / 2 - headerOffset) {
        header.style.top = window.scrollY + headerOffset + 'px';
    }
    else {
        header.style.top = window.innerHeight / 2 + 'px';
    }

    let scale = mapRangeClamp(window.scrollY, window.innerHeight - headerOffset * 2, window.innerHeight / 2 - headerOffset * 2, 0.5, 1);
    header.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
}