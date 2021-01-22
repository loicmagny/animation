// Initialisation des variables
let zeParent = document.querySelector("#animProjection"); // le conteneur de l'animation
let isPlaying = false // booléen - indique si l'animation (et la musique) sont jouées
let music = new Audio('assets/mp3/potsu-letting-go.wav') // objet HTMLAudioElement (cf. MDN)

// Les shapes...                


const burst = new mojs.Burst({
    radius:   { 25 : 75 },
    count:    30,
    left:'35%' ,
    duration: 4000,
    onComplete () {
      console.log( 'completed' );
    },
    children: {
      // property map - maps over children with mod function
      shape: [ 'rect', 'polygon', 'circle' ],
      // property map - maps over children with mod function
      fill:  [ '#333', 'magenta', 'purple' ],
      angle: { 0: 180 },
      // rand string - generates random value for every child rand( min, max )
      degreeShift: 'rand(-360, 360)',
      // stagger string( start, step ) for every child
      delay: 'stagger(5, 5)',
      repeat: 30000,
      duration: 2000,
     
    }
  }).play();



const CircleA = new mojs.Shape({
    shape:        'circle',
    right:          '40%',
    fill:         'black',
    radius:       50,
    stroke:       { 'rgba(0,255,255, 1)' : 'magenta' },
    strokeWidth:  { 15: 5 },
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : '100%', easing:'cubic.in' },
    angle:        { 0: 360 },
  
    duration:    6000,
    repeat:       30000,
  }).play();

 
  const burst2 = new mojs.Burst({
    radius:   { 25 : 75 },
    count:    30,
    left:'65%' ,
    duration: 4000,
    onComplete () {
      console.log( 'completed' );
    },
    children: {
      // property map - maps over children with mod function
      shape: [ 'rect', 'polygon', 'circle' ],
      // property map - maps over children with mod function
      fill:  [ '#333', 'magenta', 'purple' ],
      angle: { 0: 180 },
      // rand string - generates random value for every child rand( min, max )
      degreeShift: 'rand(-360, 360)',
      // stagger string( start, step ) for every child
      delay: 'stagger(5, 5)',
      repeat: 30000,
      duration: 2000,
     
    }
  }).play();


  const burstCirle = new mojs.Burst({
    radius:   { 70 : 80 },
    count:    50,
    right:'40%' ,
    duration: 4000,
    onComplete () {
      console.log( 'completed' );
    },
    children: {
      // property map - maps over children with mod function
      shape: [ 'rect', 'polygon', 'circle' ],
      // property map - maps over children with mod function
      fill:  [ '#333', 'magenta', 'purple' ],
      angle: { 0: 180 },
      // rand string - generates random value for every child rand( min, max )
      degreeShift: 'rand(-360, 360)',
      // stagger string( start, step ) for every child
      delay: 'stagger(5, 5)',
      repeat: 30000,
      duration: 2000,
     
    }
  }).play();














// La timeline
const timeline = new mojs.Timeline({
    repeat: 999
})
    .add(CircleA) // Chaque animation est ajoutée à la timeline
    .add(burstCirle)
    .add(burst)
    .add(burst2)
    

    
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

