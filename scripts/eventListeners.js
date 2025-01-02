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