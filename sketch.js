var pg;
var d;
var spritesheet;
var spritedata;
var animation = [];

function preload() {
    spritedata = loadJSON("./src/p1_walk.json");
    spritesheet = loadImage("./src/p1_walk.png");
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(20, 20, 20);

    // From spritesheet to an array of frames for an animation
    var frames = spritedata.frames;
    for (let i = 0; i < frames.length; i++) {
        let pos = frames[i].position;
        let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
        animation.push(img);
    }

    d = 40;
    pg = new Player(width / 2, height / 2, animation);
}

function mouseClicked() {
    pg.jump();
}
function keyPressed() {
    if (keyCode == 32) {
        pg.jump();
    }
}
function draw() {
    background(20, 20, 20);
    pg.show();
    pg.update();
}