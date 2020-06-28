/**
* Sprite Wrapper for a codeplant.seeward lessons
*/
//% weight=100 color=#d2b48c 
//% groups='["Create Seeward", "Seeward Properties", "Seeward Animations"]'
namespace codeplant.seeward {


    let _seeward: Seeward = null
    export let _seeward_still: Image[] = [img`
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . . . . 4 4 4 4 4 4 . . .
        . e e e e e 4 4 4 e e e .
        . e . e e e e e e e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . b e e . .
        . . . e e b . . f f f . .
        . . . f f f . . . . . . .
    `, img`
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . . . . 4 4 4 4 4 4 . . .
        . e e e e e 4 4 4 e e e .
        . e . e e e e e e e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . . . . 4 4 4 4 4 4 . . .
        . e e e e e 4 4 4 e e e .
        . e . e e e e e e e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . . . . 4 4 4 4 4 4 . . .
        . e e e e e 4 4 4 e e e .
        . e . e e e e e e e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `]

    export let _seeward_right: Image[] = [img`
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . . . . 4 4 4 4 4 4 . . .
        . e e e e e 4 4 4 e e e .
        . e . e e e e e e e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . b e e . .
        . . . e e b . . f f f . .
        . . . f f f . . . . . . .
    `, img`
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . . . . 4 4 4 4 4 4 . . .
        . e e e e e 4 4 4 e e e .
        . e . e e e e e e e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . . . . 4 4 4 4 4 4 . . .
        . e e e e e 4 4 4 e e e .
        . e . e e e e e e e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . . . . 4 4 4 4 4 4 . . .
        . e e e e e 4 4 4 e e e .
        . e . e e e e e e e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `]

    export let _seeward_left: Image[] = reflect(_seeward_right);
    /**
     * Creates a new dart from an image and kind
     * @param kind the kind to make the seeward 
     * @param x optional initial x position, eg: 10
     * @param y optional initial y position, eg: 70
     */
    //% blockId=seewardCreate block="sprite of kind %kind=spritekind || at x %x y %y"
    //% expandableArgumentMode=toggle
    //% inlineInputMode=inline
    //% blockSetVariable=seeward
    //% weight=100
    //% group="Create Seeward"
    export function create(kind: number,
        x: number = 10,
        y: number = 70): Seeward {
        _seeward = new Seeward(kind, x, y);
        return _seeward

    }
    //% block
    enum AnimationTypes {
        AttackLeft,
        AttackRight
    }
    
    //% block="Seeward play %a=AnimationTypes Animation"
    //% blockId=PlayAnimation
    //% weight=100
    //% group="Seeward Animations"
    export function playAnimation(a: AnimationTypes) {
        switch(a){
            case AnimationTypes.AttackLeft: 
                _seeward.playAttackLeftAnimation();
                break
            case AnimationTypes.AttackRight: 
                _seeward.animateAttack();
                break
        }
        
    }

    //% blockId=SeewardAttackLeft block="Seeward Attack Left Animation"
    //% weight=100
    //% group="Seeward Animations"
    export function playAttackLeftAnimation() {
        _seeward.playAttackLeftAnimation()
    }
    //% blockId=SeewardAttackRight block="Seeward Attack Right Animation"
    //% weight=100
    //% group="Seeward Animations"
    export function playAttackRightAnimation() {
        _seeward.animateAttack()
    }
    //% blockId=SeewardWalkLeft block="Seeward Walk Left Animation"
    //% weight=100
    //% group="Seeward Animations"
    export function playWalkLeftAnimation() {
        _seeward.playWalkLeftAnimation()
    }
    //% blockId=SeewardWalkRight block="Seeward Walk Right Animation"
    //% weight=100
    //% group="Seeward Animations"
    export function playWalkRightAnimation() {
        _seeward.playWalkRightAnimation()
    }
    //% blockId=SeewardIdle block="Seeward Idle Front Animation"
    //% weight=100
    //% group="Seeward Animations"
    export function playIdleFrontAnimation() {
        _seeward.playIdleRightAnimation()
    }
    //% blockId=SeewardWalkDown block="Seeward Walk Down Animation"
    //% weight=100
    //% group="Seeward Animations"
    export function playWalkDownAnimation() {
        _seeward.playUpDownAnimation()
    }
    //% blockId=SeewardWalkUp block="Seeward Walk Up Animation"
    //% weight=100
    //% group="Seeward Animations"
    export function playWalkUpAnimation() {
        _seeward.playIdleBackAnimation()
    }


