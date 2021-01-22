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

const whirlE = mojs.easing.path('M0,3.3S104.4,146.8,104.4,366.8c0,0,10.6-586.5,68.8-76.5,0,0,40.6-359.4,88.8-50,0,0,35.3-194.7,74.7-15.9,0,0,35.9-81.8,63.2,2.4');

const burstA = new mojs.Burst({
    // left: 0, top: 0,
    radius: {
        0: 100
    },
    count: 12,
    children: {
        shape: 'polygon',
        radius: 20,
        angle: {
            360: 0
        },
        fill: {
            '#f70909': '#eddc80'
        },
        duration: 1300
    }
});

const circleA = new mojs.Shape({
    // left: 0, top: 0,
    count: 10,
    stroke: {
        '#e2441d': '#f99931'
    },
    strokeWidth: {
        20: 0
    },
    fill: 'none',
    scale: {
        0: 1.5,
        easing: 'elastic.out'
    },
    radius: {
        0: 60
    },
    duration: 1000,
    opacity: {
        1: 0.2
    }
});

class WhirlA extends mojs.CustomShape {
    getShape() {
        return '<path d="M50.9,17c0.5,0.1,1,0.2,1.5,0.3c0.1,0,0.2,0,0.3,0c0.7,0,1.3-0.5,1.5-1.2c0.2-0.8-0.3-1.6-1.1-1.8c-0.5-0.1-1-0.2-1.6-0.3    c-0.8-0.2-1.6,0.4-1.8,1.2C49.5,16,50,16.8,50.9,17z"></path><path d="M57.1,18.7c15.5,5.9,19.7,20.1,19.7,27.6c0,9.7-7.5,24.2-23.4,24.2c-7.1,0-13-3.7-15.8-9.9c-2.3-5.2-1.9-11,1.2-14.4    c0.5-0.6,0.5-1.6-0.1-2.1c-0.6-0.5-1.6-0.5-2.1,0.1c-3.9,4.4-4.5,11.3-1.7,17.6c3.3,7.3,10.2,11.6,18.5,11.6    c18,0,26.4-16.2,26.4-27.2c0-11.1-6.7-24.8-21.6-30.4c-0.8-0.3-1.6,0.1-1.9,0.9C55.9,17.5,56.3,18.4,57.1,18.7z"></path><path d="M84.8,49.7C84,49.5,83.2,50,83,50.9c-0.1,0.5-0.2,1-0.3,1.5c-0.2,0.8,0.3,1.6,1.1,1.8c0.1,0,0.2,0,0.3,0    c0.7,0,1.3-0.5,1.5-1.2c0.1-0.5,0.2-1,0.3-1.6C86.1,50.6,85.6,49.8,84.8,49.7z"></path><path d="M83.2,56.2c-0.8-0.3-1.6,0.1-1.9,0.9c-5.9,15.5-20.1,19.7-27.6,19.7c-9.7,0-24.2-7.5-24.2-23.4c0-7.1,3.7-13,9.9-15.8    c5.2-2.3,11-1.9,14.4,1.2c0.6,0.5,1.6,0.5,2.1-0.1c0.5-0.6,0.5-1.6-0.1-2.1c-4.4-3.9-11.3-4.5-17.6-1.7    C30.9,38.1,26.5,45,26.5,53.3c0,18,16.2,26.4,27.2,26.4c11.1,0,24.8-6.7,30.4-21.6C84.4,57.3,84,56.5,83.2,56.2z"></path><path d="M49.1,83c-0.5-0.1-1-0.2-1.5-0.3c-0.8-0.2-1.6,0.3-1.8,1.1c-0.2,0.8,0.3,1.6,1.1,1.8c0.5,0.1,1,0.2,1.6,0.3    c0.1,0,0.2,0,0.3,0c0.7,0,1.3-0.5,1.5-1.2C50.5,84,50,83.2,49.1,83z"></path><path d="M42.9,81.3c-15.5-5.9-19.7-20.1-19.7-27.6c0-9.7,7.5-24.2,23.4-24.2c7.1,0,13,3.7,15.8,9.9c2.3,5.2,1.9,11-1.2,14.4    c-0.5,0.6-0.5,1.6,0.1,2.1c0.6,0.5,1.6,0.5,2.1-0.1c3.9-4.4,4.5-11.3,1.7-17.6C61.9,30.9,55,26.5,46.7,26.5    c-18,0-26.4,16.2-26.4,27.2c0,11.1,6.7,24.8,21.6,30.4c0.2,0.1,0.4,0.1,0.5,0.1c0.6,0,1.2-0.4,1.4-1    C44.1,82.5,43.7,81.6,42.9,81.3z"></path><path d="M16.2,45.9c-0.8-0.2-1.6,0.3-1.8,1.1c-0.1,0.5-0.2,1-0.3,1.6c-0.2,0.8,0.4,1.6,1.2,1.8c0.1,0,0.2,0,0.3,0    c0.7,0,1.3-0.5,1.5-1.2c0.1-0.5,0.2-1,0.3-1.5C17.5,46.9,17,46.1,16.2,45.9z"></path><path d="M46.3,23.3c9.7,0,24.2,7.5,24.2,23.4c0,7.1-3.7,13-9.9,15.8c-5.2,2.3-11,1.9-14.4-1.2c-0.6-0.5-1.6-0.5-2.1,0.1    c-0.5,0.6-0.5,1.6,0.1,2.1c2.6,2.3,6,3.4,9.7,3.4c2.6,0,5.3-0.6,7.9-1.8c7.3-3.3,11.6-10.2,11.6-18.5c0-18-16.2-26.4-27.2-26.4    c-11.1,0-24.8,6.7-30.4,21.6c-0.3,0.8,0.1,1.6,0.9,1.9c0.8,0.3,1.6-0.1,1.9-0.9C24.6,27.4,38.8,23.3,46.3,23.3z"></path>';
    }
}
mojs.addShape('whirl', WhirlA);

