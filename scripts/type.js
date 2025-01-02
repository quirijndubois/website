function addParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = text;
    document.body.appendChild(paragraph);
}

function addFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = footerText;
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

for (let i = 0; i < content.length; i++) {
    addParagraph("");
}


const paragraphs = document.querySelectorAll('p');
let triggerHeight = 0;
let reavealIndex = 0
let revealTimer = 60

function paragraphUpdater() {
    const screenHeight = window.innerHeight;
    triggerHeight = paragraphs[reavealIndex].getBoundingClientRect().top;
    if (reavealIndex < paragraphs.length && triggerHeight < screenHeight * 0.75 && revealTimer > 60) {
        typeWrite(paragraphs[reavealIndex], 1000, content[reavealIndex]);
        paragraphs[reavealIndex].style.color = 'white';
        reavealIndex += 1;
        revealTimer = 0;
    }
    if (reavealIndex < paragraphs.length) {
        window.requestAnimationFrame(paragraphUpdater);
    }
    revealTimer += 1;
}

paragraphUpdater();

addFooter();