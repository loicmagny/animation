// Initialisation des variables
let zeParent = document.querySelector("#animProjection"); // le conteneur de l'animation
let isPlaying = false // booléen - indique si l'animation (et la musique) sont jouées
var sound = new Howl({
    src: ['assets/mp3/potsu-letting-go.wav'],
    autoplay: false,
    loop: true,
    volume: 0.5,
  });

  window.onload = function() {
    document.getElementById('display-4').color = 'blue';
};
// Les shapes...
const burst = new mojs.Burst({
  radius:    100,
  scale: {0 : 4.5},
  delay: 5000,
  count:    10,
  children: {
    shape:      'polygon',
    points:     5,
    fill:       { 'red' : 'yellow' },
    angle:      { 360: 0 },
    duration:   3000,
    delay:      5000
  }
});

const burst1 = new mojs.Burst({
  radius:   { 0: 100 },
  count:    10,
  children: {
    shape:      'polygon',
    points:     5,
    fill:       { 'cyan' : 'red' },
    angle:      { 360: 0 },
    duration:   1000,
    delay:      'stagger(0, 1000)'
  }
});

const burst4 = new mojs.Burst({
  top: '25%',
  radius:   { 0: 100 },
  count:    10,
  children: {
    shape:      'polygon',
    points:     5,
    fill:       { 'cyan' : 'red' },
    angle:      { 360: 0 },
    duration:   1000,
    delay:      'stagger(0, 100)'
  }
});

const burst5 = new mojs.Burst({
  top: '75%',
  radius:   { 0: 100 },
  count:    10,
  children: {
    shape:      'polygon',
    points:     5,
    fill:       { 'cyan' : 'red' },
    angle:      { 360: 0 },
    duration:   1000,
    delay:      'stagger(0, 100)'
  }
});

const burst2= new mojs.Burst({
  radius:   { 0: 100 },
  count:    10,
  left: '65%',
  children: {
    shape:      'polygon',
    points:     5,
    fill:       { 'cyan' : 'yellow' },
    angle:      { 360: 0 },
    duration:   1000,
    delay:      'stagger(0, 100)'
  }
});

const burst3 = new mojs.Burst({
  left: '35%',
  radius:   { 0: 100 },
  count:    10,
  children: {
    shape:      'polygon',
    points:     5,
    fill:       { 'purple' : 'yellow' },
    angle:      { 360: 0 },
    duration:   1000,
    delay:      'stagger(0, 100)'
  }
});


// La timeline
const timeline = new mojs.Timeline({
    repeat: 999
})
    .add(burst, burst1, burst2, burst3, burst4, burst5, burst6  ) // Chaque animation est ajoutée à la timeline

document.querySelector("#animProjection").addEventListener("click", function () {

    if (isPlaying != true) {
        sound.play()
        timeline.play()
        isPlaying = true
    } else {
        sound.pause()
        timeline.pause()
        isPlaying = false
    }

});

