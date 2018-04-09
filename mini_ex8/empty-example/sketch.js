var weather;
var colortemp;
var colorhum;

function setup() {
  createCanvas(windowWidth, 450);
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Aarhus&APPID=a7ebb8f5d1d81ef6439463ef0deccc5a&units=metric', gotData);

//colortemp = color(255);
//colorhum = color(255);
color2 = color(200,155,0);
color1 = color(0);
colorhum = 0;
colortemp =0;
}
function gotData(data){
  weather = data;

  var temperatureDiv = createDiv("Temperature " + floor(weather.main.temp) + '&deg;');
  var humidityDiv = createDiv("Humidity " + floor(weather.main.humidity) + '%');
}


function draw() {
  background(255);

textSize(20);
fill(0);
text('Weather in Aarhus',0,445);

  if (weather) {

    colortemp = map(weather.main.temp,-10,30,0,255);
    fill(colortemp, 0, 255-colortemp);
    ellipse(300, 300, 3*weather.main.temp, 3*weather.main.temp);

    colorhum = map(weather.main.humidity,0,100,0,255);
    fill(colorhum);
    ellipse(600,300, 3*weather.main.humidity, 3*weather. main. humidity);

  }
}
