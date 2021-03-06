function preload() {
	this.load.image('bug1', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_1.png')
	this.load.image('bug2', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_2.png')
	this.load.image('bug3', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_3.png')
	this.load.image('platform', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/platform.png')
	this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/codey.png')
  }
  
  const gameState = {};

  // demo: https://nicehorse06.github.io/phaser-demo/codecademy_demo/physic_game/2_adding_a_sprite/
  function create() {
	// 使用 this.physics 增加會受到重力影響
	this.physics.add.sprite(200, 250, 'codey') 
  }
  
  function update() {
  }
  
  const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 500,
	backgroundColor: "b9eaff",
	physics: {
	  default: 'arcade',
	  arcade: {
		gravity: { y: 200 },
		enableBody: true,
	  }
	},
	scene: {
	  preload,
	  create,
	  update
	}
  }
  
  const game = new Phaser.Game(config)
  