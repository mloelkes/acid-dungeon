class Player {
    constructor(map) {

        this.map = map;
        this.col = 64;
        this.row = 64;
        this.image = '../assets/icons/MORIC023.PNG';

        this.moveUpPossible = false;
        this.moveDownPossible = false;
        this.moveLeftPossible = false;
        this.moveRightPossible = false;

        this.checkPossibleMoves();
    }

    draw() {
        image(this.image, this.col, this.row, CELL, CELL);
    }

    moveUp() {
        if (this.moveUpPossible) {
            this.row -= CELL;

            this.checkPossibleMoves();
        }
    }

    moveDown() {
        if (this.moveDownPossible) {
        this.row += CELL;

        this.checkPossibleMoves();
        }
    }

    moveLeft() {
        if (this.moveLeftPossible) {
            this.col -= CELL;

            this.checkPossibleMoves();
        }
    }

    moveRight() {
        console
        if (this.moveRightPossible) {
            this.col += CELL;

            this.checkPossibleMoves();
        }
    }

    checkPossibleMoves() {
      this.moveUpPossible = this.map[this.row / CELL - 1][this.col / CELL] === 'path';
      this.moveDownPossible = this.map[this.row / CELL + 1][this.col / CELL] === 'path';
      this.moveLeftPossible = this.map[this.row / CELL][this.col / CELL - 1] === 'path';
      this.moveRightPossible = this.map[this.row / CELL][this.col / CELL + 1] === 'path';
  }
}