    // Round input towards 0; 1.4 becomes 1.0, -0.4 becomes 0.0
    export function roundTowardsZero(input: number): number {
        return Math.floor(input) + input < 0 ? 1 : 0;
    }

    // Normalize input number to 0, 1, or -1
    export function normalize(input: number): number {
        return input ? input / Math.abs(input) : 0;
    }

    // Set the animation for looking right to be the opposite of looking left
    export function reflect(input: Image[]): Image[] {
        let output: Image[] = [];
        for (let i: number = 0; i < input.length; i++) {
            let nextImage = input[i].clone();
            nextImage.flipX();
            output.push(nextImage);
        }
        return output;
    }
}

/**
 * A seeward Platformer
 **/
//% blockNamespace=codeplant.seeward color="#d2b48c" blockGap=8
class Seeward {
    private player: Sprite;
    private stillAnimation: Image[];



    public constructor(kind: number, x: number, y: number) {


        this.stillAnimation = codeplant.seeward._seeward_still;

        this.player = sprites.create(this.stillAnimation[0], kind);
        this.player.setFlag(SpriteFlag.StayInScreen, true);
        // this.player.ay = this.gravity;
        this.player.x = x;
        this.player.y = y;

        this.playIdleRightAnimation();

    }

    /**
     * Get the Seeward's sprite
     */
    //% group="Seeward Properties"
    //% blockId=seewardSprite block="%Seeward(seeward) sprite"
    //% weight=8
    get sprite(): Sprite {
        return this.player;
    }

