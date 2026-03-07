let isMouseDown = false;
let mouseDownTimer = null;

document.addEventListener('keydown', (event) => {
    if (event.key == 'r') {
        window.location.reload();
    }
});

document.addEventListener('mousemove', (e) => {
    AFKtime = 0;
    scrolled = window.scrollY;
    mousePos = { x: e.clientX, y: e.clientY };
});

document.addEventListener('scroll', () => {
    scrolled = window.scrollY;
});

document.addEventListener('mousedown', () => {
    isMouseDown = true;
    cursor.style.animation = 'highLight 0.2s ease-in-out';
    cursor.style.transform = 'scale(3) translate(-3.3px, -3.3px)';
    AFKtime = 0;
    
    // Keep resetting AFKtime while mouse is held down
    mouseDownTimer = setInterval(() => {
        if (isMouseDown) {
            AFKtime = 0;
        }
    }, 50);
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
    clearInterval(mouseDownTimer);
    cursor.style.animation = 'unhighLight 0.2s ease-in-out';
    cursor.style.transform = 'scale(1) translate(-10px, -10px)';
});

document.addEventListener('dragend', () => {
    cursor.style.animation = 'unhighLight 0.2s ease-in-out';
    cursor.style.transform = 'scale(1) translate(-10px, -10px)';
});