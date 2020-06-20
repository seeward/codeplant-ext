/**
* Sprite Wrapper for a Codeplant lessons
*/
//% weight=100 color=#d2b48c 
//% groups='["Create", "Movement", "Speak", "Properties", "Animations"]'
namespace codeplant {
    export enum seewardFlags {
        None = 0,
        HorizontalMovement = 1 << 0,
        VerticalMovement = 1 << 1,
        UpdateSprite = 1 << 2,
        CameraFollow = 1 << 3,
        All = ~(~0 << 4)
    }

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
    //% group="Create"
    export function create(kind: number,
        x: number = 10,
        y: number = 70): Seeward {

        return new Seeward(kind, x, y);

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
//% blockNamespace=codeplant color="#d2b48c" blockGap=8
class Seeward {
    private player: Sprite;
    private stillAnimation: Image[];
    private _leftAnimation: Image[];
    private _rightAnimation: Image[];

    //% group="Properties" blockSetVariable="seeward"
    //% blockCombine block="horizontal speed"
    maxMoveVelocity: number;
    //% group="Properties" blockSetVariable="seeward"
    //% blockCombine block="gravity"
    gravity: number;
    //% group="Properties" blockSetVariable="seeward"
    //% blockCombine block="jump speed"
    jumpVelocity: number;
    //% group="Properties" blockSetVariable="seeward"
    //% blockCombine block="max jumps in a row"
    maxJump: number;
    //% group="Properties" blockSetVariable="seeward"
    //% blockCombine block="rate horizontal movement is slowed"
    decelerationRate: number;

    private controlFlags: number;
    private initJump: boolean;
    private releasedJump: boolean;
    private count: number;
    private touching: number;
    private remainingJump: number;
    private script: string[];


    public constructor(kind: number, x: number, y: number) {
        this.maxMoveVelocity = 70;
        this.gravity = 300;
        this.jumpVelocity = 125;

        this.initJump = true;
        this.releasedJump = true;
        this.maxJump = 2;
        this.count = 0;
        this.touching = 2;
        this.remainingJump = this.maxJump;
        this.script = [
            "bark"
        ];

        this.controlFlags = codeplant.seewardFlags.None;

        this.stillAnimation = codeplant._seeward_still;
        this._leftAnimation = codeplant._seeward_left;
        this._rightAnimation = codeplant._seeward_right;

        this.player = sprites.create(this.stillAnimation[0], kind);
        this.player.setFlag(SpriteFlag.StayInScreen, true);
        this.player.ay = this.gravity;
        this.player.x = x;
        this.player.y = y;

        this.playIdleRightAnimation();

    }

    /**
     * Get the Seeward's sprite
     */
    //% group="Properties"
    //% blockId=seewardSprite block="%Seeward(seeward) sprite"
    //% weight=8
    get sprite(): Sprite {
        return this.player;
    }
    //% group="Animations"
    //% blockId=playAttackLeftAnimation block="Play Attack Left Animation"
    //% weight=8
    playAttackLeftAnimation() {
        return animation.runImageAnimation(
            this.sprite(),
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
            this.sprite(),
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
            this.sprite(),
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
            this.sprite(),
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


    playIdleBackAnimation(): void {
        animation.runImageAnimation(
            this.sprite(),
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
            this.sprite(),
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



    private contactLeft(): boolean {
        let screenEdge = game.currentScene().camera.offsetX;
        return this.player.left - screenEdge <= this.touching
            || this.player.isHittingTile(CollisionDirection.Left);
    }

    private contactRight(): boolean {
        let screenEdge = screen.width + game.currentScene().camera.offsetX;
        return screenEdge - this.player.right <= this.touching
            || this.player.isHittingTile(CollisionDirection.Right);
    }

    private contactBelow(): boolean {
        let screenEdge = screen.height + game.currentScene().camera.offsetY;
        return screenEdge - this.player.bottom <= this.touching
            || this.player.isHittingTile(CollisionDirection.Bottom);
    }
}
