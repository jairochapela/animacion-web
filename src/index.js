import lottie from 'lottie-web';

const element = document.getElementById('dibujo');
const element2 = document.getElementById('dibujo2');

lottie.loadAnimation({
    container: element, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    //path: '29178-cat-in-box.json' // the path to the animation json
    path: '29056-nepenthe-illustration.json'
  });

  lottie.loadAnimation({
    container: element2, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    //path: '29178-cat-in-box.json' // the path to the animation json
    path: '29178-cat-in-box.json'
  });