var hr, min, sec;
var secAngle, minAngle, hrAngle;
var BG;

function preload(){
  BG = loadImage("BG.jpeg");
}

function setup() {
  createCanvas(800,500);
}

function draw() {
  background(BG);
  drawSprites();

  translate(600,80)
  rotate(-90)

  min = minute();
  hr = hour();
  sec = second();

  minAngle = map(min,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);
  secAngle = map(sec,0,60,0,360);

  push();
  rotate(minAngle);
  stroke("grey");
  strokeWeight(5);
  line(0,0,50,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("brown");
  strokeWeight(5);
  line(0,0,30,0);
  pop();

  push();
  rotate(secAngle);
  stroke("black");
  strokeWeight(5);
  line(0,0,15,0);
  pop();

  strokeWeight(7);
  noFill();

  stroke("black");
  arc(0,0,140,140,0,secAngle);

  stroke("grey");
  arc(0,0,130,130,0,minAngle);

  stroke("brown");
  arc(0,0,120,120,0,hrAngle);
}