// const backgroundColor = [230,220,190];
const sounds = Array.from({ length: 6 });
const size = 800
const num = 3

const ball1 = {
    x: size/2, 
    y: size/4, 
    d: 90,
    speed: 3,
    rightSound: sounds[0],
    leftSound: sounds[1],
}
const ball2 = {
    x: size/2, 
    y: size*2/4, 
    d: 120,
    speed: 2,
    rightSound: sounds[2],
    leftSound: sounds[3],
}
const ball3 = {
    x: size/2, 
    y: size*3/4, 
    d: 150,
    speed: 1,
    rightSound: sounds[4],
    leftSound: sounds[5],
}
const line1 = {
    x1:100,
    y1:0,
    x2:100,
    y2:size,
    count:0,
}
const line2 = {
    x1:size-100,
    y1:0,
    x2:size-100,
    y2:size,
    count:0,
}
const balls = [ball1,ball2,ball3]
const lines = [line1,line2]

function preload(){

    sounds.forEach((sound, i) => {
        sounds[i] = loadSound(`sounds/${i}.mp3`)
    })
    ball1.rightSound = sounds[0];
    ball1.leftSound = sounds[1];
    ball2.rightSound = sounds[2];
    ball2.leftSound = sounds[3];
    ball3.rightSound = sounds[4];
    ball3.leftSound = sounds[5];
}

function setup(){
    createCanvas(size, size);
}

function draw(){
    back()
    balls.forEach(ball => move(ball)) 
}

function back(){
    background(0);
    stroke(0)
    lines.forEach(l => drawLine(l,0,4))
}

function move(ball){
    ball.x = ball.x + ball.speed
    drawCircle(ball.x,ball.y,ball.d)
    if (ball.x >= size-100-ball.d/2){
        ball.leftSound.play()
        line2.count = 3
        alterBall(ball)
    }
    if (ball.x <= 100+ball.d/2){
        ball.rightSound.play()
        line1.count = 3
        alterBall(ball)
    }
}

function alterBall(ball){
    ball.d = ball.d * Math.random()
    ball.speed = -ball.speed * Math.ceil(Math.random()*15) /5
}

function drawCircle(x,y,d){
    stroke(80,20,200)
    strokeWeight(2);
    fill(0,200,150)
    ellipse(x, y, d)
}
function drawLine(l){
    if (l.count<=0){
        stroke(255)
        strokeWeight(2);
    } else {
        stroke(255,0,0)
        strokeWeight(6);
    }
    l.count -=1
    line(l.x1, l.y1, l.x2, l.y2);
}


