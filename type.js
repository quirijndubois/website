// refresh on r
document.addEventListener('keydown', (event) => {
    if (event.key == 'r') {
        window.location.reload();
    }
});


const titleText = 'Quirijn du Bois';

const content = [
    `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus at leo a pretium. Phasellus in nibh vitae
    lorem gravida blandit. Praesent mi enim, porttitor sed felis eget, sollicitudin facilisis mauris. Nulla ac leo
    est. Duis ut dictum velit, non mattis lorem. Nam rhoncus leo eu erat rutrum luctus. Aliquam pharetra nisi quis
    diam egestas malesuada.
    `,
    `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus at leo a pretium. Phasellus in nibh vitae
    lorem gravida blandit. Praesent mi enim, porttitor sed felis eget, sollicitudin facilisis mauris. Nulla ac leo
    est. Duis ut dictum velit, non mattis lorem. Nam rhoncus leo eu erat rutrum luctus. Aliquam pharetra nisi quis
    diam egestas malesuada.
    `,
    `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus at leo a pretium. Phasellus in nibh vitae
    lorem gravida blandit. Praesent mi enim, porttitor sed felis eget, sollicitudin facilisis mauris. Nulla ac leo
    est. Duis ut dictum velit, non mattis lorem. Nam rhoncus leo eu erat rutrum luctus. Aliquam pharetra nisi quis
    diam egestas malesuada.
    `,
]

function addParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = text;
    document.body.appendChild(paragraph);
}

function addFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = 'Quirijn du Bois';
    document.body.appendChild(footer);
}

function typeWrite(element, duration, text) {
    const height = element.getBoundingClientRect().height;
    const textArray = text.split('');
    element.innerHTML = '';

    const length = textArray.length;

    textArray.forEach((letter, i) => {
        setTimeout(() => {
            element.innerHTML += letter;
            element.getBoundingClientRect().height = height;
        }, i * duration / length);
    });
}
const title = document.querySelector('.header');
typeWrite(title, 1000, titleText);

addParagraph("");
addParagraph("");
addParagraph("");
addFooter();

const paragraphs = document.querySelectorAll('p');

const screenHeight = window.innerHeight;

let triggerHeight = 0;
let index = 0
let timer = 60

function paragraphUpdater() {
    triggerHeight = paragraphs[index].getBoundingClientRect().top;
    if (index < paragraphs.length && triggerHeight < screenHeight * 0.75 && timer > 60) {
        typeWrite(paragraphs[index], 1000, content[index]);
        paragraphs[index].style.color = 'white';
        index += 1;
        timer = 0;
    }
    if (index < paragraphs.length) {
        window.requestAnimationFrame(paragraphUpdater);
    }
    timer += 1;
}

paragraphUpdater();
