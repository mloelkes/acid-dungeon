class Wall {
    constructor(card) {
        this.card = card;
        this.image;
        this.row = this.card.startY;
        this.col = this.card.startX;
    }

    draw() {
        for (let y = this.row; y < this.row + 20; y++) {
            for (let x = this.col; x < this.col + 20; x++) {
                if (this.card.index[y][x] === 'wall') {
                    image(this.image, (x - this.col) * CELL, (y - this.row) * CELL, CELL, CELL);
                }
            }
        }
    }

    moveWall() {
        this.row = this.card.startY;
        this.col = this.card.startX;
        this.draw();
    }
}
