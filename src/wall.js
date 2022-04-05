class Wall {
    constructor(map) {
        this.map = map;
        this.image = '../assets/redbrick.bmp';
        this.col = 20;
        this.row = 20;
    }

    draw() {
        for (let y = this.col; y < this.col + 20; y++) {
            for (let x = this.row; x < this.row + 20; x++) {
                if (this.map[y][x] === 'wall') {
                    image(this.image, (x - this.row) * CELL, (y - this.col) * CELL, CELL, CELL);
                }
            }
        }
    }

    moveWall(x, y) {
        this.col += y;
        this.row += x;
        this.draw();
    }
}
