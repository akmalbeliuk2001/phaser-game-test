class SceneMain extends Phaser.Scene {
  constructor() {
    super("SceneMain");
  }
  preload() {
    this.load.spritesheet('warrior', 'assets/characters/warrior-run.png', { 
      frameWidth: 96,
      frameHeight: 96,
    })

    this.load.image('tiles', 'assets/tiles/tilemap_assets.png');
    this.load.tilemapTiledJSON('gamemap', 'assets/tiles/tilemap.json');    
  }
  create() {
    const gamemap =  this.make.tilemap({ key: 'gamemap'});
    const tileset = gamemap.addTilesetImage('gamemap', 'tiles')

    gamemap.createStaticLayer('background', tileset);
    const groundLayer = gamemap.createStaticLayer('ground', tileset);
    groundLayer.setCollisionByProperty({ collides: true })

    this.char = this.add.sprite(0, game.config.height / 2, "warrior" );

    var frameNames = this.anims.generateFrameNumbers("warrior");

    this.anims.create({
      key: "walk",
      frames: frameNames,
      frameRate: 8,
      repeat: -1,
    });

    this.char.play("walk");

    
    
    // const wallLayer = map.createStaticLayer('bounder', tileset);
    
    // const debugGraphics = this.add.graphics().setAlpha(0.7);
    // wallLayer.renderDebug(debugGraphics, {
    //   tileColor: null, // Color of non-colliding tiles
    //   collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
    //   faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
    // });
  }
  update() {
    // constant running loop
  }
}
