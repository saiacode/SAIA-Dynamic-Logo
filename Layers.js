let state = {
  sides: 1,
  stepsOut: 8,
  thinStroke: 1,
    thickStroke: 3,
    alpha: 0, 
    beta: 0,
    gamma: 0,
  
};

const setState = (state) => {
  (state.numShapes = state.sides),
    (state.angle = 360 / state.numShapes),
    (state.singleStep = CRYSTAL_SIZE / 2 / state.stepsOut),
    (state.layerColor = getRandomFromPalette());
  return state;
};

const circles = (state) => {
    let ex = 1;
    // let ex = show + state.rho + state.pi + state.omicron + state.pi + state.nu
    let weight = state.alpha < 6?state.thickStroke * 0.86 :state.thinStroke;
    // let numShapes =
    //   show + 6 - (state.rho + state.pi + state.omicron + state.pi + state.nu);
    // state.shapeSize = CRYSTAL_SIZE * Math.pow(0.618, ex);
    state.shapeSize = CRYSTAL_SIZE *  state.delta
    console.log('CIRCLE SIZE : ', state.shapeSize)
    state.position = CRYSTAL_SIZE / 2 - state.shapeSize / 2;
    let numCircles = state.alpha;
    // let numCircles = Math.pow(2,state.alpha) / 1618;
    // let numCircles = int(42*state.beta);
    

  return {
    name: "circles",
    state,
      render: () => {
          
      noFill();
      stroke(state.layerColor);
      strokeWeight(weight);
      push();
      //translate(width/2, height/2)
        // if (state.gamma) {
            for (let i = 0; i <= numCircles; i++) {
        ellipse(state.position, 0, state.shapeSize, state.shapeSize);
        rotate(360/numCircles);
      }
        // }
      
      pop();
    },
  };
};
// const circles = (state) => {
//     let show = 0
//     let ex = 1;
//     // let ex = show + state.rho + state.pi + state.omicron + state.pi + state.nu
//     let weight = state.alpha < 6?state.thickStroke * 0.86 :state.thinStroke * 0.2 * 0.86;
//     // let numShapes =
//     //   show + 6 - (state.rho + state.pi + state.omicron + state.pi + state.nu);
//     state.shapeSize = CRYSTAL_SIZE * Math.pow(0.618, ex);
//     console.log('CIRCLE SIZE : ', state.shapeSize)
//     state.position = CRYSTAL_SIZE / 2 - state.shapeSize / 2;
//     let numCircles = state.alpha;
//     // let numCircles = 3 + int(38*state.beta);
    

//   return {
//     name: "circles",
//     state,
//       render: () => {
          
//       noFill();
//       stroke(state.layerColor);
//       strokeWeight(weight);
//       push();
//       //translate(width/2, height/2)
//         if (state.gamma) {
//             for (let i = 0; i <= numCircles; i++) {
//         ellipse(state.position, 0, state.shapeSize, state.shapeSize);
//         rotate(360/numCircles);
//       }
//         }
      
//       pop();
//     },
//   };
// };

const simpleLines = (state) => {
    // third character dependant
    // fourth character dependant
  state.numSteps = state.zeta
    ? state.stepsOut
    : int(state.stepsOut * 1.25);
  state.step = CRYSTAL_SIZE / 2 / state.numSteps;
//   state.start = floor(state.stepsOut);
  state.start = floor(state.epsilon * 4) + 1;
//   state.start = floor(state.numSteps * (1 - state.epsilon) );
  state.stop = floor(state.eta * 4) + 1;
//   state.stop = floor((state.numSteps ) * state.epsilon + state.start);
  state.weight = state.zeta ? state.thinStroke * 1.618 : state.thickStroke * 1.618;
  state.numShapes = state.zeta ? state.sides : state.sides * 2;
  state.angle = 360 / state.numShapes;

  return {
    name: "Simple Lines",
    state,
    render: () => {
      noFill();
      stroke(state.layerColor);
      strokeWeight(state.weight);
      push();
      //translate(width/2, height/2)
      for (let i = 0; i < state.numShapes; i++) {
        line(state.start * state.step, 0, state.stop * state.step, 0);
        rotate(state.angle);
      }
      pop();
    },
  };
};

const outlineShape = (state) => {
    state.weight = state.omega?state.thickStroke:state.thinStroke ;
  state.hexagonTrue = state.omega;

  return {
    name: "Outline Shape",
    state,
      render: () => {
          noFill();
      stroke(state.layerColor);
      strokeWeight(state.weight);
      push();
      //translate(width/2, height/2)
      if (state.hexagonTrue) {
        hexagon(0, 0, CRYSTAL_SIZE / 2);
      } else {
        ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
      }
      pop();
    },
  };
};

