const CRYSTAL_SIZE = 300;
const SIDES = 6;


let NAME_TRANSLATED = false;

// layout
const MARGIN = CRYSTAL_SIZE / 2;
const COLUMNS = 1;

const ROWS = 1;
const PADDING = CRYSTAL_SIZE * 0.2;
const GRIDBOX = CRYSTAL_SIZE + PADDING;
const START = CRYSTAL_SIZE / 2 + MARGIN;

let PALETTE = [];
ALL_CRYSTALS = [];



function setup() {
  const totalX = START + GRIDBOX * COLUMNS;
  const totalY = START + GRIDBOX * ROWS;
  createCanvas(totalX, totalY, SVG);

  PALETTE = [
    // color(255, 52, 154), // pink
    // color(168, 168, 168), // gray
    // color(0, 0, 0), // black
    color(255, 255, 255), //white
    // color(4, 0, 152), // blue
  ];

  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // let startpoint = { x: 0, y: 0 }
  let startpoint = { x: width / 4, y: height / 4 }
  translate(startpoint.x, startpoint.y);
  // arc(10, 10, 100, 100, 45, 90)
  drawCrystal(makeCrystal({ x: startpoint.x, y: startpoint.y }))


} //draw

const donut = (D, d, angleStart, angle) => {
  rotate(angleStart)
  noFill()
  const R = D / 2
  const r = d / 2
  arc(0, 0, D, D, 0, angle, OPEN)
  line(R * cos(angle), R * sin(angle), r * cos(angle), r * sin(angle))
  line(R, 0, r, 0)
  arc(0, 0, d, d, 0, angle, OPEN)
  rotate(- angleStart)
}
const vertexDonut = (D, d, angleStart, angle) => {
  // rotate(angleStart)
  // noFill()
  const R = D / 2
  const r = d / 2
  beginShape()
  // vertex(0, 0)
  let angles = []
  for (let a = angleStart; a < angle; a++) {
    angles.push(a)
    vertex(R * cos(a), R * sin(a))
  }
  let reversedAngles = angles.reverse()
  for (let i = 0; i < angles.length; i++) {
    vertex(r * cos(reversedAngles[i]), r * sin(reversedAngles[i]))
  }
  // vertex(r * cos(angle), r * sin(angle))
  // vertex(r, 0)
  endShape(CLOSE);

}

function coords() {
  stroke(color(200, 100, 200))
  line(-100, 0, 100, 0)
  line(0, -100, 0, 100)
  line(100, -10, 100, 10)
  line(-100, -10, -100, 10)
  line(10, -100, -10, -100)
  line(10, 100, -10, 100)
}

function test() {
  // let startpoint = { x: 0, y: 0 }
  let startpoint = { x: width / 2, y: height / 2 }
  translate(startpoint.x, startpoint.y);
  // noFill()
  stroke(color(200, 200, 200))



  // const R = 400
  // const r = R / 2
  // const p = r / 2
  // const angle = 350

  // arc(0, 0, R, R, 0, angle, OPEN)
  coords()

  // line(r * cos(angle), r * sin(angle), p * cos(angle), p * sin(angle))
  stroke(color(200, 200, 200))

  // line(r, 0, p, 0)
  // arc(0, 0, r, r, 0, angle, OPEN)

  // donut(400, 395, 49, 108)
  vertexDonut(400, 350, 200, 280)


} //test


