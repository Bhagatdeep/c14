var ball = {
  x:20,
  y:30,
  r:30,
  xspeed:0,
  yspeed:0,
  colour:["blue","yellow","red","pink"]
}





function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  circle(ball.x,ball.y,ball.r)
  fill(ball.colour[0])
  ball.xspeed = 1
  ball.yspeed = 1
  ball.x=ball.x+ball.xspeed 
}