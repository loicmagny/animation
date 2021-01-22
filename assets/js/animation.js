// Initialisation des letiables
let zeParent = document.querySelector("#animProjection"); // le conteneur de l'animation
let isPlaying = true // booléen - indique si l'animation (et la musique) sont jouées
let music = new Howl({
    src: ['assets/mp3/potsu-letting-go.wav'],
    autoplay: false,
    loop: true,
    volume: 0.5,
});


let petal1 = new mojs.Shape({
    parent: zeParent,
    Shape: 'circle',
    radiusX: 2.5,
    radiusY: 11.80,
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

const burst = new mojs.Burst({
    radius: 100,
    scale: {
        0: 4.5
    },
    delay: 5000,
    count: 10,
    children: {
        shape: 'polygon',
        points: 5,
        fill: {
            'red': 'yellow'
        },
        angle: {
            360: 0
        },
        duration: 3000,
        delay: 5000
    }
});

const burst1 = new mojs.Burst({
    radius: {
        0: 100
    },
    count: 10,
    children: {
        shape: 'polygon',
        points: 5,
        fill: {
            'cyan': 'red'
        },
        angle: {
            360: 0
        },
        duration: 1000,
        delay: 'stagger(0, 1000)'
    }
});

const burst4 = new mojs.Burst({
    top: '25%',
    radius: {
        0: 100
    },
    count: 10,
    children: {
        shape: 'polygon',
        points: 5,
        fill: {
            'cyan': 'red'
        },
        angle: {
            360: 0
        },
        duration: 1000,
        delay: 'stagger(0, 100)'
    }
});

const burst5 = new mojs.Burst({
    top: '75%',
    radius: {
        0: 100
    },
    count: 10,
    children: {
        shape: 'polygon',
        points: 5,
        fill: {
            'cyan': 'red'
        },
        angle: {
            360: 0
        },
        duration: 1000,
        delay: 'stagger(0, 100)'
    }
});

const burst2 = new mojs.Burst({
    radius: {
        0: 100
    },
    count: 10,
    left: '65%',
    children: {
        shape: 'polygon',
        points: 5,
        fill: {
            'cyan': 'yellow'
        },
        angle: {
            360: 0
        },
        duration: 1000,
        delay: 'stagger(0, 100)'
    }
});

const burst3 = new mojs.Burst({
    left: '35%',
    radius: {
        0: 100
    },
    count: 10,
    children: {
        shape: 'polygon',
        points: 5,
        fill: {
            'purple': 'yellow'
        },
        angle: {
            360: 0
        },
        duration: 1000,
        delay: 'stagger(0, 100)'
    }
});

let circleA = new mojs.Shape({
    parent: zeParent,
    shape: 'circle',
    fill: {
        'white': 'transparent'
    },
    strokeWidth: {
        0: 2
    },
    stroke: 'white',
    scale: {
        0: 5
    },

    duration: 15000,
    delay: 1000,
    easing: 'cubic.out',
});
let circleB = new mojs.Shape({
    shape: 'circle',
    fill: {
        'white': 'transparent'
    },
    strokeWidth: {
        0: 2
    },
    stroke: 'white',
    scale: {
        0: 3.5
    },
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
let squareB = new mojs.Shape({
    shape: 'rect',
    fill: {
        'white': 'transparent'
    },
    strokeWidth: {
        0: 2
    },
    stroke: 'white',
    scale: {
        0: 3.5
    },
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
let squareC = new mojs.Shape({
    shape: 'rect',
    fill: {
        'white': 'transparent'
    },
    strokeWidth: {
        0: 2
    },
    stroke: 'white',
    scale: {
        0: 3.5
    },
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

let squareD = new mojs.Shape({
    shape: 'rect',
    fill: {
        'white': 'transparent'
    },
    strokeWidth: {
        0: 2
    },
    stroke: 'white',
    scale: {
        0: 3.5
    },
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
const CircleA = new mojs.Shape({
    shape: 'circle',
    right: '40%',
    fill: 'black',
    radius: 50,
    stroke: {
        'rgba(0,255,255, 1)': 'magenta'
    },
    strokeWidth: {
        15: 5
    },
    strokeDasharray: '100%',
    strokeDashoffset: {
        '-100%': '100%',
        easing: 'circ.in'
    },
    angle: {
        0: 360
    },

    duration: 6000,
    repeat: 999,
}).play();


const CircleB = new mojs.Shape({
    shape: 'rect',
    left: '70%',
    fill: 'black',
    radius: 50,
    stroke: {
        'rgba(0,255,255, 1)': 'magenta'
    },
    strokeWidth: {
        15: 5
    },
    strokeDasharray: '100%',
    strokeDashoffset: {
        '-100%': '100%'
    },
    angle: {
        0: 360
    },

    duration: 6000,
    repeat: 999,
}).play();


const CircleC = new mojs.Shape({
    shape: 'rect',
    left: '60%',
    fill: 'black',
    radius: 50,
    stroke: {
        'red': 'blue'
    },
    strokeWidth: {
        15: 5
    },
    strokeDasharray: '15%',
    strokeDashoffset: {
        '-100%': '100%'
    },
    angle: {
        0: 360
    },

    duration: 6000,
    repeat: 999,
}).play();

// La timeline
const timeline = new mojs.Timeline({
        repeat: 999
    })
    .add(petal2)
    .add(petal3)
    .add(petal4)
    .add(petal5)
    .add(petal6)
    .add(circleA)
    .add(circleB)
    .add(squareB)
    .add(squareC)
    .add(squareD)
    .add(burst, burst1, burst2, burst3, burst4, burst5)
    .add(circleA)
    .add(circleB)
    .add(squareB)
    .add(squareC)
    .add(squareD)
    .add(CircleA)
    .add(CircleB)
    .add(CircleC)

window.addEventListener('load', function () {

    timeline.replay()

});