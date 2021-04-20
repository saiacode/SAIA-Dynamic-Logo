const hexagon = (posX, posY, radius) => {
  const rotAngle = 360 / 6;
  beginShape();
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle);
    vertex(thisVertex.x, thisVertex.y);
  }
  endShape(CLOSE);
};

const pointOnCircle = (posX, posY, radius, angle) => {
  const x = posX + radius * cos(angle);
  const y = posY + radius * sin(angle);
  return createVector(x, y);
};

const randomSelectTwo = () => {
  const rando = random(1);
  return rando > 1 ? true : false;
};

const getRandomFromPalette = () => {
  const index = floor(random(0, PALETTE.length));
  return PALETTE[index];
};

const testLines = (state) => {
  state.numShapes = state.omega ? state.sides : state.sides * 2;
  state.angle = 360 / state.numShapes;

  return {
    name: "testLines",
    state,
    render: () => {
      stroke(state.layerColor);
      noFill();
      strokeWeight(state.thickStroke);
      push();
      // translate(width / 2, height / 2) //**
      if (state.lines) {
        for (let i = 0; i < 360 - 0.1; i += state.angle) {
          line(0, 0, 0, CRYSTAL_SIZE / 2);
          rotate(state.angle);
        }
      }
      if (state.circle) {
        ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
      }
      pop();
    },
  };
};

const myTriangle = (center, radius, direction) => {
  if (direction) {
    beginShape();
    vertex(center + radius * cos(0), radius * sin(0));
    vertex(center + radius * cos(120), radius * sin(120));
    vertex(center + radius * cos(240), radius * sin(240));
    endShape(CLOSE);
  } else {
    beginShape();
    vertex(center + radius * cos(180), radius * sin(180));
    vertex(center + radius * cos(300), radius * sin(300));
    vertex(center + radius * cos(60), radius * sin(60));
    endShape(CLOSE);
  }
};

const layerConstructors = [
  {
    name: "Concentric Vertex Donuts",
    init: (props) =>
      concentricVertexDonuts({
        ...props,
        ...setState(state),
      }),
    group: 0,
  },
  {
    name: "Concentric Arcs",
    init: (props) =>
      concentricArcs({
        ...props,
        ...setState(state),
      }),
    group: 1,
  },
  {
    name: "Gradient Lines",
    init: (props) =>
      gradientLines({
        ...props,
        ...setState(state),
      }),
    group: 2,
  },
  {
    name: "Expo Rings",
    init: (props) =>
      expoRings({
        ...props,
        ...setState(state),
      }),
    group: 3,
  },
  {
    name: "Hexa Ring",
    init: (props) =>
      hexaRing({
        ...props,
        ...setState(state),
      }),
    group: 4,
  },

  {
    name: "Rotated Polygons",
    init: (props) =>
      rotatedPolygons({
        ...props,
        ...setState(state),
      }),
    group: 5,
  },


  {
    name: "Simple Lines",
    init: (props) =>
      simpleLines({
        ...props,
        ...setState(state),
      }),
    group: 6,
  },
  {
    name: "Dotted Lines",
    init: (props) =>
      dottedLines({
        ...props,
        ...setState(state),
      }),
    group: 7,
  },
  {
    name: "Ring of Shapes",
    init: (props) =>
      ringOfShapes({
        ...props,
        ...setState(state),
      }),
    group: 6,
  },
  {
    name: "Stepped Hexagons",
    init: (props) =>
      steppedHexagons({
        ...props,
        ...setState(state),
      }),
    group: 7,
  },
  {
    name: "Test Lines",
    init: (props) =>
      testLines({
        lines: false,
        circle: false,
        ...props,
        ...setState(state),
      }),
    group: 8,
  },
];

const makeCrystal = (pos) => {
  const layers = layerConstructors.map((lcon) => {
    const draw = state.group == lcon.group;
    return lcon.init({
      pos,
      draw,
    });
  });
  return layers;
};

const drawCrystal = (crystal) => {
  crystal.forEach((layer) => {
    if (layer.state.draw) {
      push();
      translate(layer.state.pos.x, layer.state.pos.y);
      layer.render();
      pop();
    }
  });
};

function canDivide(dividend, divisor) {
  return (dividend % divisor) === 0 ? 1 : 0;
}
