function preload() {
	world_start = loadSound("world_start.wav");
  mario_jump=loadSound("jump.wav");
  mario_coins=loadSound("coin.wav");
  mario_kick=loadSound("kick.wav");
  game_over=loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
  mario_die=loadSound("mariodie.wav");
}


function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
  video= createCapture(VIDEO);
  video.size(800,400);
  posenet=ml5.poseNet(video,modelloaded);
  posenet.on('poses',gotposes);
  video.parent('game_console')
}

function draw() {
	game();
}





function modelloaded(){
  console.log('Model loaded');
}

function gotposes(results){
  if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
  }
}












