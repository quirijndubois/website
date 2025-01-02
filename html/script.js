function mapRange(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function mapRangeClamp(value, low1, high1, low2, high2) {
    return clamp(mapRange(value, low1, high1, low2, high2), low2, high2);
}

let offset = 40

function updateHeader() {
    window.requestAnimationFrame(updateHeader);

    const header = document.querySelector('.header');

    headerHeight = header.getBoundingClientRect().top;

    if (window.scrollY > window.innerHeight / 2 - offset) {
        header.style.top = window.scrollY + offset + 'px';
    }
    else {
        header.style.top = window.innerHeight / 2 + 'px';
    }

    let scale = mapRangeClamp(window.scrollY, window.innerHeight - offset * 2, window.innerHeight / 2 - offset * 2, 0.5, 1);
    header.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
}

updateHeader();