const dottedLines = (state) => {
  state.numShapes = status.kappa ? state.sides : state.sides * 2;
  state.angle = 360 / state.numShapes;
//   state.shapeSize = state.thinStroke;
    state.shapeSize = 30 * state.iota;
    state.centerOffset = state.singleStep * 3 * state.iota;
    

  return {
    name: "Dotted Lines",
    state,
    render: () => {
      fill(state.layerColor);
      noStroke();
      push();
      //translate(width / 2, height / 2)
        if (state.iota > 0) {
            for (let i = 0; i <= state.numShapes; i++) {
        for (
          let x = state.centerOffset;
          x < CRYSTAL_SIZE / 2;
          x += state.singleStep
        ) {
          rect(x, 0, state.shapeSize, state.shapeSize);
        }
        rotate(state.angle);
      }
        }
      
      pop();
    },
  };
};

const centeredShape = (state) => {
//   state.randomShape = state.singleStep;
//   state.randomShape = random(1);
  state.shapeSize = state.omega * ( 0.7 + state.beta * 2)? state.singleStep : state.singleStep 
//   state.shapeSize = state.singleStep * ( 0.7 + state.beta * 2);
    // state.shapeSize = 3.8 * state.singleStep;
    state.weight = state.omega?state.thinStroke:state.thickStroke ;
    
    // state.weight = 2 + (7 * state.beta) ;
    
//   state.shapeSize = floor(random(state.stepsOut / 2, state.stepsOut - 2)) * state.singleStep;

  return {
    name: "Centered Shape",
    state,
    render: () => {
    //   fill(state.layerColor);
        noFill();
        stroke(state.layerColor);
      strokeWeight(state.weight);

    //   noStroke();
        push();
      // translate(width / 2, height / 2)
        if (state.chi) {
            rect(0, 0, state.shapeSize * 2, state.shapeSize * 2);
        } else if (state.psi) {
            ellipse(0, 0, state.shapeSize * 2, state.shapeSize * 2);
        } else {
        rotate(state.angle / 2);
        hexagon(0, 0, state.shapeSize);
      }
      pop();
    },
  };
};

const ringOfShapes = (state) => {
//   state.steps = floor(3.5 * state.lambda)
  state.steps = 3
  state.center = state.steps * state.singleStep;
  state.randomShape = state.lambda;
//   state.direction = randomSelectTwo(); // used for triangle only
  state.direction = state.mu; // used for triangle only
  state.fillColor = state.layerColor; 
  state.weight = state.mu ? state.thinStroke * 0.85 * 0.85 * 0.85 * 0.85 : state.thickStroke * 0.85 *  0.85 * 0.85;

//   if (state.steps < state.stepsOut / 2) {
//     state.radius = floor(state.steps * state.lambda + 1) * state.singleStep;
//   } else if (state.steps < state.stepsOut / 1.5) {
//     state.radius =
//       floor((1 + state.lambda * (state.stepsOut - state.steps))) * state.singleStep;
//   } else {
//     state.radius = floor((1 + state.lambda * (state.stepsOut / 2 + 1))) * state.singleStep;
//   }
    state.radius = 24

  return {
    name: "Ring of Shapes",
    state,
    render: () => {
    //   stroke(state.layerColor);
        noStroke();
        fill(state.fillColor);
        // noFill();
      strokeWeight(state.weight);
      push();
      //translate(width / 2, height / 2)
      for (let i = 0; i < state.numShapes; i++) {
        if (state.randomShape < 0.33) {
          ellipse(0, state.center, state.radius, state.radius);
        } else if (state.randomShape >= 0.33 && state.randomShape < 0.66) {
          rect(0, state.center, state.radius, state.radius);
        } else if (state.randomShape >= 0.66) {
          myTriangle(state.center, state.radius, state.direction);
        }
        rotate(state.angle);
      }
      pop();
    },
  };
};

const steppedHexagons = (state) => {
  state.numSteps = state.xi ? state.stepsOut : state.stepsOut * 1.25;
  state.centerOffset = (CRYSTAL_SIZE / 2) * 0.15;
  state.singleStep = (CRYSTAL_SIZE / 2 - state.centerOffset) / state.numSteps;
  state.weight = state.xi ? state.thinStroke : state.thickStroke;

  return {
    name: "Stepped Hexagons",
    state,
      render: () => {
          if (!state.gamma) {
            stroke(state.layerColor);
      noFill();
      strokeWeight(state.weight);
      push();
      //translate(width / 2, height / 2)
      rotate(state.angle / 2);
      for (let i = 1; i < state.numSteps + 1; i++) {
        hexagon(0, 0, state.centerOffset + i * state.singleStep);
      }
      pop();
        }
      
    },
  };
};