    playAttackLeftAnimation() {
        return animation.runImageAnimation(
            this.player,
            [img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . 1 . . . . . f f e f e e . . .
                . . . . . . . . . . . . . . 1 b b . . . f e e f e e f e e .
                . . . . . . . . . . . . . . 1 b b . . f e f f f e f e f e e
                . . . . . . . . . . . . . . 1 b b . f e e f e e f e e f e e
                . . . . . . . . . . . . . . 1 b b . e e f f e 4 4 4 e e f e
                . . . . . . . . . . . . . . 1 b b . f f e e 4 4 4 4 4 e e e
                . . . . . . . . . . . . . . 1 1 b . e e 4 4 4 4 4 4 4 4 e .
                . . . . . . . . . . . . . . 1 1 1 . . f f f 4 4 f f f f f .
                . . . . . . . . . . . . . . 1 b 1 . . f 4 e f f e 4 f 4 . .
                . . . . . . . . . 1 1 . . . 1 b b . . f f f 4 4 f f f 4 . .
                . . . . . . . . 1 1 . . . . 1 b b . . 4 4 4 e 4 4 4 4 4 . .
                . . . . . . . 1 1 . . . . . 1 b b . . 4 4 4 e 4 4 4 4 4 . .
                . . . . . . . 1 . . . . . . . e e . . . 4 4 4 e 4 4 4 4 . .
                . . . . . . . 1 . . . . . . . e e . . . . 4 4 4 4 4 4 . . .
                . . . . . . . 1 1 . . . . . . e e . . e e e 4 4 4 4 . . . .
                . . . . . . . . 1 1 . . . . . e 4 4 4 e e e e e e . . . . .
                . . . . . . . . 1 1 1 . . . . . . . e e e e e e e . . . . .
                . . . . . . . . . 1 1 . . . . . . . e e e e 1 1 1 . . . . .
                . . . . . . . . . . 1 1 . . . . . . e e e 1 1 1 1 . . . . .
                . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . .
                . . . . . . . . . . . . . . . . . . c c c . 1 1 c . . . . .
                . . . . . . . . . . . . . . . . . . 4 4 . . . 4 4 . . . . .
                . . . . . . . . . . . . . . . . . e e b . . e e b . . . . .
                . . . . . . . . . . . . . . . . . f f f . . f f f . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . 1 . . . . . f f e f e e . . .
                . . . . . . . . . . . . . . 1 b b . . . f e e f e e f e e .
                . . . . . . . . . . . . . . 1 b b . . f e f f f e f e f e e
                . . . . . . . . . . . . . . 1 b b . f e e f e e f e e f e e
                . . . . . . . . . . . . . . 1 b b . e e f f e 4 4 4 e e f e
                . . . . . . . . . . . . . . 1 b b . f f e e 4 4 4 4 4 e e e
                . . . . . . . . . . . . . . 1 1 b . e e 4 4 4 4 4 4 4 4 e .
                . . . . . . . . . . . 1 1 . 1 1 1 . . f f f 4 4 f f f f f .
                . . . . . . . . . . 1 1 1 . 1 b 1 . . f 4 e f f e 4 f 4 . .
                . . . . . . . . . 1 1 . . . 1 b b . . f f f 4 4 f f f 4 . .
                . . . . . . . . 1 1 . . . . 1 b b . . 4 4 4 e 4 4 4 4 4 . .
                . . . . . . . 1 1 . . . . . 1 b b . . 4 4 4 e 4 4 4 4 4 . .
                . . . . . . . 1 . . . . . . . e e . . . 4 4 4 e 4 4 4 4 . .
                . . . . . . . 1 . . . . . . . e e . . . . 4 4 4 4 4 4 . . .
                . . . . . . . 1 1 . . . . . . e e . . e e e 4 4 4 4 . . . .
                . . . . . . . . 1 1 . . . . . e 4 4 4 e e e e e e . . . . .
                . . . . . . . . 1 1 . . . . . . . . e e e e e e e . . . . .
                . . . . . . . . . 1 1 . . . . . . . e e e e e e e . . . . .
                . . . . . . . . . . . 1 . . . . . . e e e e e e e . . . . .
                . . . . . . . . . . . . . . . . . . c c c c c c c . . . . .
                . . . . . . . . . . . . . . . . . . c c c . c c c . . . . .
                . . . . . . . . . . . . . . . . . . 4 4 . . . 4 4 . . . . .
                . . . . . . . . . . . . . . . . . e e b . . e e b . . . . .
                . . . . . . . . . . . . . . . . . f f f . . f f f . . . . .
            `, img`
                . . . . . . . . . . . . 1 1 1 1 . . . . . . . . . . . . . .
                . . . . . . . . . . . 1 1 1 . . . . . . . . . . . . . . . .
                . . . . . . . . . 1 1 1 1 1 . . f f e f e e . . . . . . . .
                . . . . . . . 1 1 1 1 1 1 . . e e e f e e f e e . . . . . .
                . . . . . 1 1 1 1 1 1 1 . . f e f f f e f e f e e . . . . .
                . . . . 1 1 1 1 1 1 1 . . f e e f e e f e e f e e . . . . .
                . . . . 1 1 1 1 1 1 1 . . e e f f e 4 4 4 e e f e . . . . .
                . . . . 1 1 1 1 1 1 1 . . f f e e 4 4 4 4 4 e e e . . . . .
                . . . 1 1 1 1 1 1 1 . . . e e 4 4 4 4 4 4 4 4 e . . . . . .
                . . . 1 1 1 1 1 1 . . . . . f f f 4 4 f f f f f . . . . . .
                . . . 1 1 1 1 1 1 . . . . . f 4 e f f e 4 f 4 . . . . . . .
                . . 1 1 1 1 1 1 . . . . . . f f f 4 4 f f f 4 . . . . . . .
                . 1 1 1 1 1 1 . . . . . e 4 4 4 4 e 4 4 4 4 4 . . . . . . .
                . 1 1 1 1 1 . . . . . e 4 e 4 4 4 e 4 4 4 4 4 . . . . . . .
                . 1 1 1 1 1 . . . . e 4 4 4 . 4 4 4 e 4 4 4 4 . . . . . . .
                . 1 1 1 1 . . . . f e e . . . . 4 4 4 4 4 4 . . . . . . . .
                . 1 1 1 . . . . d b f . . . . e e 4 4 4 4 e e . . . . . . .
                . 1 1 1 . . . d b b . . . . . . e e e e e e e . . . . . . .
                . 4 1 . . . d b b . . . . . . . e e e e e e e . . . . . . .
                . 1 1 . . d b b . . . . . . . . e e e e e e e . . . . . . .
                2 1 2 . d b b . . . . . . . . . e e e e e e e . . . . . . .
                . . . d b b . . . . . . . . . . c c c c c c c . . . . . . .
                . 2 d b b . . . . . . . . . . . c c c . c c c . . . . . . .
                4 d b b . . 4 . . . . . . . . e e b . . e e b . . . . . . .
                2 4 b . 2 . . . . . . . . . . f f f . . f f f . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . f f e f e e . . . . . . .
                . . . . . . . . . . . . . . . . e e e f e e f e e . . . . .
                . . . . . . . . . . . . . . . f e f f f e f e f e e . . . .
                . . . . . . . . . . . . . . f e e f e e f e e f e e . . . .
                . . . . . . . . . . . . . . e e f f e 4 4 4 e e f e . . . .
                . . . . . . . . . . . . . . f f e e 4 4 4 4 4 e e e . . . .
                . . . . . . . . . . . . . . e e 4 4 4 4 4 4 4 4 e . . . . .
                . . . . . . . . . . . . . . . f f f 4 4 f f f f f . . . . .
                . . . . . . . . . . . . . . . f 4 e f f e 4 f 4 . . . . . .
                . . . . . . . . . . . . . . . f f f 4 4 f f f 4 . . . . . .
                . . . . . . . . . . . . . . . 4 4 4 e 4 4 4 4 4 . . . . . .
                . . . . . . . . . . . . e 4 . 4 4 4 e 4 4 4 4 4 . . . . . .
                . . . . . . . . . . . e 4 e 4 . 4 4 4 e 4 4 4 4 . . . . . .
                . . . . . . 2 . . . e 4 4 4 . . . 4 4 4 4 4 4 . . . . . . .
                . . . . . . . . . f e e . . 4 . e e 4 4 4 4 e e . . . . . .
                2 . . . . . . . d b f . . . . . . e e e e e e e . . . . . .
                . . . 2 . . . d b b . . . . . . . e e e e e e e . . . . . .
                . . . . . . d b b . . . . . . . . e e e e e e e . . . . . .
                . . 4 . . d b b . . . . . . . . . e e e e e e e . . . . . .
                . . . . d b b . . . . . . . . . . c c c c c c c . . . . . .
                . . . d b b . . 2 . . . . . . . . c c c . c c c . . . . . .
                . 2 d b b . . . . . . . 4 . . . . 4 4 . . . 4 4 . . . . . .
                . d b b . . 4 . . . . . . . . . e e b . . e e b . . . . . .
                4 d b . 4 . . . . . . . . . . . f f f . . f f f . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . f f e f e e . . . . . . .
                . . . . . . . . . . . . . . . . f e e f e e f e e . 1 1 . .
                . . . . . . . . . . . . . . . f e f f f e f e f e e . . . .
                . . . . . . . . . . . . . . f e e f e e f e e f e e . . . .
                . . . . . . . . . . . . . . e e f f e 4 4 4 e e f e . . . .
                . . . . . . . . . . . . 1 1 f f e e 4 4 4 4 4 e e e . . . .
                . . . . . . . . . . . 1 1 . e e 4 4 4 4 4 4 4 4 e . . . . .
                . . . . . . . . . 1 1 1 . . . f f f 4 4 f f f f f . . . . .
                . . . . . . . 1 1 1 1 . . . . f 4 e f f e 4 f 4 . . . . . .
                . . . . . . 1 1 1 . . . . . . f f f 4 4 f f f 4 . . . . . .
                . . . . . 1 1 1 . . . . . . . 4 4 4 e 4 4 4 4 4 . . . . . .
                . . . . 1 1 1 . . . . . . . . 4 4 4 e 4 4 4 4 4 . . . . . .
                . . . 1 1 1 . . . . . . . . . . 4 4 4 e 4 4 4 4 . . . . . .
                . . 1 1 1 1 . . . . . . . . . . . 4 4 4 4 4 4 . . . . . . .
                . . 1 1 1 1 . . . . . . . . . . . e 4 4 4 4 e e e e . . . .
                . 1 1 1 1 1 1 . . . . . . . . . . e e e e e e e . e . . . .
                1 1 1 1 1 1 1 1 . . . . . . . . . e e e e e e e . e . . . .
                . 1 1 1 1 1 1 1 1 . . . . . . . . e e 1 1 1 1 e . 4 4 4 . .
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 e e e e e . . . . . .
                . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . e e e e e e e . . . . . .
                . . . 1 1 1 1 1 1 1 1 1 1 . . . . c c c c c c c . . . . . .
                . . . . . . . . . . . . . . . . . c c c . c c c . . . . . .
                . . . . . . . . . . . . . . . . . 4 4 . . . 4 4 . . . . . .
                . . . . . . . . . . . . . . . . e e b . . e e b . . . . . .
                . . . . . . . . . . . . . . . . f f f . . f f f . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . . . f f e f e e . . . . .
                . . . . . . . . . . . . . . . . . . f e e f e e f e e . . .
                . . . . . . . . . . . . . . . . . f e f f f e f e f e e . .
                . . . . . . . . . . . . . . . . f e e f e e f e e f e e . .
                . . . . . . . . . . . . . . . . e e f f e 4 4 4 e e f e . .
                . . . . . . . . . . . . . . . . f f e e 4 4 4 4 4 e e e . .
                . . . . . . . . . . . . . . . . e e 4 4 4 4 4 4 4 4 e . . .
                . . . . . . . . . . . . . . . . . f f f 4 4 f f f f f . . .
                . . . . . . . . . . . . . . . . . f 4 e f f e 4 f 4 . . . .
                . . . . . . . . . . . . . . . . . f f f 4 4 f f f 4 . . . .
                . . . . . . . . . . . . . . . . . 4 4 4 e 4 4 4 4 4 . . . .
                . . . . . . . . . . . . . . . . . 4 4 4 e 4 4 4 4 4 . . . .
                . . . . . . . . . . . . . . . . . . 4 4 4 e 4 4 4 4 . . . .
                . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 . . . . .
                . . . . . . . . . . . . . . . . e e e e 4 4 4 4 e e e . . .
                . . . . . . . . . . . . . . . . e . e e e e e e e . e . . .
                . . . . . . . . . . . . . . . . e . e e e e e e e . e . . .
                . . . . . . . . . . . . . . . . 4 . e e b b b d d b b b b .
                . . . . . . . . . . . . . . . . 4 e e f b b b b d d b b b d
                . . . . . . . . . . . . . . . . 4 e e f d d d d d d d d d .
                . . . . . . . . . . . . . . . . . . c c c c c c c . . . . .
                . . . . . . . . . . . . . . . . . . c c c . c c c . . . . .
                . . . . . . . . . . . . . . . . . . 4 4 . . . 4 4 . . . . .
                . . . . . . . . . . . . . . . . . e e b . . e e b . . . . .
                . . . . . . . . . . . . . . . . . f f f . . f f f . . . . .
            `],
            75,
            false
        )
    }


    animateAttack(): void {
        animation.runImageAnimation(
            this.player,
            [img`
                . . . . . . e f f e f e e . . . . . . . . . . . . . .
                . . . . . e f e e f e e f e . . . . . . . . . . . . .
                . . . . f f e f f f e f e f e . . . . . . . . . . . .
                . . . e f e e f e e f e e f e . . . . . . . . . . . .
                . . . f e e f f e e e 4 e e f e . . . . . . . . . . .
                . . . . f e e e 4 4 4 4 4 e e e . . . . . . . . . . .
                . 1 . . e e 4 4 4 4 4 4 4 4 e . . . . . . . . . . . .
                . 1 1 . . f f f f f 4 4 f f f f . . . . . . . . . . .
                . 1 1 . . 4 4 f 4 e f f e 4 f . . . . . . . . . . . .
                . 1 1 . . 4 4 f f f 4 4 f f f . . . . . . . . . . . .
                . 1 1 1 . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . .
                . . 1 1 . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . .
                . . 1 1 . . 4 4 4 4 e 4 4 4 . . . . . . . . . . . . .
                . . 1 1 e e e 4 4 4 4 4 4 . . . . . . . . . . . . . .
                . . . 1 1 e e e 4 4 4 4 . . . . . . . . . . . . . . .
                . . . 1 1 1 e e e e e e e b b b 1 b b b b b b b . . .
                . . . . e 1 1 1 1 1 1 1 1 1 1 b b 1 b b b b b b 1 . .
                . . . . e e e e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . .
                . . . . e e e e e e e . . . . . . . . . . . . . . . .
                . . . . c c e e e e e . . . . . . . . . . . . . . . .
                . . . . c c c c c c c . . . . . . . . . . . . . . . .
                . . . . c c c . c c c . . . . . . . . . . . . . . . .
                . . . . 4 4 . . . 4 4 . . . . . . . . . . . . . . . .
                . . . e e b . . . b e e . . . . . . . . . . . . . . .
                . . . f f f . . . f f f . . . . . . . . . . . . . . .
            `, img`
                . . . . . . e f f e f e e . . . . . . . . . . . . . .
                . . . . . e f e e f e e f e . . . . . . . . . . . . .
                . . . . f f e f f f e f e f e . . . . . . . . . . . .
                . . . e f e e f e e f e e f e . . . . . . . . . . . .
                . . . f e e f f e e e 4 e e f e . . . . . . . . . . .
                . . . . f e e e 4 4 4 4 4 e e e . . . . . . . . . . .
                . . . . e e 4 4 4 4 4 4 4 4 e . . . . . . . . . . . .
                . . . . . f f f f f 4 4 f f f f . . . . . . . . . . .
                . . . . . 4 4 f 4 e f f e 4 f . . . . . . . . . . . .
                . . . . . 4 4 f f f 4 4 f f f . . . . . . . . . . . .
                . . . . . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . .
                . . . . . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . .
                . . . . . . 4 4 4 4 e 4 4 4 . . . . . . . . . . . . .
                . . . . . e e 4 4 4 4 4 4 . . . . . . . . . . . . . .
                . . . . e e e e 4 4 4 4 . . . . . . . . . . . . . . .
                . . . . e e e e e e e e e b b b b b b b b b b 5 . 5 .
                . . . . e e e e e e e e e b b b b b b b b b 1 1 5 . .
                . . . . e e e e e e e . . 1 1 1 1 1 1 1 1 1 1 5 . 5 .
                . . . . e e e e e e e . . . . . . . . . . . . . . . .
                . . . . c c c c c c c . . . . . . . . . . . . . . . .
                . . . . c c c c c c c . . . . . . . . . . . . . . . .
                . . . . c c c . c c c . . . . . . . . . . . . . . . .
                . . . . 4 4 . . . 4 4 . . . . . . . . . . . . . . . .
                . . . e e b . . . b e e . . . . . . . . . . . . . . .
                . . . f f f . . . f f f . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . e f f e f e e . . . . . . . . . . . . . . . .
                . . . e f e e f e e f e . . . . . . . . . . . . . . .
                . . f f e f f f e f e f e . . . . . . . . . . . . . .
                . e f e e f e e f e e f e e . . . . . . . . . . . . .
                . f e e f f e e e 4 e e f e . . . . . . . . . . . . .
                . . f f e e 4 4 4 4 4 e e . . . . . . . . . . . . . .
                . . e e 4 4 4 4 4 4 4 4 e . . . . . . . . . . . . . .
                . 1 f f f f f f 4 4 f f f f . . . . . . . . . . . . .
                . . 4 f 4 f 4 e f f e 4 f . . . . . . . . . . . . . .
                . . . e 4 f f f 4 4 f f f . . . . . . . . . . . . . .
                . . . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . . . .
                . . . . 4 4 4 4 4 e 4 4 . . . . . . . . . . . . . . .
                . . . . 4 4 4 4 e 4 4 4 . . . . . . . 1 1 1 . . . . .
                . . . . . 4 4 4 4 4 4 . . . . . . . . 1 1 . . . . . .
                1 1 . e e e e 4 4 4 . . . . . . . . 1 1 . . . . . . .
                . 1 1 e e e e e e e . . . . . . 1 1 1 . . . . . . . .
                . 1 1 1 1 e e e e e . . . . . . 1 1 . . . . . . . . .
                . 1 1 1 1 1 e e e e . . . . 1 1 1 . . . . . . . . . .
                . . 1 1 1 1 1 1 1 1 . . 1 1 1 1 . . . . . . . . . . .
                . . . c 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . .
                . . . c c 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . .
                . . . . 4 4 1 1 1 1 1 1 . . . . . . . . . . . . . . .
                . . . e e b . . 1 1 1 . . . . . . . . . . . . . . . .
                . . . f f f . . f f f . . . . . . . . . . . . . . . .
            `, img`
                . . . . e f f e f e e . . . . . . . . . . . . . . . .
                . . . e f e e f e e f e . . . . . . . . . . . . . . .
                . . f f e f f f e f e f . . . . . . . . . . . . . . .
                . e f e e f e e f e e f . . . . . . . . . . . . . . .
                . f e e f f e e e 4 e e e . . . . . . . . . . . . . .
                . . f f e e 4 4 4 4 4 e e . . . . . . . . . . . . . .
                . . e e 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . .
                . 1 f f f f f f 4 4 f f f . . . . . . . . . . . . . .
                . . 4 f 4 f 4 e f f e 4 f . . . . . . . . . . . . . .
                . . . e 4 f f f 4 4 f f f . . . . . . . . . . . . . .
                . . . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . . . .
                . . . . 4 4 4 4 4 e 4 4 . . . . . . . . . . . . . . .
                . 1 . . 4 4 4 4 e 4 4 4 . . . . . . . . . . . . . . .
                1 1 1 . . 4 4 4 4 4 4 4 . . . . . . . . . . . . . . .
                1 1 1 1 . 4 4 4 4 4 e e . . . . . . . . . . . . . . .
                1 1 1 1 e e e e e e e . . . . . . . . . . . . . . . .
                1 1 1 1 e e e e e e e . . . . . . . . . . . . . . . .
                . 1 1 1 e e e e e e e . . . . . . . . . . . . . . . .
                . . 1 1 1 e e e e e e . . . . . . . . . . . . . . . .
                . . . 1 1 1 e e e e . . . . . . . . . . . . . . . . .
                . . . c 1 1 1 c c c . 1 . . . . . . . . . . . . . . .
                . . . c c c 1 1 1 1 1 1 . . . . . . . . . . . . . . .
                . . . . 4 4 . . 1 1 1 . . . . . . . . . . . . . . . .
                . . . e e b . . b e e . . . . . . . . . . . . . . . .
                . . . f f f . . f f f . . . . . . . . . . . . . . . .
            `, img`
                . . . . e f f e f e e . . . . . . . . . . . . . . . .
                . . . e f e e f e e f e . . . . . . . . . . . . . . .
                . . f f e f f f e f e f e . . . . . . . . . . . . . .
                . e f e e f e e f e e f e . . . . . . . . . . . . . .
                . f e e f f e e e 4 e e f e . . . . . . . . . . . . .
                . . f 1 e e 4 4 4 4 4 e e e . . . . . . . . . . . . .
                . . b b 1 4 4 4 4 4 4 4 e . . . . . . . . . . . . . .
                . . b b 1 f f f 4 4 f f f f . . . . . . . . . . . . .
                . . b b 1 f 4 e f f e 4 f . . . . . . . . . . . . . .
                . . b b 1 f f f 4 4 f f f . . . . . . . . . . . . . .
                . . b d 1 4 4 4 4 e 4 4 . . . . . . . . . . . . . . .
                . . b d 1 4 4 4 4 e 4 4 . . . . . . . . . . . . . . .
                . . d b 1 4 4 4 e 4 4 4 . . . . . . . . . . . . . . .
                . . d b 1 4 4 4 4 4 4 . . . . . . . . . . . . . . . .
                . e b b 1 4 4 4 4 4 e . . . . . . . . . . . . . . . .
                . e b b 1 e e e e e e . . . . . . . . . . . . . . . .
                . e b b 1 e e e e e e . . . . . . . . . . . . . . . .
                . . e e e e e e e e e . . . . . . . . . . . . . . . .
                . . e 4 4 4 4 4 4 e . . . . . . . . . . . . . . . . .
                . . e e c c c c c c . . . . . . . . . . . . . . . . .
                . . e e c c c c c c . . . . . . . . . . . . . . . . .
                . . . c c c . c c c . . . . . . . . . . . . . . . . .
                . . . . 4 4 . . 4 4 . . . . . . . . . . . . . . . . .
                . . . e e b . . b e e . . . . . . . . . . . . . . . .
                . . . f f f . . f f f . . . . . . . . . . . . . . . .
            `],
            100,
            false
        )
    }


    playUpDownAnimation() {
        animation.runImageAnimation(
            this.player,
            [img`
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . . . . 4 4 4 4 4 4 . . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . 4 4 . . . 4 4 . . .
                . . . e e . . . e e . . .
                . . . f f . . . f f . . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . e e . . . 4 4 . . .
                . . . f f . . . e e . . .
                . . . . . . . . f f . . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . 4 4 . . . e e . . .
                . . . e e . . . f f . . .
                . . . f f . . . . . . . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . e e . . . 4 4 . . .
                . . . f f . . . e e . . .
                . . . . . . . . f f . . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . 4 4 . . . e e . . .
                . . . e e . . . f f . . .
                . . . f f . . . . . . . .
            `],
            100,
            true
        )
    }


    playIdleRightAnimation() {
        animation.runImageAnimation(
            this.player,
            [img`
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . . . . 4 4 4 4 4 4 . . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c . c c c . . .
                . . . . 4 4 . . b e e . .
                . . . e e b . . f f f . .
                . . . f f f . . . . . . .
            `, img`
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . . . . 4 4 4 4 4 4 . . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . . . . 4 4 4 4 4 4 . . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . . . . 4 4 4 4 4 4 . . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c c c c c . 4 .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `],
            100,
            true
        )
    }

    playWalkRightAnimation() {
        animation.runImageAnimation(
            this.player,
            [img`
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . . . . 4 4 4 4 4 4 . . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 4
                . 4 . c c c c c c c . . .
                . 4 4 c c c . c c 4 4 . .
                . . . 4 4 . . . . b e e .
                . . . b e e . . . f f f .
                . . . f f f . . . . . . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 4 c c c c c c c . 4 4
                . . . c c c . c c c . . .
                . . . . b e e . . 4 4 . .
                . . . . f f f . . b e e .
                . . . . . . . . . f f f .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 4 c c c c c c c . 4 .
                . . . c c c c c c c . 4 .
                . . . c c c . c c c . 4 4
                . . . 4 4 . . . 4 4 . . .
                . . . b e e . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 4
                . 4 4 c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . . b e e . b e e . .
                . . . . f f f . f f f . .
            `],
            75,
            true
        )
    }
    playIdleBackAnimation(): void {
        animation.runImageAnimation(
            this.player,
            [img`
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e e e e f e
                . f f e e e e e f f e e e
                . e e e f f f f f e e e .
                . f f e e e e e e e e f f
                . 4 f e e f f f f f e f .
                . . e e e e e e e e e f .
                . . . 4 e e f f e e e . .
                . . . 4 4 e e e e e 4 . .
                . . . . 4 4 4 4 4 4 4 . .
                . . . . . . 4 4 4 . . . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e e e e f e
                . f f e e e e e f f e e e
                . e e e f f f f f e e e .
                . f f e e e e e e e e f f
                . 4 f e e f f f f f e f .
                . . e e e e e e e e e f .
                . . . 4 e e f f e e e . .
                . . . 4 4 e e e e e 4 . .
                . . . . 4 4 4 4 4 4 4 . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e e e e f e
                . f f e e e e e f f e e e
                . e e e f f f f f e e e .
                . f f e e e e e e e e f f
                . 4 f e e f f f f f e f .
                . . e e e e e e e e e f .
                . . . 4 e e f f e e e . .
                . . . 4 4 e e e e e 4 . .
                . . . . 4 4 4 4 4 4 4 . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e e e e f e
                . f f e e e e e f f e e e
                . e e e f f f f f e e e .
                . f f e e e e e e e e f f
                . 4 f e e f f f f f e f .
                . . e e e e e e e e e f .
                . . . 4 e e f f e e e . .
                . . . 4 4 e e e e e 4 . .
                . . . . 4 4 4 4 4 4 4 . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e e e e f e
                . f f e e e e e f f e e e
                . e e e f f f f f e e e .
                . f f e e e e e e e e f f
                . 4 f e e f f f f f e f .
                . . e e e e e e e e e f .
                . . . 4 e e f f e e e . .
                . . . 4 4 e e e e e 4 . .
                . . . . 4 4 4 4 4 4 4 . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `],
            100,
            true
        )
    }


    playWalkLeftAnimation() {
        animation.runImageAnimation(
            this.player,
            [img`
                . . . . f f e f e e . . .
                . . . f e e f e e f e e .
                . . f e f f f e f e f e e
                . f e e f e e f e e f e e
                . e e f f e 4 4 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . . f f f 4 4 f f f f f .
                . . f 4 e f f e 4 f 4 . .
                . . f f f 4 4 f f f 4 . .
                . . 4 4 4 e 4 4 4 4 4 . .
                . . 4 4 4 e 4 4 4 4 4 . .
                . . . 4 4 4 e 4 4 4 4 . .
                . . . . 4 4 4 4 4 4 . . .
                . e e e e 4 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c 4 4 .
                . 4 . c c c c c c c . . .
                4 4 . 4 4 c . c c c . . .
                . . e e b . . . 4 4 . . .
                . . f f f . . e e b . . .
                . . . . . . . f f f . . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e e .
                . . f e f f f e f e f e e
                . f e e f e e f e e f e e
                . e e f f e 4 4 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . . f f f 4 4 f f f f f .
                . . f 4 e f f e 4 f 4 . .
                . . f f f 4 4 f f f 4 . .
                . . 4 4 4 e 4 4 4 4 4 . .
                . . 4 4 4 e 4 4 4 4 4 . .
                . . . 4 4 4 e 4 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e 4 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                4 4 . c c c c c c c 4 4 .
                . . . c c c . c c c . . .
                . . . 4 4 . . 4 4 . . . .
                . . e e b . e e b . . . .
                . . f f f . f f f . . . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e e .
                . . f e f f f e f e f e e
                . f e e f e e f e e f e e
                . e e f f e 4 4 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . . f f f 4 4 f f f f f .
                . . f 4 e f f e 4 f 4 . .
                . . f f f 4 4 f f f 4 . .
                . . 4 4 4 e 4 4 4 4 4 . .
                . . 4 4 4 e 4 4 4 4 4 . .
                . . . 4 4 4 e 4 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e 4 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                4 4 . c c c c c c c . 4 .
                . . . c c c c c c c . 4 .
                . . . c c c . 4 4 c 4 4 .
                . . . 4 4 . e e b . . . .
                . . e e b . f f f . . . .
                . . f f f . . . . . . . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e e .
                . . f e f f f e f e f e e
                . f e e f e e f e e f e e
                . e e f f e 4 4 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . . f f f 4 4 f f f f f .
                . . f 4 e f f e 4 f 4 . .
                . . f f f 4 4 f f f 4 . .
                . . 4 4 4 e 4 4 4 4 4 . .
                . . 4 4 4 e 4 4 4 4 4 . .
                . . . 4 4 4 e 4 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e 4 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c 4 4 .
                4 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . e e b . . .
                . . . f f f . f f f . . .
            `],
            75,
            true
        )
    }



}