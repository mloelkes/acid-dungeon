class Player {
    constructor(card, treasures, wall) {

        this.card = card;
        this.treasures = treasures;
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
                this.moveIndex(-1, 0);
                this.moveWall();
                this.moveTreasures(-1, 0);
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
                this.moveIndex(1, 0);
                this.moveWall();
                this.moveTreasures(1, 0);
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
                this.moveIndex(0, -1);
                this.moveWall();
                this.moveTreasures(0, -1);
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
                this.moveIndex(0, 1);
                this.moveWall();
                this.moveTreasures(0, 1);
            }

            this.checkPossibleMoves();
            this.collide();
        }
    }

    checkPossibleMoves() {
        this.moveUpPossible = this.card.index[(this.row + this.card.startY - 1)][this.col + this.card.startX] === 'path';
        this.moveDownPossible = this.card.index[(this.row + this.card.startY + 1)][this.col + this.card.startX] === 'path';
        this.moveLeftPossible = this.card.index[this.row + this.card.startY][(this.col + this.card.startX - 1)] === 'path';
        this.moveRightPossible = this.card.index[this.row + this.card.startY][(this.col + this.card.startX + 1)] === 'path';
    }

    collide() {
        for (let treasure of this.treasures) {
            if (dist(this.col, this.row, treasure.col, treasure.row) < 1) {
                treasure.removeTreasure();
                this.incrementCounter();
                this.playSound('find-sound')
            }
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

    moveIndex(y, x) {
        this.card.startX += x;
        this.card.startY += y;
    }

    moveWall() {
        this.wall.moveWall();
    }

    moveTreasures(y, x) {
        for (let treasure of this.treasures) {
            treasure.moveTreasure(y, x);
        }
    }
}
