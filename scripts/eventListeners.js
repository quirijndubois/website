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
    cursor.style.animation = 'highLight 0.2s ease-in-out';
    cursor.style.transform = 'scale(3) translate(-3.3px, -3.3px)';
});

document.addEventListener('mouseup', () => {
    cursor.style.animation = 'unhighLight 0.2s ease-in-out';
    cursor.style.transform = 'scale(1) translate(-10px, -10px)';
});

