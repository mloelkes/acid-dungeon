class Player {
    constructor(card, treasures, wall) {

        this.card = card;
        this.treasures = treasures;
        this.wall = wall;
        this.row = 9;
        this.col = 9;
        this.image = '../assets/icons/MORIC023.PNG';
        this.points = 0;
        this.monaFound = false;
        this.houseCounter = 1;

        this.moveUpPossible = false;
        this.moveDownPossible = false;
        this.moveLeftPossible = false;
        this.moveRightPossible = false;

        this.checkPossibleMoves();
    }

    draw() {
        image(this.image, this.col * CELL, this.row * CELL, CELL, CELL);
    }

    moveUp(count) {
        if (this.moveUpPossible) {

            if (this.row > 2) {
                this.row -= count;

            } else {
                this.moveIndex(-count, 0);
                this.moveWall();
                this.moveTreasures(-count, 0);
            }

            this.checkPossibleMoves();
            this.collide();
        }
    }

    moveDown(count) {
        if (this.moveDownPossible) {

            if (this.row < 17) {
                this.row += count;

            } else {
                this.moveIndex(count, 0);
                this.moveWall();
                this.moveTreasures(count, 0);
            }

            this.checkPossibleMoves();
            this.collide();
        }
    }

    moveLeft(count) {
        if (this.moveLeftPossible) {

            if (this.col > 2) {
                this.col -= count;

            } else {
                this.moveIndex(0, -count);
                this.moveWall();
                this.moveTreasures(0, -count);
            }

            this.checkPossibleMoves();
            this.collide();
        }
    }

    moveRight(count) {
        if (this.moveRightPossible) {

            if (this.col < 17) {
                this.col += count;

            } else {
                this.moveIndex(0, count);
                this.moveWall();
                this.moveTreasures(0, count);
            }

            this.checkPossibleMoves();
            this.collide();
        }
    }

    beam(playerY, playerX, cardY, cardX) {
        this.row = playerY;
        this.col = playerX;

        this.moveIndex(cardY, cardX);
        this.moveWall();
        this.moveTreasures(cardY, cardX);
        this.checkPossibleMoves();
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

                switch (treasure.name) {
                    case 'mona':
                        this.monaFound = true;
                        treasure.removeTreasure();
                        this.playSound('mona-sound');
                        break;

                    case 'left-1':
                        this.beam(8, 8, 0, -8);
                        treasure.removeTreasure();
                        this.playSound('beam-sound');
                        break;

                    case 'left-2':
                        this.beam(3, 8, 4, -10);
                        treasure.removeTreasure();
                        this.playSound('beam-sound');
                        break;

                    case 'right-1':
                        this.beam(7, 8, -2, 14);
                        treasure.removeTreasure();
                        this.playSound('beam-sound');
                        break;

                    case 'right-2':
                        this.beam(3, 9, 4, 12);
                        treasure.removeTreasure();
                        this.playSound('beam-sound');
                        break;
                    
                    case 'cd':
                        this.playMusic(this.houseCounter);
                        this.incrementHouseCounter();
                        break;

                    case 'treasure':
                        treasure.removeTreasure();
                        this.incrementCounter();
                        this.playSound('find-sound');
                        break;
                }
            }
        }
    }

    incrementCounter() {
        this.points += 100;
        COUNTER.innerHTML = this.points;
    }

    incrementHouseCounter() {
        if(this.houseCounter < 8) {
            this.houseCounter++;
        } else {
            this.houseCounter = 1;
        }
    }

    playMusic(soundId) {
        if (soundId > 1) {
            document.getElementById(`house-${this.houseCounter - 1}`).pause();
        }

        document.getElementById(`house-${this.houseCounter}`).play();
    }

    playSound(soundId) {
        let soundElement = document.getElementById(soundId);
        soundElement.play();
    }

    moveIndex(y, x) {
        this.card.startX += x;
        this.card.startY += y;
        console.log('x: ', this.card.startX);
        console.log('y: ', this.card.startY);
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
