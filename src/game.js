class Game {
    constructor() {
        this.map = this.createMap();
        this.wall = new Wall();
        this.player = new Player(this.map);
        this.startSound = document.getElementById("start-sound");
        this.startSound.play();
    }

    preload() {
        this.player.image = loadImage('../assets/icons/MORIC023.PNG');
        this.wall.image = loadImage('../assets/redbrick.bmp');
    }

    draw() {
        clear();
        this.drawGrid();
        this.player.draw();
        this.wall.draw();
    }
    
    drawGrid() {
        // rows
        line(0, HEIGHT / 20 * 0, WIDTH, HEIGHT / 20 * 0)
        line(0, HEIGHT / 20 * 1, WIDTH, HEIGHT / 20 * 1)
        line(0, HEIGHT / 20 * 2, WIDTH, HEIGHT / 20 * 2)
        line(0, HEIGHT / 20 * 3, WIDTH, HEIGHT / 20 * 3)
        line(0, HEIGHT / 20 * 4, WIDTH, HEIGHT / 20 * 4)
        line(0, HEIGHT / 20 * 5, WIDTH, HEIGHT / 20 * 5)
        line(0, HEIGHT / 20 * 6, WIDTH, HEIGHT / 20 * 6)
        line(0, HEIGHT / 20 * 7, WIDTH, HEIGHT / 20 * 7)
        line(0, HEIGHT / 20 * 8, WIDTH, HEIGHT / 20 * 8)
        line(0, HEIGHT / 20 * 9, WIDTH, HEIGHT / 20 * 9)
        line(0, HEIGHT / 20 * 10, WIDTH, HEIGHT / 20 * 10)
        line(0, HEIGHT / 20 * 11, WIDTH, HEIGHT / 20 * 11)
        line(0, HEIGHT / 20 * 12, WIDTH, HEIGHT / 20 * 12)
        line(0, HEIGHT / 20 * 13, WIDTH, HEIGHT / 20 * 13)
        line(0, HEIGHT / 20 * 14, WIDTH, HEIGHT / 20 * 14)
        line(0, HEIGHT / 20 * 15, WIDTH, HEIGHT / 20 * 15)
        line(0, HEIGHT / 20 * 16, WIDTH, HEIGHT / 20 * 16)
        line(0, HEIGHT / 20 * 17, WIDTH, HEIGHT / 20 * 17)
        line(0, HEIGHT / 20 * 18, WIDTH, HEIGHT / 20 * 18)
        line(0, HEIGHT / 20 * 19, WIDTH, HEIGHT / 20 * 19)
        line(0, HEIGHT / 20 * 20, WIDTH, HEIGHT / 20 * 20)
    
        // columns
        line(WIDTH / 20 * 0, 0, WIDTH / 20 * 0, WIDTH);
        line(WIDTH / 20 * 1, 0, WIDTH / 20 * 1, WIDTH);
        line(WIDTH / 20 * 2, 0, WIDTH / 20 * 2, WIDTH);
        line(WIDTH / 20 * 3, 0, WIDTH / 20 * 3, WIDTH);
        line(WIDTH / 20 * 4, 0, WIDTH / 20 * 4, WIDTH);
        line(WIDTH / 20 * 5, 0, WIDTH / 20 * 5, WIDTH);
        line(WIDTH / 20 * 6, 0, WIDTH / 20 * 6, WIDTH);
        line(WIDTH / 20 * 7, 0, WIDTH / 20 * 7, WIDTH);
        line(WIDTH / 20 * 8, 0, WIDTH / 20 * 8, WIDTH);
        line(WIDTH / 20 * 9, 0, WIDTH / 20 * 9, WIDTH);
        line(WIDTH / 20 * 10, 0, WIDTH / 20 * 10, WIDTH);
        line(WIDTH / 20 * 11, 0, WIDTH / 20 * 11, WIDTH);
        line(WIDTH / 20 * 12, 0, WIDTH / 20 * 12, WIDTH);
        line(WIDTH / 20 * 13, 0, WIDTH / 20 * 13, WIDTH);
        line(WIDTH / 20 * 14, 0, WIDTH / 20 * 14, WIDTH);
        line(WIDTH / 20 * 15, 0, WIDTH / 20 * 15, WIDTH);
        line(WIDTH / 20 * 16, 0, WIDTH / 20 * 16, WIDTH);
        line(WIDTH / 20 * 17, 0, WIDTH / 20 * 17, WIDTH);
        line(WIDTH / 20 * 18, 0, WIDTH / 20 * 18, WIDTH);
        line(WIDTH / 20 * 19, 0, WIDTH / 20 * 19, WIDTH);
        line(WIDTH / 20 * 20, 0, WIDTH / 20 * 20, WIDTH);
      }

      createMap() {
        return [
            ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'wall', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'wall', 'path', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'wall', 'path', 'wall', 'wall', 'path', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'wall', 'path', 'wall', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'wall', 'path', 'path', 'path', 'path', 'path', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'wall', 'wall', 'wall', 'path', 'path', 'path', 'path', 'path', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'wall', 'wall', 'path', 'path', 'wall', 'wall', 'wall', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
            ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
        ]
      }
}
