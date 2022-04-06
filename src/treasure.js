class Treasure {
    constructor(name, image, y, x, card) {
        this.name = name;
        this.card = card;
        this.row = y - this.card.startY;
        this.col = x - this.card.startX;
        this.image = image;
    }

    draw() {
        image(this.image, this.col * CELL, this.row * CELL, CELL, CELL);
    }

    moveTreasure(y, x) {
        this.row -= y;
        this.col -= x;
    }

    removeTreasure() {
        this.col = -20;
        this.row = -20;
    }
}