const titleText = 'Quirijn du Bois';
const footerText = 'Quirijn du Bois';

content = [];

function pageToTypes(text) {
    textArray = text.split('\n\n');
    let textToReturn = []
    textArray.forEach(paragraph => {
        if (paragraph[0] == '#') {
            textToReturn.push(["h1", paragraph.slice(1)]);
        }
        else {
            textToReturn.push(["p", paragraph]);
        }
    });

    return textToReturn;
}

async function fetchTxtFiles(urls) {
    const fetchPromises = urls.map(async (url) => {
        const response = await fetch(url);
        return pageToTypes(await response.text());
    });

    return Promise.all(fetchPromises);
}

function addParagraph(content) {

    let text = content[1];
    let type = content[0];

    const paragraph = document.createElement(type);
    paragraph.innerHTML = text;
    document.querySelector('.content').appendChild(paragraph);
}