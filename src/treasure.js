class Treasure {
    constructor(image, y, x, wall) {
        this.wall = wall;
        this.col = x - this.wall.row;
        this.row = y - this.wall.col;
        this.image = image;
    }

    draw() {
        image(this.image, this.col * 32, this.row * 32, CELL, CELL);
    }

    moveTreasure(x, y) {
        console.log('treasure x: ', x)
        console.log('treasure y: ', y)
        console.log('row: ', this.row)
        console.log('col: ', this. col)
        this.row -= y;
        this.col -= x;
        console.log('treasure x: ', x)
        console.log('treasure y: ', y)
    }

    removeTreasure() {
        this.col = -1;
        this.row = -1;
    }
}