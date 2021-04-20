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
  let weight = state.alpha < 6 ? state.thickStroke * 0.86 : state.thinStroke;
  // let numShapes =
  //   show + 6 - (state.rho + state.pi + state.omicron + state.pi + state.nu);
  // state.shapeSize = CRYSTAL_SIZE * Math.pow(0.618, ex);
  state.shapeSize = CRYSTAL_SIZE * state.delta
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
        rotate(360 / numCircles);
      }
      // }

      pop();
    },
  };
};

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

const hexaRing = (state) => {
  state.weight = 2
  return {
    name: "Hexa Ring",
    state,
    render: () => {
      noFill();
      stroke(state.layerColor);

      strokeWeight(state.weight);
      push();
      if (state.textNormalized) {
        const hash = state.textNormalized

        let n = hash.length
        let size = 60 + 60 * hash[0]
        let angle = 360 / 6

        rotate(90)

        let m1 = 1.1
        let m2 = 1.1
        let m3 = 50

        // y es horizontal y positivo a la izquierda
        // x es vertical y positivo hacia abajo
        // ellipse(0, 0, size, size)
        // hexagon(0, 0, size)
        // stroke(color(255, 255, 255))

        let nodes = []

        let hexaAngle = 71
        let m = n > 16 ? 16 : n
        for (let k = 1; k < m; k++) {
          // strokeWeight(state.weight - k * n / 10)
          strokeWeight(state.weight * (1 - hash[k]))

          for (let i = 0; i < 7; i++) {
            let x = - size * sin(hexaAngle)
            let y = - size * cos(hexaAngle)


            const shapeSize = size * (1 - k * 0.1) - (1 * size / n)
            if (i < 0) {
              // rect(x, y, x + shapeSize, y + shapeSize)
              rect(x, y, 100 * k, 100 - i * k)
            } else {
              hexagon(x, y, shapeSize)

            }
            nodes.push({ x, y })
            hexaAngle += angle
          }



        }

        // console.log(nodes)

        let step = 1

        // strokeWeight(0.2)

        // for (let i = 0; i < nodes.length - step; i++) {
        //   let j = i + step
        //   line(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y)
        // }

        // for (let i = 0; i < n; i++) {
        //   let x = cos(angle) * 7
        //   let y = sin(angle) * 7
        //   hexagon(x, y, size * 0.9 * hash[0]);
        //   angle = angle * 2
        //   // rotate(angle);
        // }





      }
      pop();
    },
  };
};
const concentricArcs = (state) => {
  state.weight = state.omega ? state.thickStroke : state.thinStroke;
  state.hexagonTrue = state.omega;

  return {
    name: "Concentric Arcs",
    state,
    render: () => {
      noFill();
      stroke(state.layerColor);

      strokeWeight(state.weight);
      push();
      if (state.textNormalized) {

        let n = state.textNormalized.length
        let angle = 360 / n
        let size = 15

        for (let i = 0; i <= n; i++) {
          let x = 0 + cos(i * angle)
          let y = 0 + sin(i * angle)
          strokeWeight(state.textNormalized[i] > 0.5 ? 2.5 : 3.5);
          let start = state.textNormalized[i] * 360
          let end = start + state.textNormalized[i + 1] * 300
          arc(x, y, size * i / n * 30, size * i / n * 30, start, end)
        }

        arc(10, n, 100, 100, 45, 90)

      }
      pop();
    },
  };
};
const rotatedPolygons = (state) => {
  state.weight = state.omega ? state.thickStroke : state.thinStroke;
  state.hexagonTrue = state.omega;

  return {
    name: "Rotated Polygons",
    state,
    render: () => {
      noFill();
      stroke(state.layerColor);

      strokeWeight(state.weight);
      push();
      if (state.textNormalized) {

        let n = state.textNormalized.length
        let hash = state.textNormalized
        let angle = 360 / n
        let size = 15

        for (let i = 0; i < n; i++) {
          let diameter = 50 * i

          diameter > state.size ?
            hexagon(0, 0, state.size - 10 * hash[i] * i) :
            hexagon(0, 0, diameter)


          rotate(360 / (0.8 * n));
        }

      }
      pop();
    },
  };
};
const gradientLines = (state) => {
  state.weight = state.omega ? state.thickStroke : state.thinStroke;
  state.hexagonTrue = state.omega;

  return {
    name: "Gradient Lines",
    state,
    render: () => {
      noFill();
      stroke(state.layerColor);

      strokeWeight(state.weight);
      push();
      if (state.textNormalized) {
        let hash = state.textNormalized

        // let n = state.textNormalized.length * 16
        let n = 60 + hash.length
        let angle = 360 / n
        let start = state.size * (0.9 - state.textNormalized[3])

        let halves = state.delta + state.epsilon + state.zeta + state.eta
        let g = 2 ** halves

        for (let j = 1; j <= g + 1; j++) {

          for (let i = 0; i <= n / g; i++) {
            strokeWeight(0.2 + (i * 0.1))
            line(start, 0, state.size, 0);
            rotate(angle);
          }
          rotate(-angle)

        }
        for (let j = 1; j <= g + 1; j++) {

          for (let i = 0; i <= n / g; i++) {
            strokeWeight(0.2 + (i * 0.1))
            line(start / 4, 0, state.size / 4, 0);
            rotate(angle);
          }
          rotate(-angle)

        }
        for (let j = 1; j <= g + 1; j++) {

          for (let i = 0; i <= n / g; i++) {
            strokeWeight(0.2 + (i * 0.1))
            line(start / 3, 0, state.size / 3, 0);
            rotate(angle);
          }
          rotate(-angle)

        }
        for (let j = 1; j <= g + 1; j++) {

          for (let i = 0; i <= n / g; i++) {
            strokeWeight(0.4 + (hash[i]))
            line(start / 2, 0, state.size * .8, 0);
            rotate(angle);
          }
          rotate(-angle)

        }

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

const expoRings = (state) => {

  return {
    name: "Expo Rings",
    state,
    render: () => {
      noFill();
      stroke(state.layerColor);
      push();
      if (state.textNormalized) {
        const hash = state.textNormalized
        let n = state.textNormalized.length
        for (let i = 0; i < n + 1; i++) {
          let d = state.size * hash[i]
          strokeWeight(hash[i] + 0.3)
          ellipse(0, 0, d, d);
        }
        for (let i = 0; i < n + 1; i++) {
          let d = state.size * (1 - hash[i])
          strokeWeight(hash[i] + 0.9)
          ellipse(0, 0, d, d);
        }
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
  state.weight = state.mu ? state.thinStroke * 0.85 * 0.85 * 0.85 * 0.85 : state.thickStroke * 0.85 * 0.85 * 0.85;

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
