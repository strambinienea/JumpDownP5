var pg;
var d;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(20, 20, 20);
    d = 40;
    pg = new Player(width / 2, height / 2);
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
    background(20, 20, 20, 75);
    pg.show();
    pg.update();
}