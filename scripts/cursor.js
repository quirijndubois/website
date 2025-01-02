const cursor = document.querySelector('.circle');

let scrolled = 0;
let mousePos = { x: 0, y: 0 };
let AFKtime = 1;

function updateCursor() {
    window.requestAnimationFrame(updateCursor);
    AFKtime += 1 / 60;
    cursor.style.opacity = mapRangeClamp(AFKtime, 1.5, 1, 0, 1);
    cursor.style.left = mousePos.x + 'px';
    cursor.style.top = mousePos.y + scrolled + 'px';
}

function startCursorUpdate() {
    const body = document.querySelector('body');
    body.style.cursor = 'none';
    updateCursor();
}