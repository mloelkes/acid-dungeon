class Game {
    constructor() {
        this.player = new this.player();
        this.tresure = new Treasure();
    }

    preload() {

    }

    draw() {
        clear();
        this.drawGrid();
        this.player.draw();
    }
    
    drawGrid() {
        // rows
        line(0, HEIGHT / 10 * 0, WIDTH, HEIGHT / 10 * 0)
        line(0, HEIGHT / 10 * 1, WIDTH, HEIGHT / 10 * 1)
        line(0, HEIGHT / 10 * 2, WIDTH, HEIGHT / 10 * 2)
        line(0, HEIGHT / 10 * 3, WIDTH, HEIGHT / 10 * 3)
        line(0, HEIGHT / 10 * 4, WIDTH, HEIGHT / 10 * 4)
        line(0, HEIGHT / 10 * 5, WIDTH, HEIGHT / 10 * 5)
        line(0, HEIGHT / 10 * 6, WIDTH, HEIGHT / 10 * 6)
        line(0, HEIGHT / 10 * 7, WIDTH, HEIGHT / 10 * 7)
        line(0, HEIGHT / 10 * 8, WIDTH, HEIGHT / 10 * 8)
        line(0, HEIGHT / 10 * 9, WIDTH, HEIGHT / 10 * 9)
        line(0, HEIGHT / 10 * 10, WIDTH, HEIGHT / 10 * 10)
    
        // columns
        line(WIDTH / 10 * 0, 0, WIDTH / 10 * 0, WIDTH);
        line(WIDTH / 10 * 1, 0, WIDTH / 10 * 1, WIDTH);
        line(WIDTH / 10 * 2, 0, WIDTH / 10 * 2, WIDTH);
        line(WIDTH / 10 * 3, 0, WIDTH / 10 * 3, WIDTH);
        line(WIDTH / 10 * 4, 0, WIDTH / 10 * 4, WIDTH);
        line(WIDTH / 10 * 5, 0, WIDTH / 10 * 5, WIDTH);
        line(WIDTH / 10 * 6, 0, WIDTH / 10 * 6, WIDTH);
        line(WIDTH / 10 * 7, 0, WIDTH / 10 * 7, WIDTH);
        line(WIDTH / 10 * 8, 0, WIDTH / 10 * 8, WIDTH);
        line(WIDTH / 10 * 9, 0, WIDTH / 10 * 9, WIDTH);
        line(WIDTH / 10 * 10, 0, WIDTH / 10 * 10, WIDTH);
      }
}

class Player {
    constructor() {
        this.col = 0;
        this.row = 0;
        this.image;
    }

    draw() {
        image(this.image, this.col, this.row, 100, 100);
    }

    moveUp() {
        this.row -= 100;
    }

    moveDown() {
        this.row += 100;
    }

    moveLeft() {
        this.col -= 100;
    }

    moveRight() {
        this.col += 100;
    }
}





