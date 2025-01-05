updateHeader();
UpdateHighlighting();
startCursorUpdate();

const pf = document.querySelector('.pf');
const pfBackground = document.querySelector('.pf-background');
// after 1 second set opacity to 1
setTimeout(() => {
    pfBackground.style.opacity = '1';
    pf.style.opacity = '1';
}, 1500);


function addParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = text;
    document.querySelector('.content').appendChild(paragraph);
}

const title = document.querySelector('.header');
typeWrite(title, 1000, titleText);

for (let i = 0; i < content[0].length; i++) {
    addParagraph(content[0][i]);
}
