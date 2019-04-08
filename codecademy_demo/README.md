1. hello_world
2. circle
3. sprite
4. background


### [config](https://photonstorm.github.io/phaser3-docs/global.html#GameConfig)
In order to make games of our own design, we call Phaser.Game() with an object that specifies some meta-information about the game. We define that object beforehand and conventionally name the variable config. Here are some of the keys we can define in a config:

* height: the height, in pixels, of the <canvas> Phaser creates.
* width: the width, in pixels, of the <canvas> Phaser creates.
* parent: the HTML element that Phaser will place the <canvas> element inside of.
* backgroundColor: the background color of our game, usually given in hexadecimal.
* type: the Renderer Phaser will use: either Phaser.WEBGL which offers some additional features while drawing or Phaser.CANVAS which can run on more browsers. The default, Phaser.AUTO, checks if the browser supports WebGL and, if not, switches to canvas.