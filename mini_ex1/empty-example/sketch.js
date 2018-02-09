function setup() {
createCanvas(1200,700, WEBGL);
}

function draw() {
  { colorMode(HSB);
background(100, 10, 100);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   colorMode(HSB);
fill(150, 204, 100);
   torus(200, 30); }

  { rotateX(frameCount * 0.02);
   rotateZ(frameCount * 0.02);
   colorMode(HSB);
fill(200, 204, 120);
   ellipse(-100, 50, 60, 60); }

  { rotateX(frameCount * 0.03);
   rotateZ(frameCount * 0.01);
   colorMode(HSB);
 fill(170, 200, 120);
   ellipse(0, -40, 60, 60); }

  { rotateX(frameCount * 0.04);
   rotateZ(frameCount * 0.04);
   colorMode(HSB);
fill(255, 190, 100);
   ellipse(100, 50, 60, 60); }
   }
