// Initialisation des variables
let zeParent = document.querySelector("#animProjection"); // le conteneur de l'animation
let isPlaying = false // booléen - indique si l'animation (et la musique) sont jouées
let music = new Audio('assets/mp3/music.mp3') // objet HTMLAudioElement (cf. MDN)

let circle = new mojs.Shape({
    parent: zeParent,
    Shape: 'circle',
    fill: 'transparent',
    stroke: '#FF6800',
    strokeWidth: 4.25,
    scale: {
        0: 1
    },
    duration: 1000,
    delay: 1000,
    scale: {
        0: 4.24,
        easing: 'cubic.in'
    },
    angle: {
        0: 135
    },
})
let petal1 = new mojs.Shape({
    parent: zeParent,
    Shape: 'circle',
    radiusX: 2.5,
    radiusY: 11.80,
    left: 427,
    top: 131,
    fill: '#00FDFF',
    scale: {
        0: 8
    },
    duration: 1000,
    delay: 1500,
    easing: 'cubic.in',

})
let petal2 = new mojs.Shape({
    parent: zeParent,
    Shape: 'circle',
    radiusX: 2.5,
    radiusY: 12.79,
    left: 326,
    top: 230,
    scale: {
        0: 8
    },
    duration: 1000,
    delay: 1500,
    easing: 'cubic.in',

    angle: {
        0: 90
    },
    strokeDashoffset: {
        '100%': '-100%'
    },
})
let petal3 = new mojs.Shape({
    parent: zeParent,
    Shape: 'circle',
    fill: '#FF6800',
    radiusX: 2.5,
    radiusY: 12.79,
    left: 528,
    top: 230,
    scale: {
        0: 8
    },
    duration: 1000,
    delay: 1500,
    easing: 'cubic.in',

    angle: {
        0: 90
    },
    strokeDashoffset: {
        '-100%': '100%'
    },
})
let petal4 = new mojs.Shape({
    parent: zeParent,
    Shape: 'circle',
    fill: 'blue',
    radiusX: 2.5,
    radiusY: 12.79,
    left: 427,
    top: 340,
    scale: {
        0: 8
    },
    duration: 1000,
    delay: 1500,
    easing: 'cubic.in',
    strokeDashoffset: {
        '-100%': '100%'
    },
})
let petal5 = new mojs.Shape({
    parent: zeParent,
    Shape: 'circle',
    fill: 'yellow',
    radiusX: 2.5,
    radiusY: 12.79,
    left: 350,
    top: 309,
    scale: {
        0: 8
    },
    angle: {
        0: 45
    },
    duration: 1000,
    delay: 1500,
    easing: 'cubic.in',
    strokeDashoffset: {
        '-100%': '100%'
    },
})
let petal6 = new mojs.Shape({
    parent: zeParent,
    Shape: 'circle',
    fill: 'yellow',
    radiusX: 2.5,
    radiusY: 12.79,
    left: 350,
    top: 309,
    scale: {
        0: 8
    },
    angle: {
        0: 270
    },
    duration: 1000,
    delay: 1500,
    easing: 'cubic.in',
    strokeDashoffset: {
        '-100%': '100%'
    },
})


// La timeline
const timeline = new mojs.Timeline({

    })
    .add(circle)
    .add(petal1)
    .add(petal2)
    .add(petal3)
    .add(petal4)
    .add(petal5)
    .add(petal6)

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