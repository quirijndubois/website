let lastIndex = -1;


function update() {

    window.requestAnimationFrame(update);
    const paragraphs = document.querySelectorAll('p');
    
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

    if (index != lastIndex){
        if (lastIndex != -1) {
            paragraphs[lastIndex].style.animation = 'darken 0.5s ease-in-out';
            paragraphs[lastIndex].style.color = 'grey';
        }
        if (index != -1) {
            paragraphs[index].style.animation = 'brighten 0.5s ease-in-out';
            paragraphs[index].style.color = 'white';
        }
    }
    lastIndex = index;
}
update();