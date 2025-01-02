// refresh on r
document.addEventListener('keydown', (event) => {
    if (event.key == 'r') {
        window.location.reload();
    }
});


const titleText = 'Quirijn du Bois';

const content = [
    `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque metus ut luctus vulputate. Vestibulum lobortis, elit vitae malesuada dictum, massa lectus facilisis eros, eget rutrum arcu ipsum sed arcu. Donec imperdiet congue blandit. Sed in convallis lacus. Suspendisse tincidunt mi id nisi consequat maximus. Nullam ut nisi ut massa aliquam elementum. Proin sollicitudin pellentesque nisl, sit amet finibus ligula varius nec. Morbi accumsan purus quis metus tincidunt, sit amet tempor risus finibus. Nam at posuere tellus. Integer nisi enim, euismod non condimentum et, pharetra sed turpis. Nulla porttitor hendrerit orci, in rutrum dolor vulputate in. Vivamus sit amet convallis metus. Donec nec sapien at velit dignissim ultricies tincidunt et ante. Morbi nec libero purus. Aenean mattis, odio non suscipit aliquet, massa nulla egestas est, at mattis odio nibh id elit. Aenean consequat magna id leo hendrerit ultricies.
    `,
    `
Morbi sit amet risus quis nibh sollicitudin gravida et sed dolor. Ut imperdiet non velit ac scelerisque. Ut sollicitudin, tellus vitae faucibus volutpat, nulla lectus ultricies purus, eget mollis odio lorem at eros. Donec mattis justo placerat tortor maximus, at scelerisque mauris tempus. Aliquam venenatis vulputate urna, id sagittis leo pretium ut. Vestibulum quis lectus ultrices, porttitor mi in, tempor lacus. Sed quis dolor imperdiet tellus tempus bibendum. Donec id libero eu libero ultrices rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    `,
    `
Aliquam erat volutpat. Nam viverra enim id ullamcorper porta. Maecenas sagittis, felis a viverra faucibus, sapien lacus laoreet lectus, in egestas purus nulla et tellus. Duis ac tempus dui. Cras ac eleifend dui. Nullam interdum interdum ante, sit amet suscipit tellus porta congue. In scelerisque, tellus eu aliquam placerat, est diam pellentesque ante, a euismod quam lacus at purus.
    `,
    `
Donec quis mi ligula. Etiam vel libero tellus. Vestibulum semper leo vitae odio tincidunt, semper fermentum quam vulputate. Sed nec tincidunt eros. Sed ullamcorper lacinia felis, sit amet vehicula dui placerat vitae. Proin sem elit, elementum nec dapibus id, gravida quis odio. Nam et molestie purus. Integer in erat vehicula, bibendum tortor vel, tristique leo. Phasellus porttitor vulputate ex, dictum volutpat mi bibendum ut. Maecenas elementum ut massa sit amet auctor. Mauris convallis dictum mauris ac tempor. Curabitur tristique fringilla ante, in condimentum neque pulvinar quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius risus scelerisque ligula vulputate, et ullamcorper enim laoreet. Proin iaculis lobortis metus, non pulvinar orci egestas nec. Proin vel massa facilisis, condimentum mi vel, commodo purus.
    `
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

for (let i = 0; i < content.length; i++) {
    addParagraph("");
}

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
