class Player {
    constructor(map, treasure, wall) {

        this.map = map;
        this.treasure = treasure;
        this.wall = wall;
        this.col = 9;
        this.row = 9;
        this.image = '../assets/icons/MORIC023.PNG';
        this.points = 0;

        this.moveUpPossible = false;
        this.moveDownPossible = false;
        this.moveLeftPossible = false;
        this.moveRightPossible = false;

        this.checkPossibleMoves();
    }

    draw() {
        image(this.image, this.col * CELL, this.row * CELL, CELL, CELL);
    }

    moveUp() {
        if (this.moveUpPossible) {

            if (this.row > 2) {
                this.row -= 1;

            } else {
                this.moveElements(0, -1);
            }

            this.checkPossibleMoves();
            this.collide();
        }
    }

    moveDown() {
        if (this.moveDownPossible) {

            if (this.row < 17) {
                this.row += 1;

            } else {
                this.moveElements(0, 1);
            }

            this.checkPossibleMoves();
            this.collide();
        }
    }

    moveLeft() {
        if (this.moveLeftPossible) {

            if (this.col > 2) {
                this.col -= 1;

            } else {
                this.moveElements(-1, 0);
            }

            this.checkPossibleMoves();
            this.collide();
        }
    }

    moveRight() {
        
        if (this.moveRightPossible) {

            if (this.col < 17) {
                this.col += 1;

            } else {
                this.moveElements(1, 0);
            }

            this.checkPossibleMoves();
            this.collide();
        }
    }

    checkPossibleMoves() {
        this.moveUpPossible = this.map[(this.row + this.wall.col - 1)][this.col + this.wall.row] === 'path';
        this.moveDownPossible = this.map[(this.row + this.wall.col + 1)][this.col + this.wall.row] === 'path';
        this.moveLeftPossible = this.map[this.row + this.wall.col][(this.col + this.wall.row - 1)] === 'path';
        this.moveRightPossible = this.map[this.row + this.wall.col][(this.col + this.wall.row + 1)] === 'path';
  }

  collide() {
        if (dist(this.col, this.row, this.treasure.col, this.treasure.row) < 1) {
            this.treasure.removeTreasure();
            this.incrementCounter();
            this.playSound('find-sound')
        }
    }

    incrementCounter() {
        this.points += 100;
        COUNTER.innerHTML = this.points;
    }

    playSound(soundId) {
        let soundElement = document.getElementById(soundId);
        soundElement.play();
    }

    moveElements(x, y) {
        this.moveWall(x, y);
        this.moveTreasure(x, y);
    }

    moveWall(x, y) {
        this.wall.moveWall(x, y);
    }

    moveTreasure(x, y) {
        this.treasure.moveTreasure(x, y);
    }
}
