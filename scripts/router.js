function handleNavClick(i) {
    pageIndex = i;
    for (let j = 0; j < navItems.length; j++) {
        navItems[j].classList.remove('active');
    }
    navItems[i].classList.add('active');

    let paragraphs = document.querySelectorAll('h1, p');
    for (let j = 0; j < paragraphs.length; j++) {
        paragraphs[j].remove();
    }

    for (let j = 0; j < content[i].length; j++) {
        addParagraph(content[i][j]);
    }
}

function removeHash() {
    history.pushState("", document.title, window.location.pathname
        + window.location.search);
}

function hashToPath(hash) {
    return hash.split("#").pop().toLowerCase();
}

function setScrollNav() {
    const height = window.innerHeight - 100;
    window.scroll({ top: height, left: 0, behavior: 'smooth' });
}
function setScrollHome() {
    const height = 0;
    window.scroll({ top: height, left: 0, behavior: 'smooth' });
}


const navItems = document.querySelectorAll('.nav-item');


const path = hashToPath(window.location.hash);

const navContents = [];
for (let i = 0; i < navItems.length; i++) {
    navContents.push(navItems[i].textContent.toLowerCase());
}

let pageIndex = navContents.indexOf(path);
if (pageIndex == -1) {
    pageIndex = 0;
}
else {
    setScrollNav();
}

if (path == 'q') {
    setScrollHome();
}

for (let i = 0; i < navItems.length; i++) {
    if (i == pageIndex) {
        navItems[i].classList.add('active');
    }
    else {
        navItems[i].classList.remove('active');
    }
}

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', (e) => {
        handleNavClick(i);
        window.location.hash = navContents[i];
    });
}

window.addEventListener('hashchange', (e) => {
    e.preventDefault();
    const path = hashToPath(window.location.hash);
    index = navContents.indexOf(path);
    if (index != -1) {
        handleNavClick(index);
    }
});

window.addEventListener('scroll', (e) => {
    e.preventDefault();
    const height = window.innerHeight / 2;
    if (window.scrollY < height) {
        if (window.location.hash != '') {
            removeHash();
        }
    }
    if (window.scrollY > height) {
        if (window.location.hash == '') {
            window.location.hash = navContents[pageIndex];
        }
    }
});