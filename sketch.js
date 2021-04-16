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
    let cnv = createCanvas(totalX, totalY, SVG);
    // cnv.parent('p5')

  PALETTE = [
    // color(255, 52, 154), // pink
    // color(120, 120, 120), // gray
    color(0, 0, 0), // black
    // color(4, 0, 152), // blue
  ];

  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
    if (NAME_TRANSLATED) {
        console.log(state)
        // go to a point on the screen and draw a crystal
        // continue to do this until we run out of room
        for (let x = 0; x < COLUMNS; x++) {
            for (let y = 0; y < ROWS; y++) {
                const posX = START + x * GRIDBOX;
                const posY = START + y * GRIDBOX;
                const crystal = makeCrystal({ x: posX, y: posY });
                console.log(crystal);
                ALL_CRYSTALS.push(crystal);
            }
            
        }
    // } else { 
    //     console.log('reloading...')
    //     location.reload()
    // }

    ALL_CRYSTALS.forEach((crystal) => {
      drawCrystal(crystal);
    });
  }
}
