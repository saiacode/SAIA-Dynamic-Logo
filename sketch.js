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
    color(168, 168, 168), // gray
    // color(0, 0, 0), // black
    // color(255, 255, 255), //white
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


