var game;

window.onload = function () {
  var config = {
    type: Phaser.AUTO,
    width: 400,
    height: 250,
    parent: "phaser-game",
    scene: [SceneMain],
    scale : {
      zoom : 2
    }
  };

  game = new Phaser.Game(config);
};
