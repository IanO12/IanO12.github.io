var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
    default: 'arcade',
    arcade: {
    gravity: { y: 200 }
    }
    },
    scene: {
    preload: preload,
    create: create
    }
    };
    
  
  var game = new Phaser.Game(config);
  var player;
  
  function preload() {
    this.load.image('player', 'assets/knight.png');
  }
  
  function create() {
    player = this.add.sprite(400, 300, 'player');
    player.setScale(2);
  
     // Set the bounds manually
     player.setInteractive();
     this.input.on('gameobjectdown', function (pointer, gameObject) {
       gameObject.input.draggable = true;
       gameObject.input.dragFromCenter = false;
       gameObject.input.boundsRect = new Phaser.Geom.Rectangle(0, 0, game.config.width, game.config.height);
     });
    
     this.input.keyboard.on('keydown_LEFT', function (event) {
       player.setVelocityX(-160);
     });
 
     this.input.keyboard.on('keydown_RIGHT', function (event) {
       player.setVelocityX(160);
     });
  
     this.input.keyboard.on('keydown_UP', function (event) {
       player.setVelocityY(-160);
     });
 
     this.input.keyboard.on('keydown_DOWN', function (event) {
       player.setVelocityY(160);
     });
  
     this.input.keyboard.on('keyup', function (event) {
       player.setVelocity(0);
     });
  }
  
  function update() {
  
  }
  
