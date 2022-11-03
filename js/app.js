// Parallax js
const canvas = document.querySelector('#canvas');
const parallaxInstance = new Parallax(canvas);

// Efecto 3D
const container = document.querySelector('.container');
const marco = document.querySelector('.marco');

container.addEventListener('mousemove', event =>{
    let xAxis = (event.pageX - window.innerWidth / 2) / 50;
    let yAxis = (window.innerHeight / 2 - event.pageY) / 50;

    marco.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;    
})