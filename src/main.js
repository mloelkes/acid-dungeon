const game = new Game();

function preload() {
    game.preload();
}

function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent("canvas");
}

function draw() {
    game.draw();
    noLoop();
}

function keyPressed(event) {
    if (keyCode === 39) {
        event.preventDefault();
        game.player.moveRight();
    }

    if (keyCode === 37) {
        event.preventDefault();
        game.player.moveLeft();
    }

    if (keyCode === 38) {
        event.preventDefault();
        game.player.moveUp();
    }

    if (keyCode === 40) {
        event.preventDefault();
        game.player.moveDown();
    }
    
    game.draw();
}
