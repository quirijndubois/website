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

function highlightFirstNWords(divElement, n, color) {
    // Get the text content of the div
    const text = divElement.textContent;

    // Split the text into words
    const words = text.split(' ');

    // Check if n is within bounds
    if (n > words.length) n = words.length;

    // Wrap the first n words in a span with the specified color
    const highlightedWords = words.slice(0, n).map(word => `<span style="color: ${color};">${word}</span>`);

    // Combine the highlighted words with the rest of the words
    const remainingWords = words.slice(n);
    const newHTML = [...highlightedWords, ...remainingWords].join(' ');

    // Set the updated HTML back to the div
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

function paragraphUpdater() {

    const triggerHeight = window.innerHeight * 0.75;

    const paragraphs = document.querySelectorAll('h1, p');

    for (let i = 0; i < paragraphs.length; i++) {
        const top = paragraphs[i].getBoundingClientRect().top;
        if (top < triggerHeight) {
            if (!paragraphs[i].classList.contains('revealed')) {
                typeWriteWords(paragraphs[i], 1000);
                paragraphs[i].classList.add('revealed');
            }
        }
    }

    window.requestAnimationFrame(paragraphUpdater);

}
paragraphUpdater();