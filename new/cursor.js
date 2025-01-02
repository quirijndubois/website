function mapRange(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function mapRangeClamp(value, low1, high1, low2, high2) {
    return clamp(mapRange(value, low1, high1, low2, high2), low2, high2);
}


let circle = document.createElement('div');
circle.classList.add('circle');
document.body.appendChild(circle);


let scrolled = 0;
let mousePos = { x: 0, y: 0 };

document.addEventListener('mousemove', (e) => {
    AFKtime = 0;
    scrolled = window.scrollY;
    mousePos = { x: e.clientX, y: e.clientY };

    circle.style.left = mousePos.x + 'px';
    circle.style.top = mousePos.y + scrolled + 'px';
});
document.addEventListener('scroll', () => {
    scrolled = window.scrollY;

    circle.style.left = mousePos.x + 'px';
    circle.style.top = mousePos.y + scrolled + 'px';
});



// add function that runs every frame

let AFKtime = 1;
function loop() {
    window.requestAnimationFrame(loop);
    AFKtime += 1/60;
    circle.style.opacity = mapRangeClamp(AFKtime, 1.5, 1, 0, 1);
}
loop();