class Treasure {
    constructor(image) {
        this.col = 64;
        this.row = 64;
        this.image = image;
    }

    draw() {
        image(this.image, this.col, this.row, CELL, CELL);
    }

    removeTreasure() {
        this.col = -32;
        this.row = -32;
    }
}