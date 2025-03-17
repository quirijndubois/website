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

function reveal(element, duration) {
    element.style.color = "white";
    MathJax.typeset()
}

function highlightFirstNWords(divElement, n, color) {
    const text = divElement.textContent;

    const words = text.split(' ');

    if (n > words.length) n = words.length;

    const highlightedWords = words.slice(0, n).map(word => `<span style="color: ${color};">${word}</span>`);

    const remainingWords = words.slice(n);
    const newHTML = [...highlightedWords, ...remainingWords].join(' ');

    divElement.innerHTML = newHTML;
}

function highlightFirstNLetters(divElement, n, color) {
    const text = divElement.textContent;

    const letters = text.split('');

    if (n > letters.length) n = letters.length;

    const highlightedLetters = letters.slice(0, n).map(letter => `<span style="color: ${color};">${letter}</span>`);

    const remainingLetters = letters.slice(n);
    const newHTML = [...highlightedLetters, ...remainingLetters].join('');

    divElement.innerHTML = newHTML;
}

function typeWriteWords(element, duration) {

    const text = element.textContent;
    const words = text.split(' ');
    const wordCount = words.length;

    words.forEach((letter, i) => {
        setTimeout(() => {
            highlightFirstNWords(element, i, 'white');
        }, i * duration / wordCount);
    });
    setTimeout(() => {
        highlightFirstNWords(element, wordCount, 'white');
    }, duration);
}

function typeWriteLetters(element, duration) {

    const text = element.textContent;
    const letters = text.split('');
    const letterCount = letters.length;

    letters.forEach((letter, i) => {
        setTimeout(() => {
            highlightFirstNLetters(element, i, 'white');
        }, i * duration / letterCount);
    });
    setTimeout(() => {
        highlightFirstNWords(element, letterCount, 'white');
    }, duration);
}

function paragraphUpdater() {

    const triggerHeight = window.innerHeight * 0.75;

    const paragraphs = document.querySelectorAll('.p');
    const h1s = document.querySelectorAll('h1, h2');
    const maths = document.querySelectorAll('.math');
    const dates = document.querySelectorAll('.date');
    const links = document.querySelectorAll('.a');
    let lastDrawnElement = null;

    for (let i = 0; i < paragraphs.length; i++) {
        const top = paragraphs[i].getBoundingClientRect().top;
        if (top < triggerHeight) {
            lastDrawnElement = paragraphs[i];
            if (!paragraphs[i].classList.contains('revealed')) {
                typeWriteWords(paragraphs[i], 500);
                paragraphs[i].classList.add('revealed');
            }
        }
    }
    for (let i = 0; i < h1s.length; i++) {
        const top = h1s[i].getBoundingClientRect().top;
        if (top < triggerHeight) {
            lastDrawnElement = h1s[i];
            if (!h1s[i].classList.contains('revealed')) {
                typeWriteLetters(h1s[i], 1000);
                h1s[i].classList.add('revealed');
            }
        }
    }
    for (let i = 0; i < maths.length; i++) {
        const top = maths[i].getBoundingClientRect().top;
        if (top < triggerHeight) {
            lastDrawnElement = maths[i];
            if (!maths[i].classList.contains('revealed')) {
                reveal(maths[i], 0);
                maths[i].classList.add('revealed');
            }
        }
    }
    for (let i = 0; i < dates.length; i++) {
        const top = dates[i].getBoundingClientRect().top;
        if (top < triggerHeight) {
            if (!dates[i].classList.contains('revealed')) {
                typeWriteLetters(dates[i], 2500);
                dates[i].classList.add('revealed');
            }
        }
    }

    for (let i = 0; i < links.length; i++) {
        const top = links[i].getBoundingClientRect().top;
        if (top < triggerHeight) {
            if (!links[i].classList.contains('revealed')) {
                typeWriteLetters(links[i], 1000);
                links[i].classList.add('revealed');
            }
        }
    }

    revealedElements = document.querySelectorAll('.revealed');
    lastElements = document.querySelectorAll('.last');
    for (let i = 0; i < lastElements.length; i++) {
        lastElements[i].classList.remove('last');
    }
    // make sure revealed element is not the very last element
    const allElements = document.querySelectorAll('.p, h1, .math, .date, .a');
    const lastElement = allElements[allElements.length - 1];

    if (revealedElements.length > 0 && revealedElements[revealedElements.length - 1] != lastElement) {
        const lowestRevealedElement = revealedElements[revealedElements.length - 1];
        lowestRevealedElement.classList.add('last');
    }

    window.requestAnimationFrame(paragraphUpdater);

}
paragraphUpdater();