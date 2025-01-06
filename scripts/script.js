updateHeader();
UpdateHighlighting();

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (!isMobile) {
    startCursorUpdate();
}

const pf = document.querySelector('.pf');
const pfBackground = document.querySelector('.pf-background');
setTimeout(() => {
    pfBackground.style.opacity = '1';
    pf.style.opacity = '1';
}, 1500);

const title = document.querySelector('.header');
typeWrite(title, 1000, titleText);

fetchTxtFiles(['content/about.md', 'content/blog.md', 'content/contact.md'])
    .then(texts => {
        content = texts;
        for (let i = 0; i < content[pageIndex].length; i++) {
            addParagraph(content[pageIndex][i]);
        }
    })
