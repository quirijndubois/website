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

const navItems = document.querySelectorAll('.nav-item');

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', (e) => {

        for (let j = 0; j < navItems.length; j++) {
            navItems[j].classList.remove('active');
        }
        navItems[i].classList.add('active');

        let paragraphs = document.querySelectorAll('h1, p');
        for (let j = 0; j < paragraphs.length; j++) {
            paragraphs[j].remove();
        }

        for (let j = 0; j < content[i].length; j++) {
            addParagraph(content[i][j]);
        }
    });
}