let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  let r = random(10, 70);
  let b = new Circle(color(random(0,255), random(0,255), random(0,255)),mouseX, mouseY, r);
  circles.push(b);
}

function draw() {
  background(0);

  for (let circle of circles) {
    circle.move();
    circle.show();
  }

  for (let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].show();
  }
}

class Circle {
  constructor(getcolor, x, y, r) {
    this.getcolor = getcolor;
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x +1;
    if (this.x > width) {
    this.x = random(windowWidth);
    }
    this.y = this.y + 2;
    if (this.y > height) {
      this.y = random(windowHeight);
    }
  }

  show() {
    stroke(random(50,255), random(50,255), random(50,255));
    strokeWeight(4);
    fill(this.getcolor);
    //fill(220,150,190);
    ellipse(this.x, this.y, this.r * 2);
  }
}
