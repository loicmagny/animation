// Initialisation des variables
let zeParent = document.querySelector("#animProjection"); // le conteneur de l'animation
let isPlaying = false // booléen - indique si l'animation (et la musique) sont jouées
let music = new Audio('assets/mp3/potsu-letting-go.wav') // objet HTMLAudioElement (cf. MDN)
let coordsinit = {
  x: 'rand(-700,700)',
  y:'rand(-300,300)',
}
let idinterval;

// Les shapes...
let circleA = new mojs.Shape({
  parent: zeParent,
  ...coordsinit,
  shape: 'circle',
  scale: {
    0: 2
  },
  duration: 1300,
  delay: 700,
  easing: 'cubic.out',
  repeat: 999,
  fill: 'transparent',
  stroke: {
    'yellow': 'red'
  },
});
let circleB = new mojs.Shape({
  ...coordsinit,
  shape: 'circle',
  scale: {
    0: 0.5
  },
  duration: 800,
  delay: 1000,
  easing: 'cubic.out',
  repeat: 999,
  fill: 'transparent',
  stroke: {
    'yellow': 'red'
  },
});
let circleC = new mojs.Shape({
  ...coordsinit,
  shape: 'circle',
  scale: {
    0: 1.5
  },
  duration: 600,
  delay: 600,
  easing: 'cubic.out',
  repeat: 999,
  fill: 'transparent',
  stroke: {
    'yellow': 'red'
  },
});
let circleD = new mojs.Shape({
  ...coordsinit,
  shape: 'circle',
  scale: {
    0: 2
  },
  duration: 1000,
  delay: 1000,
  easing: 'cubic.out',
  repeat: 999,
  fill: 'transparent',
  stroke: {
    'yellow': 'red'
  },
});
let circleE = new mojs.Shape({
  ...coordsinit,
  shape: 'circle',
  scale: {
    0: 0.2
  },
  duration: 600,
  delay: 600,
  easing: 'cubic.out',
  repeat: 999,
  fill: 'transparent',
  stroke: {
    'yellow': 'red'
  },
});

let circleF = new mojs.Burst({
  radius: {
    0: 100
  },
  count: 1500,
  children: {
    shape: 'polygon',
    points: 10,
    radius: 10,
    fill: {
      'yellow': 'red'
    },
    angle: {
      360: 0
    },
    duration: 2000,
    delay: 'stagger( rand(0, 200) )'
  },

});
// let circleG = new mojs.Burst({

// });
let circleH = new mojs.Shape({
  ...coordsinit,
  shape: 'circle',
  scale: {
    0: 2
  },
  duration: 900,
  delay: 900,
  easing: 'cubic.out',
  repeat: 999,
  fill: 'transparent',
  stroke: {
    'yellow': 'red'
  },
});
let circleI = new mojs.Shape({
  ...coordsinit,
  shape: 'circle',
  scale: {
    0: 0.5
  },
  duration: 1000,
  delay: 1000,
  easing: 'cubic.out',
  repeat: 999,
  fill: 'transparent',
  stroke: {
    'yellow': 'red'
  },
});
let circleJ = new mojs.Shape({
  ...coordsinit,
  shape: 'circle',
  scale: {
    0: 0.5
  },
  duration: 1000,
  delay: 1000,
  easing: 'cubic.out',
  repeat: 999,
  fill: 'transparent',
  stroke: {
    'yellow': 'red'
  },
});
let circleK = new mojs.Shape({
  ...coordsinit,
  shape: 'circle',
  scale: {
    0: 0.5
  },
  duration: 1000,
  delay: 1000,
  easing: 'cubic.out',
  repeat: 999,
  fill: 'transparent',
  stroke: {
    'yellow': 'red'
  },
});
let circleL = new mojs.Shape({
  ...coordsinit,
  shape: 'circle',
  scale: {
    0: 0.5
  },
  duration: 1000,
  delay: 1000,
  easing: 'cubic.out',
  repeat: 999,
  fill: 'transparent',
  stroke: {
    'yellow': 'red'
  },
});
let circleM = new mojs.Shape({
  ...coordsinit,
  shape: 'circle',
  scale: {
    0: 0.5
  },
  duration: 1000,
  delay: 1000,
  easing: 'cubic.out',
  repeat: 999,
  fill: 'transparent',
  stroke: {
    'yellow': 'red'
  },
});


// La timeline
const timeline = new mojs.Timeline({
    repeat: 999,
  })
  .add(circleA) // Chaque animation est ajoutée à la timeline
  .add(circleB)
  .add(circleC)
  .add(circleD)
  .add(circleE)
  .add(circleF)
  // .add(circleG)
  .add(circleH)
  .add(circleI)
  .add(circleK)
  .add(circleL)
  .add(circleM)

document.querySelector("#animProjection").addEventListener("click", function () {

  if (isPlaying != true) {
    music.play()
    idinterval = setInterval(function () {
      coords = {
        x: 'rand(-500,500)',
        y: 'rand(-300,300)'
      }
      circleA.tune(coords);
      circleB.tune(coords);
      circleC.tune(coords);
      circleD.tune(coords);
      circleE.tune(coords);
      // circleG.tune(coords);
      circleH.tune(coords);
      circleI.tune(coords);
      circleJ.tune(coords);
      circleK.tune(coords);
      circleL.tune(coords);
      circleM.tune(coords);
      timeline.replay()
    }, 2300);
    timeline.play()
    isPlaying = true
} else {
    music.pause()
    timeline.pause()
    clearInterval(idinterval)
    isPlaying = false
}

});