const canvas = document.getElementById('gameboard');
const ctx = canvas.getContext('2d');

window.addEventListener('keydown', e => {
    const key = e.key;

    if (key === 'ArrowUp' && ySpeed !== 1) {
        xSpeed = 0;
        ySpeed = -1;
    } else if (key === 'ArrowDown' && ySpeed !== -1) {
        xSpeed = 0;
        ySpeed = 1;
    } else if (key === 'ArrowRight' && xSpeed !== -1) {
        xSpeed = 1;
        ySpeed = 0;
    } else if (key === 'ArrowLeft' && xSpeed !== 1) {
        xSpeed = -1;
        ySpeed = 0;
    }
}, false);

let x = canvas.width / 2 - 25;
let y = canvas.height / 2 - 25;

let xSpeed = 0;
let ySpeed = 1;

let maxLength = 5;
let trail = [];

trail.push({
    x: x,
    y: y
});
render();

function die() {
    if (x > canvas.width || y > canvas.height || x < 0 || y < 0) {
        return true;
    }
    trail.forEach(e => {
        if (e.x === x && e.y === y) {
            return true;
        }
    });
    return false;
}

function update() {
    x += xSpeed * 25;
    y += ySpeed * 25;

    if (die()) {
        x = canvas.width / 2 - 25;
        y = canvas.height / 2 - 25;
        trail = [];
        xSpeed = 0;
        ySpeed = 1;
    }

    const block = {
        x: x,
        y: y
    };

    trail.push(block);

    if (trail.length >= maxLength) {
        trail.shift();
    }

    render();
}

function render() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    trail.forEach(block => {
        ctx.fillStyle = '#F00';
        ctx.fillRect(block.x, block.y, 25, 25);
    });
}

setInterval(update, 100);
