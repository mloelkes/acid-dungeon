class Wall {
    constructor() {
        this.image = '../assets/redbrick.bmp';
    }

    draw() {
        for (let i = 0; i < game.map.length; i++) {
            for (let j = 0; j < game.map[i].length; j++) {
                if (game.map[i][j] === 'wall') {
                    image(this.image, j * CELL, i * CELL, CELL, CELL);
                }
            }
        }


    }
}
