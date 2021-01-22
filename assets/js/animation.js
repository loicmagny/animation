// Initialisation des variables
let zeParent = document.querySelector("#animProjection"); // le conteneur de l'animation
let isPlaying = false // booléen - indique si l'animation (et la musique) sont jouées
let music = new Audio('assets/mp3/potsu-letting-go.wav') // objet HTMLAudioElement (cf. MDN)

// Les shapes...
const CircleA = new mojs.Shape({
    shape:        'circle',
    right:          '40%',
    fill:         'black',
    radius:       50,
    stroke:       { 'rgba(0,255,255, 1)' : 'magenta' },
    strokeWidth:  { 15: 5 },
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : '100%', easing:'circ.in' },
    angle:        { 0: 360 },
  
    duration:    6000,
    repeat:       999,
  }).play();


  const CircleB = new mojs.Shape({
    shape:        'rect',
    left:         '70%',
    fill:         'black',
    radius:       50,
    stroke:       { 'rgba(0,255,255, 1)' : 'magenta' },
    strokeWidth:  { 15: 5 },
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : '100%' },
    angle:        { 0: 360 },
  
    duration:     6000,
    repeat:       999,
  }).play();


  const CircleC = new mojs.Shape({
    shape:        'rect',
    left:         '60%',
    fill:         'black',
    radius:       50,
    stroke:       { 'red' : 'blue' },
    strokeWidth:  { 15: 5 },
    strokeDasharray: '15%',
    strokeDashoffset: { '-100%' : '100%' },
    angle:        { 0: 360 },
  
    duration:     6000,
    repeat:       999,
  }).play();


















// La timeline
const timeline = new mojs.Timeline({
    repeat: 999
})
    .add(CircleA) // Chaque animation est ajoutée à la timeline
    .add(CircleB)
    .add(CircleC)
document.querySelector("#animProjection").addEventListener("click", function () {

    if (isPlaying != true) {
        music.play()
        timeline.play()
        isPlaying = true
    } else {
        music.pause()
        timeline.pause()
        isPlaying = false
    }

});

