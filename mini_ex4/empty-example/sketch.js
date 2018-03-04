var video;
var button;
var snapshots = [];

function setup() {
  createCanvas(800,600);
  background(51);
  video = createCapture(VIDEO);
  video.size(320,240);
  button = createButton('picture');
  button.mousePressed(takepicture);
}

function takepicture() {
  snapshots.push(video.get());
}

function draw() {
  for (var i = 0; i < snapshots.length; i++){
    tint(255,150);
    image(snapshots[i], 0, 0, 800, 600);
}
}
