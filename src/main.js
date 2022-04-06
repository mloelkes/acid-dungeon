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
        game.player.moveRight(1);
    }

    if (keyCode === 37) {
        event.preventDefault();
        game.player.moveLeft(1);
    }

    if (keyCode === 38) {
        event.preventDefault();
        game.player.moveUp(1);
    }

    if (keyCode === 40) {
        event.preventDefault();
        game.player.moveDown(1);
    }

    game.draw();
    console.log('position: ', {'row: ' : game.player.row + game.card.startY, 'col: ' : game.player.col + game.card.startX})
}
