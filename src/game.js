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
        this.treasures = this.createTreasures();
        this.player = new Player(this.card, this.treasures, this.wall);
    }

    preload() {
        this.player.image = loadImage('../assets/icons/MORIC023.PNG');
        this.wall.image = loadImage('../assets/redbrick.bmp');
        this.treasures[0].image = loadImage('../assets/icons/FFICO027.PNG');
        this.treasures[1].image = loadImage('../assets/icons/MORIC050.PNG');
        this.treasures[2].image = loadImage('../assets/icons/PROGM037.PNG');
        this.treasures[3].image = loadImage('../assets/icons/PROGM038.PNG');
        this.treasures[4].image = loadImage('../assets/icons/FFICO042.PNG');
        this.treasures[5].image = loadImage('../assets/icons/FFICO043.PNG');
        this.treasures[6].image = loadImage('../assets/icons/MORIC001.PNG');
        this.treasures[7].image = loadImage('../assets/icons/PROGM040.PNG');
        this.treasures[8].image = loadImage('../assets/icons/PROGM014.PNG');
        this.treasures[9].image = loadImage('../assets/icons/PROGM014.PNG');
        this.treasures[10].image = loadImage('../assets/gifs/new.gif');
        this.treasures[11].image = loadImage('../assets/icons/PROGM014.PNG');
        this.treasures[12].image = loadImage('../assets/icons/PROGM014.PNG');
        this.treasures[13].image = loadImage('../assets/icons/PROGM014.PNG');
        this.treasures[14].image = loadImage('../assets/icons/PROGM014.PNG');
        this.treasures[15].image = loadImage('../assets/icons/PROGM014.PNG');
        this.treasures[16].image = loadImage('../assets/icons/PROGM014.PNG');
        this.treasures[17].image = loadImage('../assets/icons/PROGM024.PNG');
        this.treasures[18].image = loadImage('../assets/icons/PROGM014.PNG');
        this.treasures[19].image = loadImage('../assets/icons/PROGM014.PNG');
        this.treasures[20].image = loadImage('../assets/icons/PROGM040.PNG');
        this.treasures[21].image = loadImage('../assets/icons/PROGM041.PNG');
        this.treasures[22].image = loadImage('../assets/icons/PROGM014.PNG');
        this.treasures[23].image = loadImage('../assets/icons/PROGM014.PNG');
        this.treasures[24].image = loadImage('../assets/icons/PROGM041.PNG');
    }

    draw() {
        clear();

        this.player.draw();
        this.wall.draw();

        for (let treasure of this.treasures) {
            treasure.draw();
        }
    }

    createTreasures() {
        let treasures = [];
        
        treasures.push(this.createTreasure('../assets/icons/FFICO027.PNG', 21, 31));
        treasures.push(this.createTreasure('../assets/icons/MORIC050.PNG', 6, 26));
        treasures.push(this.createTreasure('../assets/icons/PROGM037.PNG', 10, 9));
        treasures.push(this.createTreasure('../assets/icons/PROGM038.PNG', 39, 22));
        treasures.push(this.createTreasure('../assets/icons/FFICO042.PNG', 20, 55));
        treasures.push(this.createTreasure('../assets/icons/FFICO043.PNG', 15, 21));
        treasures.push(this.createTreasure('../assets/icons/MORIC001.PNG', 51, 14));
        treasures.push(this.createTreasure('../assets/icons/PROGM040.PNG', 18, 58));
        treasures.push(this.createTreasure('../assets/icons/PROGM014.PNG', 55, 36));
        treasures.push(this.createTreasure('../assets/icons/PROGM014.PNG', 5, 37));
        treasures.push(this.createTreasure('../assets/gifs/new.gif', 29, 44));
        treasures.push(this.createTreasure('../assets/icons/PROGM014.PNG', 26, 17));
        treasures.push(this.createTreasure('../assets/icons/PROGM014.PNG', 57, 6));
        treasures.push(this.createTreasure('../assets/icons/PROGM014.PNG', 40, 14));
        treasures.push(this.createTreasure('../assets/icons/PROGM014.PNG', 53, 53));
        treasures.push(this.createTreasure('../assets/icons/PROGM014.PNG', 36, 38));
        treasures.push(this.createTreasure('../assets/icons/PROGM014.PNG', 24, 48));
        treasures.push(this.createTreasure('../assets/icons/PROGM024', 18, 4));
        treasures.push(this.createTreasure('../assets/icons/PROGM014.PNG', 2, 28));
        treasures.push(this.createTreasure('../assets/icons/PROGM014.PNG', 22, 2));
        treasures.push(this.createTreasure('../assets/icons/PROGM040.PNG', 13, 55));
        treasures.push(this.createTreasure('../assets/icons/PROGM041.PNG', 42, 5));
        treasures.push(this.createTreasure('../assets/icons/PROGM014.PNG', 36, 35));
        treasures.push(this.createTreasure('../assets/icons/PROGM014.PNG', 33, 28));
        treasures.push(this.createTreasure('../assets/icons/PROGM041.PNG', 46, 27));

        return treasures;
    }

    createTreasure(image, y, x) {
        return new Treasure(image, y, x, this.card);
    }
}
