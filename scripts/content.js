const titleText = 'Quirijn du Bois';
const footerText = 'Quirijn du Bois';

content = [];

function pageToTypes(text) {
    textArray = text.split('\n');
    textArray = textArray.filter(line => line != '');

    let textToReturn = []
    textArray.forEach(paragraph => {
        if (paragraph[0] == '#') {
            if (paragraph[1] == '#') {
                textToReturn.push(["h2", paragraph.slice(2), "h2"]);
            }
            else {
                textToReturn.push(["h1", paragraph.slice(1), "h1"]);
            }
        }
        else if (paragraph[0] == '$') {
            textToReturn.push(["p", paragraph.slice(1), "math"]);
        }
        else if (paragraph[0] == ':') {
            textToReturn.push(["p", paragraph.slice(1), "date"]);
        }
        else if (paragraph[0] == '@') {
            textToReturn.push(["a", paragraph.slice(1), "a"]);
        }

        else {
            textToReturn.push(["p", paragraph, "p"]);
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
    let className = content[2];

    const paragraph = document.createElement(type);
    paragraph.classList.add(className);
    paragraph.innerHTML = text;
    document.querySelector('.content').appendChild(paragraph);

    if (className == "a") {
        paragraph.href = text;
        paragraph.target = "_blank";
    }
}