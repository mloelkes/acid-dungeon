class Game {
    constructor() {
        // sounds
        this.startSound = document.getElementById('start-sound');
        this.findSound = document.getElementById('find-sound');
        this.backgroundMusic = document.getElementById('background-music')
        //this.backgroundMusic.play();

        // objects
        this.card = new Card();
        this.wall = new Wall(this.card);
        this.treasure = this.createTreasure('../assets/icons/FFICO032.PNG', 20, 28);
        this.player = new Player(this.card, this.treasure, this.wall);
    }

    preload() {
        this.player.image = loadImage('../assets/icons/MORIC023.PNG');
        this.wall.image = loadImage('../assets/redbrick.bmp');
        this.treasure.image = loadImage('../assets/icons/FFICO032.PNG');
    }

    draw() {
        clear();
        this.player.draw();
        this.wall.draw();
        this.treasure.draw();
    }

      createTreasure(image, y, x) {
        return new Treasure(image, y, x, this.card);
      }
}
