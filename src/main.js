const game = new Game();

function preload() {
    game.preload();
}

function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent("canvas");
    this.preventScrolling();
}

function draw() {
    game.draw();
    this.checkIfKeyPressed();
}

function preventScrolling() {
    document.addEventListener('keydown', function(event) {
        switch (event.key) {
            case 'ArrowLeft':
            case 'ArrowRight':
            case 'ArrowUp':
            case 'ArrowDown':
                event.preventDefault();
                break;
        }
    })
}

function checkIfKeyPressed() {
    if (frameCount % 4 === 0) {
        if (keyIsDown(UP_ARROW)) {
            game.player.moveUp(1);
        }

        if (keyIsDown(DOWN_ARROW)) {
            game.player.moveDown(1);
        }

        if (keyIsDown(LEFT_ARROW)) {
            game.player.moveLeft(1);
        }

        if (keyIsDown(RIGHT_ARROW)) {
            game.player.moveRight(1);
        }
    }
}
