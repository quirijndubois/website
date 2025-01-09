updateHeader();
UpdateHighlighting();

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (!isMobile) {
    startCursorUpdate();
}

const title = document.querySelector('.header');
typeWrite(title, 1000, titleText);

fetchTxtFiles(['content/about.md', 'content/blog.md', 'content/contact.md'])
    .then(texts => {
        content = texts;
        for (let i = 0; i < content[pageIndex].length; i++) {
            addParagraph(content[pageIndex][i]);
        }
    })
