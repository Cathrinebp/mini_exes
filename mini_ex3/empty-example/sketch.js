function setup() {
 createCanvas(windowWidth, windowHeight);   //create a drawing canvas
 background(0);
 frameRate (17);  //try to change this parameter, rotationshastidhed
}

function draw() {
 noStroke();
 fill(10,80);  //check this syntax with alpha value
 rect(0, 0, width, height);
 drawThrobber(20);
}

function drawThrobber(num) {
  push();
  translate(width/2, height/2);
  // 360/num >> degree of each ellipse' move ;frameCount%num >> get the remainder that indicates the movement of the ellipse
  var cir = 360/num*(frameCount%num);  //to know which one among 9 possible positions.
  rotate(radians(cir));
  noStroke();
  if(mouseX < 300){
  fill(10,255,180);
  }
  if(mouseX >= 300){
  fill(0,255,0);
  }
  if(mouseX >= 600){
  fill(255,90,180);
  }
  if(mouseX >= 800){
  fill(150,90,180);
  }

  if(mouseY >= 500){
  ellipse(100,0,50,50);
  }
  else if(mouseY >= 250){
  rect(100,0,50,50);
  }
  else if(mouseY < 200){
  quad(60, 60, 120, 120, 80, 83, 10, 76);
  }
  pop();

}
