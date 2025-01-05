let lastHighLightingIndex = -1;

function UpdateHighlighting() {

    window.requestAnimationFrame(UpdateHighlighting);
    const paragraphs = document.querySelectorAll('p');

    if (paragraphs.length == 0) {
        return;
    }

    let positions = [];
    for (let i = 0; i < paragraphs.length; i++) {
        let top = paragraphs[i].getBoundingClientRect().top;
        let bottom = paragraphs[i].getBoundingClientRect().bottom;
        positions.push([top, bottom]);
    }

    let centerScreen = window.innerHeight / 2;
    let index = -1;
    for (let i = 0; i < positions.length; i++) {
        if (centerScreen > positions[i][0] && centerScreen < positions[i][1]) {
            index = i;
        }
    }

    if (index != lastHighLightingIndex) {
        if (lastHighLightingIndex != -1) {
            paragraphs[lastHighLightingIndex].style.animation = 'darken 0.5s ease-in-out';
            paragraphs[lastHighLightingIndex].style.opacity = '0.5';
        }
        if (index != -1) {
            paragraphs[index].style.animation = 'brighten 0.5s ease-in-out';
            paragraphs[index].style.opacity = '1';
        }
    }
    lastHighLightingIndex = index;
}
