// Author: Katie Huynh

let angle1 = 3;
let angle2 = 0;
let angle3 = 0;
let crystals = [];
let crystalNum = 18;
let bgm;
let keys;
let lake;
let star;



function preload() {
  bgm = loadSound('assets/Ethereal.mp3');
  lake = loadImage('assets/lake.png');
  star = loadModel('assets/star.obj');
  Background = loadImage('assets/Background.png');
}

function setup() {
  let cnv = createCanvas(500, 400,WEBGL);
  cnv.position(windowWidth / 2 - 250, windowHeight / 2 - 200);
  
  angleMode(DEGREES);
  bgm.loop();
  bgm.setVolume(0.2);

  key1 = loadSound('assets/A.mp3');
  key2 = loadSound('assets/B.mp3');
  key4 = loadSound('assets/D.mp3');
  key5 = loadSound('assets/E.mp3');
  key6 = loadSound('assets/F.mp3');
  key7 = loadSound('assets/G.mp3');
  key8 = loadSound('assets/H.mp3');
  key9 = loadSound('assets/I.mp3');
  keys = [key1, key2, key4, key5, key6, key7, key8, key9];

  for (let i = 0; i < crystalNum; i++) {
    crystals.push(new crystal(random(-450, -200), random(-50, 0)));
    crystals.push(new crystal(random(200, 450), random(-50, 0)));

  }
}