const whirlB = new mojs.Shape({
    // left: 0, top: 0,
    shape: 'whirl',
    angle: {
        "-800": 0
    },
    fill: {
        '#e2441d': 'yellow'
    },
    scale: {
        0: 1
    },
    easing: whirlE,
    duration: 1300,
    opacity: {
        0: 1
    },
    radius: 60
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
    .add(burstA, circleA, whirlB);

window.addEventListener('load', function () {


    let coords = {
        x: 'rand(-300,300)',
        y: 'rand(-300,300)'
    }
    setInterval(function () {
        coords = {
            x: 'rand(-300,300)',
            y: 'rand(-300,300)'
        }
        burstA.tune(coords);
        circleA.tune(coords);
        whirlA.tune(coords);
        timeline.replay()
    }, 1000)
    circleA1.tune(coords);
    circleB1.tune(coords);
    circleC1.tune(coords);
    circleD1.tune(coords);
    circleE1.tune(coords);
    // circleG.tune(coords);
    circleH1.tune(coords);
    circleI1.tune(coords);
    circleJ1.tune(coords);
    circleK1.tune(coords);
    circleL1.tune(coords);
    circleM1.tune(coords);

});

anime({
    targets: '.staggering-axis-grid-demo .el',
    translateX: anime.stagger(10, {
        grid: [14, 5],
        from: 'center',
        axis: 'x'
    }),
    translateY: anime.stagger(10, {
        grid: [14, 5],
        from: 'center',
        axis: 'y'
    }),
    rotateZ: anime.stagger([0, 90], {
        grid: [14, 5],
        from: 'center',
        axis: 'x'
    }),
    delay: anime.stagger(200, {
        grid: [14, 5],
        from: 'center'
    }),
    easing: 'easeInOutQuad'
});
