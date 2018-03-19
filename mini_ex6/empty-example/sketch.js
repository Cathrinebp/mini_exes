var farve1
var farve2
var farve3
var farve4
var farve5
var farve6
var tekst1

function setup()
{
createCanvas(500,500);
background(79,195,247);
farve1=color(255,249,196);
farve2=color(255,234,0);
farve3=color(253,216,53);

farve4=color(216,67,21);
farve5=color(255,61,0);
farve6=color(183,28,28);

tekst1 ='Press the mouse for sunset';
}

function draw()
{
textSize(27);
stroke(0);
fill(0);
text(tekst1,80,450);



noFill();
translate(width/2, height/2);
rotate(-millis() / 50.0);
stroke(farve1);
line(0,0,300,300);
//yderste gule ellipse
stroke(farve2);
rotate(millis() / 60.0);
ellipse(50,50,100,100);
//inderste orange ellipse
stroke(farve3);
rotate(millis() / 50.0);
ellipse(40,40,50,50);

if(mouseIsPressed){
  farve1=farve4
  farve2=farve5
  farve3=farve6

} else {
  farve1=color(255,249,196);
  farve2=color(255,234,0);
  farve3=color(253,216,53);

}
}
