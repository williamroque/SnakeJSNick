const canvas = document.getElementById('gameboard');
const ctx = canvas.getContext('2d');

canvas.addEventListener('keypress', e => {
    const key = e.key;

    if (key === 'ArrowUp') {
        xspeed = 0;
        yspeed = -1;
    } else if (key === 'ArrowDown') {
        xspeed = 0;
        yspeed = 1;
    } else if (key === 'ArrowRight') {
        xspeed = 1;
        yspeed = 0;
    } else if (key === 'ArrowLeft') {
        xspeed = -1;
        yspeed = 0;
    }
}, false);

let x = canvas / 2 - 50;
let y = canvas / 2 - 50;
let xspeed = 1;
let yspeed = 0;

let length = 5;

let trail = [];

trail.push({x: x, y: y});
render();

function update() {
    const block = { x: x + xspeed * 50, y: y + yspeed * 50 };
    trail.push(block);
    if (trail.length >= length) {
        trail.shift();
    }
    render();
}1`

function render() {
    trail.forEach(block => {
        ctx.fillStyle = '#F00';
        ctx.fillRect(block.x, block.y, 50, 50);
    });
}

setInterval(update, 250);