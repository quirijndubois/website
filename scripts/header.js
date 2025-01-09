let headerOffset = 40

function updateHeader() {
    window.requestAnimationFrame(updateHeader);

    const header = document.querySelector('.header');
    const links = document.querySelector('.links');

    headerHeight = header.getBoundingClientRect().top;

    if (window.scrollY > window.innerHeight / 2 - headerOffset) {
        header.style.top = window.scrollY + headerOffset + 'px';
    }
    else {
        header.style.top = window.innerHeight / 2 + 'px';
    }

    let scale = mapRangeClamp(window.scrollY, window.innerHeight - headerOffset * 2, window.innerHeight / 2 - headerOffset * 2, 0.5, 1);
    header.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';

    let opacity = mapRangeClamp(window.scrollY, window.innerHeight * 0.5, window.innerHeight * 0.3, 0, 1);
    links.style.opacity = opacity;
}