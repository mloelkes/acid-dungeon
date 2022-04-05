class Treasure {
    constructor(image, y, x, card) {
        this.card = card;
        this.row = y - this.card.startY;
        this.col = x - this.card.startX;
        this.image = image;
    }

    draw() {
        image(this.image, this.col * 32, this.row * 32, CELL, CELL);
    }

    moveTreasure(y, x) {
        this.row -= y;
        this.col -= x;
    }

    removeTreasure() {
        this.col = -1;
        this.row = -1;
    }
}