function draw() {
  background(155, 210, 195);
  

  push();
  for (let i = 0; i < crystalNum; i++) {
    crystals[i].display();
  }
  pop();

  push();

  pointLight(40, 18, 22, 0, 40,0);
  pointLight(53, 141, 67, mouseX -400, mouseY -400,0);
  
  //middle building
  push();
  
  //star
  push();
  translate(0, 40, 0);

  ambientLight('pink');
  specularMaterial(255);
  noStroke();
  scale(3);
  model(star);

  pop();

  push();
  translate(0, 100, 0);

  ambientLight('lightpink');
  ambientMaterial(255);
  noStroke();
  box(150, 7, 150);

  pop();

  push();
  translate(0, 93, 0);

  ambientLight('lightpink');
  ambientMaterial(255);
  noStroke();
  box(130, 7, 130);

  pop();

  //pillars
  push();
  translate(-52.5, 34.5, 0);
  ambientLight(142,145,196);
  ambientMaterial(255);
  noStroke();
  box(10, 110, 110);
  
  beginShape();
  noFill();
  stroke('white');
  vertex(-5.5, -45,-45);
  vertex(-5.5,-45, 45);
  vertex(-5.5, 45,45);
  vertex(-5.5,45, -45);
  vertex(-5.5,-45, -45);
  endShape();
  
  beginShape();
  noFill();
  stroke('white');
  strokeWeight(0.5);
  vertex(-5.5, -40,-40);
  vertex(-5.5,-40, 40);
  vertex(-5.5, 40,40);
  vertex(-5.5,40, -40);
  vertex(-5.5,-40, -40);
  endShape();

  pop();

  push();
  translate(52.5, 34.5, 0);

  ambientLight(142,145,196);
  ambientMaterial(255);
  noStroke();
  box(10, 110, 110);
  
  beginShape();
  noFill();
  stroke('white');
  vertex(5.5, -45,-45);
  vertex(5.5,-45, 45);
  vertex(5.5, 45,45);
  vertex(5.5,45, -45);
  vertex(5.5,-45, -45);
  endShape();
  
  beginShape();
  noFill();
  stroke('white');
  strokeWeight(0.5);
  vertex(5.5, -40,-40);
  vertex(5.5,-40, 40);
  vertex(5.5, 40,40);
  vertex(5.5,40, -40);
  vertex(5.5,-40, -40);
  endShape();

  pop();

  //back
  push();
  translate(0, 34.5, -54);

  ambientLight(142,145,196);
  ambientMaterial(255);
  noStroke();
  box(100, 110, 2);
  
  beginShape();
  noFill();
  stroke('white');
  strokeWeight(0.5);
  vertex(-40,-40,-1.5);
  vertex(-40, 40,-1.5);
  vertex(40,40,-1.5);
  vertex(40, -40,-1.5);
  vertex(-40, -40,-1.5);
  endShape();
  
  beginShape();
  noFill();
  stroke('white');
  strokeWeight(1);
  vertex(-45,-45,-1.5);
  vertex(-45, 45,-1.5);
  vertex(45,45,-1.5);
  vertex(45, -45,-1.5);
  vertex(-45, -45,-1.5);
  endShape();

  pop();

  push();
  translate(0, 20, -54);

  ambientLight(142,145,196);
  ambientMaterial(255);
  noStroke();
  box(100, 110, 2);

  pop();

  //front
  push();
  translate(-40, 14.5, 54);

  ambientLight(149,160,199);
  ambientMaterial(255);
  noStroke();
  box(15, 70, 2);

  pop();

  push();
  translate(40, 14.5, 54);

  ambientLight(149,160,199);
  ambientMaterial(255);
  noStroke();
  box(15, 70, 2);

  pop();

  push();
  translate(0, -4.5, 1);


  ambientLight(149,160,199);
  ambientMaterial(255);
  noStroke();
  box(90, 32, 108);

  pop();

  push();
  translate(-24.5, 14.5, 54);

  ambientLight(149,160,199);
  ambientMaterial(255);
  noStroke();
  box(16, 40, 2);

  pop();

  push();
  translate(24.5, 14.5, 54);

  ambientLight(149,160,199);
  ambientMaterial(255);
  noStroke();
  box(16, 40, 2);

  pop();
  
  //sticker
  push();
  translate(0,-3,56);
  stroke('white');
  noFill();
  beginShape();
  vertex(0, 5);
  vertex(5, 0);
  vertex(0, -5);
  vertex(-5, 0);
  vertex(0, 5);
  endShape();
  beginShape();
  vertex(0, 10);
  vertex(10, 0);
  vertex(0, -10);
  vertex(-10, 0);
  vertex(0, 10);
  endShape();
  pop();
  
  
  pop();

  //beam
  push();
  translate(0, -25.5, 0);

  ambientLight('lightpink');
  ambientMaterial(255);
  noStroke();
  box(135, 10, 135);

  pop();

  push();
  translate(0, -35.5, 0);

  ambientLight('lightpink');
  ambientMaterial(255);
  noStroke();
  box(120, 10, 120);

  pop();

  push();
  translate(0, -40, 0);
  rotateX(90);

  ambientLight(142,146,182);
  ambientMaterial(255);
  noStroke();
  torus(50, 10);

  pop();

  //dome
  push();
  translate(0, -45, 0);
  rotateY(angle3);
  angle3 += 0.1

  ambientLight(142,145,196);
  ambientMaterial(255);
  stroke(149,160,199);
  sphere(53, 11, 11);

  pop();

  push();
  rotateY(angle3);
  angle3 += 0.1
  translate(0, -96, 0);
  ambientLight(142,145,196);
  ambientMaterial(255);
  stroke(149,160,199);
  cone(39, -30, 16);

  pop();
  pop();




  //two structures
  //left
  push();
  pointLight(23, 111, 37, mouseX -200, mouseY -200,mouseX-200);
  push();
  translate(-170, 40, 30);
  ambientLight(240,148,137);
  ambientMaterial(255);
  noStroke();
  cone(30, -130, 80);

  pop();

  push();
  translate(-170, 35, 30);
  ambientLight(240,148,137);
  ambientMaterial(255);
  noStroke();
  cone(26, 50, 80);

  pop();

  push();
  translate(-170, 40, 30);
  ambientLight(240,148,137);
  ambientMaterial(255);
  noStroke();
  sphere(20, 80, 80)

  pop();
  pop();

  //right
  push();
  pointLight(23, 111, 37, mouseX -200, mouseY -200,mouseX-200);

  push();
  translate(170, 40, 30);
  ambientLight(240,148,137);
  ambientMaterial(255);
  noStroke();
  cone(30, -130, 80);

  pop();

  push();
  translate(170, 35, 30);
  ambientLight(240,148,137);
  ambientMaterial(255);
  noStroke();
  cone(26, 50, 80);

  pop();

  push();
  translate(170, 40, 30);
  ambientLight(240,148,137);
  ambientMaterial(255);
  noStroke();
  sphere(20, 80, 80)

  pop();
  pop();




  //lake
  push();
  translate(0, 300, 0);

  textureWrap(CLAMP);
  texture(lake);
  noStroke();
  cylinder(400, 400, 400);

  pop();

  //background
  push();
  translate(0, 0, 0);


  texture(Background);
  noStroke();
  sphere(2000);

  pop();

  orbitControl(1, 1, 0.01);

}

function mousePressed() {
  let sound = random(keys);
  sound.play();
}