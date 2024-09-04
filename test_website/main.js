window.addEventListener('scroll', () => {
    var scroll = window.pageYOffset / window.innerHeight
    if(scroll > 0.5){
        scroll = Math.abs((scroll+0.5)%1-0.5)*2;
    }
    else{
        scroll = 1;
    }
    scroll = (1-scroll)**2
    if (scroll == 1){
        scroll = 0.99
    }
    console.log(scroll)
    document.body.style.setProperty('--scroll',scroll);
  }, false);

window.addEventListener('scroll', () => {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
}, false);