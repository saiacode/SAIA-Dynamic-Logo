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
  // let cnv = createCanvas(totalX, totalY, SVG);
  // cnv.parent('p5')

  PALETTE = [
    // color(255, 52, 154), // pink
    color(168, 168, 168), // gray
    // color(0, 0, 0), // black
    //   color(255,255,255), //white
    // color(4, 0, 152), // blue
  ];

  noLoop();
  angleMode(DEGREES);
  //   angleMode(RADIANS);
  rectMode(CENTER);
  ellipseMode(CORNER);
}

function draw() {
  let startpoint = { x: width / 2, y: height / 2 }
  translate(startpoint.x, startpoint.y);
  ellipse(0, 0, 100, 100)
  // angleMode(RADIANS);
  let R = 100;
  let r = 1.618 * R;
  let pass = 5
  noFill();
  strokeWeight(1);
  // let angle = 0;
  let x = 0;
  let y = 0;
  let d = 0.2 * r;

  // logos personales
  strokeWeight(2);
  push();
  let n = 80
  let angle = 360 / n
  let size = 3

  // ellipse(0,0,200,200)

  for (let i = 0; i < n; i++) {
    let x = 10 + cos(i * angle)
    let y = 10 + sin(i * angle)
    let start = Math.random() * 360
    let end = start + 50
    arc(x, y, size * i + 1, size * i + 1, start, end)
  }

  // forma 1 : 4 circulos descentrados
  // for (i = 0; i < 4; i++) {
  //   angle += 90;
  //   x = R * cos(angle);
  //   y = R * sin(angle);
  //   dimX = 100;
  //   dimY = dimX;
  //   ellipse(x, y, dimX, dimY)
  // }

  // forma 2 : varios circulos 
  // ellipse(0, 0, 2 * R, 2 * R)
  // for (i = 0; i < 55; i++) {
  //   angle += pass;
  //   x = d * cos(angle);
  //   y = d * sin(angle);
  //   dimX = r;
  //   dimY = dimX;
  //   ellipse(x, y, dimX, dimY)
  // }

  //  forma 3 : varios elipses 
  // for (i = 0; i < 55; i++) {
  //     angle += pass;
  //     x = d * cos(angle);
  //     y = d * sin(angle);
  //     dimX = r;
  //     dimY = dimX + i * 2;
  //         ellipse(x, y, dimX, dimY)
  // }

  //forma 4: 
  //     R = 50
  //     r = 2
  //     pass = 20
  //     dimMax = 10 
  //     dimPass = 3
  //     dimX = r
  //     let points = 50
  //     let up = true
  //     let forward = true
  //     fill(0)
  //     for (i = 0; i < points; i++) {
  //         if (forward) {
  //             angle += pass;
  //  x = (R - i) * cos(angle) ;
  //             y = (R - i) * sin(angle);
  //             forward = angle < 350
  //         } else {
  //             angle -= pass;
  //  x = (R + i) * cos(angle) ;
  //             y = (R + i) * sin(angle);
  //             forward = angle === 0 
  //         }

  //         if (up) {
  //             dimX += dimPass;
  //             up = dimX < dimMax

  //         } else {
  //             dimX -= dimPass;
  //             up = dimX === r

  //         }
  //         dimY = dimX;


  //         ellipse(x, y, dimX, dimY)
  //         console.log('angle ' , angle)
  //     }

  //forma 5
  // let radius = 0
  // angle = 0
  // let dimX = 0
  // fill(0)
  // arc(0, 0, 80, 80, PI, TWO_PI);
  // arc(50, 55, 50, 50, 0, HALF_PI);
  //   for (i = 0; i < 40; i++) {
  //     angle +=i;
  //       radius += i/10 * 0.9;
  //       dimX += i/100;
  //     x = radius * cos(angle);
  //     y = radius * sin(angle);
  //     // dimX = 100;
  //     dimY = dimX;
  //         ellipse(x, y, dimX, dimY)
  // } 

  //forma 6
  // practica cap 2

  // for (let i = 0; i < 5000; i++) {
  //     let x = (50 * cos(PI / 180 * i))
  //     let y = (50 * sin(PI / 180 * i))
  //     point(x +50, y + 50)
  // }
  ellipse(50, 50, 80, 80);


}

// function draw() {
//     if (NAME_TRANSLATED) {
//         // go to a point on the screen and draw a crystal
//         // continue to do this until we run out of room
//         for (let x = 0; x < COLUMNS; x++) {
//             for (let y = 0; y < ROWS; y++) {
//                 const posX = START + x * GRIDBOX;
//                 const posY = START + y * GRIDBOX;
//                 const crystal = makeCrystal({ x: posX, y: posY });
//                 console.log(crystal);
//                 ALL_CRYSTALS.push(crystal);
//             }

//         }
//         // } else { 
//         //     console.log('reloading...')
//         //     location.reload()
//         // }

//         ALL_CRYSTALS.forEach((crystal) => {
//             drawCrystal(crystal);
//         });

//     }
// }
