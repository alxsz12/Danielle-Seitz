const wheel = document.querySelector('.social-wheel');
const center = document.querySelector('.wheel-center');
let rotation = 0;

center.addEventListener('click', () => {
    rotation += 60; // 360 / 6 buttons = 60 degrees
    wheel.style.transform = `rotate(${rotation}deg)`;
});

const buttons = document.querySelectorAll('.social-button');
wheel.addEventListener('transitionend', () => {
    buttons.forEach(button => {
        button.style.transform += ` rotate(${-rotation}deg)`;
    });
});
