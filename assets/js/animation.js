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
        0: 12
    },
    duration: 1000,
    delay: 12000,
    easing: 'cubic.in',

})
let petal2 = new mojs.Shape({
    parent: zeParent,
    Shape: 'circle',
    radiusX: 2.5,
    radiusY: 12.79,
    scale: {
        0: 12
    },
    duration: 1000,
    delay: 12000,
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
        0: 12
    },
    duration: 1000,
    delay: 12000,
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
        0: 12
    },
    angle: {
        0: 180
    },
    duration: 1000,
    delay: 12000,
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
        0: 12
    },
    angle: {
        0: 45
    },
    duration: 1000,
    delay: 12000,
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
        0: 12
    },
    angle: {
        0: 130
    },
    duration: 1000,
    delay: 12000,
    easing: 'cubic.in',
    strokeDashoffset: {
        '-100%': '100%'
    },
})

const burst = new mojs.Burst({
    radius: {
        25: 75
    },
    count: 30,
    left: '35%',
    duration: 4000,
    onComplete() {
        console.log('completed');
    },
    children: {
        // property map - maps over children with mod function
        shape: ['rect', 'polygon', 'circle'],
        // property map - maps over children with mod function
        fill: ['#333', 'magenta', 'purple'],
        angle: {
            0: 180
        },
        // rand string - generates random value for every child rand( min, max )
        degreeShift: 'rand(-360, 360)',
        // stagger string( start, step ) for every child
        delay: 'stagger(5, 5)',
        repeat: 30000,
        duration: 2000,

    }
}).play();

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
        25: 75
    },
    count: 30,
    left: '65%',
    duration: 4000,
    onComplete() {
        console.log('completed');
    },
    children: {
        // property map - maps over children with mod function
        shape: ['rect', 'polygon', 'circle'],
        // property map - maps over children with mod function
        fill: ['#333', 'magenta', 'purple'],
        angle: {
            0: 180
        },
        // rand string - generates random value for every child rand( min, max )
        degreeShift: 'rand(-360, 360)',
        // stagger string( start, step ) for every child
        delay: 'stagger(5, 5)',
        repeat: 30000,
        duration: 2000,

    }
}).play();

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
        easing: 'cubic.in'
    },
    angle: {
        0: 360
    },

    duration: 6000,
    repeat: 30000,
}).play();
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
const swirlright = new mojs.ShapeSwirl({
    y: {
        0: -150
    },
    radius: 8,
    degreeShift: 90,
    duration: 595,

    fill: {
        'orange': 'blue'
    },
});
const swirltop = new mojs.ShapeSwirl({

    x: {
        0: -100
    },
    y: {
        0: -200
    },
    radius: 8,
    pathScale: .5,
    duration: 595,

    fill: {
        'purple': 'grey'
    },
});
const swirltopright = new mojs.ShapeSwirl({

    y: {
        0: 100
    },
    radius: 8,
    pathScale: .5,
    duration: 595,

    fill: {
        'green': 'grey'
    },
});
const swirlleft = new mojs.ShapeSwirl({
    y: {
        0: 500
    },
    radius: 8,
    pathScale: .5,
    duration: 595,

    fill: {
        'blue': 'red'
    },
});
const swirlleftbot = new mojs.ShapeSwirl({
    y: {
        0: -450
    },
    radius: 8,
    pathScale: .5,
    duration: 595,

    fill: {
        'cyan': 'purple'
    },
});
const swirltopleft = new mojs.ShapeSwirl({
    y: {
        0: 500
    },
    x: {
        0: 400
    },
    radius: 8,
    pathScale: .5,
    duration: 595,

    fill: {
        'red': 'green'
    },
});
const swirlbotright = new mojs.ShapeSwirl({
    y: {
        0: 500
    },
    x: {
        0: -400
    },
    radius: 8,
    pathScale: .5,
    duration: 595,

    fill: {
        'cyan': 'magenta'
    },
});
const swirlleftleft = new mojs.ShapeSwirl({
    x: {
        0: -400
    },
    radius: 8,
    pathScale: .5,
    duration: 595,

    fill: {
        'orange': 'grey'
    },
});
const swirlrightright = new mojs.ShapeSwirl({
    x: {
        0: 271
    },
    radius: 8,
    pathScale: .5,
    duration: 595,
    fill: {
        'cyan': 'purple'
    },
});

let coordsinit = {
    x: 'rand(-700,700)',
    y: 'rand(-300,300)',
}
let idinterval;

// Les shapes...
let circleA1 = new mojs.Shape({
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
let circleB1 = new mojs.Shape({
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
let circleC1 = new mojs.Shape({
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
let circleD1 = new mojs.Shape({
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
let circleE1 = new mojs.Shape({
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

let circleF1 = new mojs.Burst({
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
let circleH1 = new mojs.Shape({
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
let circleI1 = new mojs.Shape({
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
let circleJ1 = new mojs.Shape({
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
let circleK1 = new mojs.Shape({
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
let circleL1 = new mojs.Shape({
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
let circleM1 = new mojs.Shape({
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
        repeat: 999
    })
    .add(petal2)
    .add(petal3)
    .add(petal4)
    .add(petal5)
    .add(petal6)
    .add(circleB)
    .add(squareB)
    .add(squareC)
    .add(squareD)
    .add(burst, burst1, burst2, burst3, burst4, burst5)
    .add(CircleA)
    .add(circleB)
    .add(squareB)
    .add(squareC)
    .add(squareD)
    .add(swirlright)
    .add(swirltop)
    .add(swirltopright)
    .add(swirlleft)
    .add(swirlleftbot)
    .add(swirltopleft)
    .add(swirlbotright)
    .add(swirlleftleft)
    .add(swirlrightright)

    .add(circleA1) // Chaque animation est ajoutée à la timeline
    .add(circleB1)
    .add(circleC1)
    .add(circleD1)
    .add(circleE1)
    .add(circleF1)
    // .add(circleG)
    .add(circleH1)
    .add(circleI1)
    .add(circleK1)
    .add(circleL1)
    .add(circleM1)

window.addEventListener('load', function () {

    timeline.replay()
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

});