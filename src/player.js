class Player {
    constructor(map, treasure) {

        this.map = map;
        this.treasure = treasure;
        this.col = 288;
        this.row = 288;
        this.image = '../assets/icons/MORIC023.PNG';
        this.points = 0;

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
            this.collide();
        }
    }

    moveDown() {
        if (this.moveDownPossible) {
            this.row += CELL;

            this.checkPossibleMoves();
            this.collide();
        }
    }

    moveLeft() {
        if (this.moveLeftPossible) {
            this.col -= CELL;

            this.checkPossibleMoves();
            this.collide();
        }
    }

    moveRight() {
        console
        if (this.moveRightPossible) {
            this.col += CELL;

            this.checkPossibleMoves();
            this.collide();
        }
    }

    checkPossibleMoves() {
        this.moveUpPossible = this.map[this.row / CELL - 1][this.col / CELL] === 'path';
        this.moveDownPossible = this.map[this.row / CELL + 1][this.col / CELL] === 'path';
        this.moveLeftPossible = this.map[this.row / CELL][this.col / CELL - 1] === 'path';
        this.moveRightPossible = this.map[this.row / CELL][this.col / CELL + 1] === 'path';
  }

  collide() {
        if (dist(this.col, this.row, this.treasure.col, this.treasure.row) < 32) {
            this.treasure.removeTreasure();
            this.incrementCounter();
            this.playSound('find-sound')
        }
    }

    incrementCounter() {
        this.points += 100;
        console.log(COUNTER);
        COUNTER.innerHTML = this.points;
    }

    playSound(soundId) {
        let soundElement = document.getElementById(soundId);
        soundElement.play();
    }
}
