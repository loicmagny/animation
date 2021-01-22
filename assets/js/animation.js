// Initialisation des variables
let zeParent = document.querySelector("#animProjection"); // le conteneur de l'animation
let isPlaying = false // booléen - indique si l'animation (et la musique) sont jouées
let music = new Audio('assets/mp3/potsu-letting-go.wav') // objet HTMLAudioElement (cf. MDN)

// Les shapes...
let circleA = new mojs.Shape({
  parent: zeParent,
  shape:        'circle',
  fill:           {'white':'transparent'},
  strokeWidth: {0 : 2},
  stroke: 'white',
  scale:         { 0 : 5 },

  duration:      15000,
  delay:         1000,
  easing:        'cubic.out',
});
var circleB = new mojs.Shape({
  shape:        'circle',
  fill:           {'white':'transparent'},
  strokeWidth: {0 : 2},
  stroke: 'white',
  scale:         {0 : 3.5},
  duration: 12000,
  delay: 100,
  easing: 'cubic.in',
  angle: {
      0: 90
  },
  strokeDashoffset: {
      '-100%': '100%'
  },
});
var squareB = new mojs.Shape({
  shape:        'rect',
  fill:           {'white':'transparent'},
  strokeWidth: {0 : 2},
  stroke: 'white',
  scale:         {0 : 3.5},
  duration: 12000,
  delay: 100,
  easing: 'cubic.in',
  angle: {
      0: 45
  },
  strokeDashoffset: {
      '-100%': '100%'
  },
});
var squareC = new mojs.Shape({
  shape:        'rect',
  fill:           {'white':'transparent'},
  strokeWidth: {0 : 2},
  stroke: 'white',
  scale:         {0 : 3.5},
  duration: 12000,
  delay: 100,
  easing: 'cubic.in',
  angle: {
      0: 75
  },
  strokeDashoffset: {
      '-100%': '100%'
  },
});
  
var squareD = new mojs.Shape({
  shape:        'rect',
  fill:           {'white':'transparent'},
  strokeWidth: {0 : 2},
  stroke: 'white',
  scale:         {0 : 3.5},
  duration: 12000,
  delay: 100,
  easing: 'cubic.in',
  angle: {
      0: 15
  },
  strokeDashoffset: {
      '-100%': '100%'
  },
});
  
  

// La timeline
const timeline = new mojs.Timeline({
    repeat: 999
})
    .add(circleA) // Chaque animation est ajoutée à la timeline
    .add(circleB)
    .add(squareB)
    .add(squareC)
    .add(squareD)


window.addEventListener('load',function(){
    timeline.replay()
})
