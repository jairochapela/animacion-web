import lottie from 'lottie-web';

const element = document.getElementById('dibujo');

lottie.loadAnimation({
    container: element, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '29178-cat-in-box.json' // the path to the animation json
  });