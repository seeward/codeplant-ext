/**
* Sprite Wrapper for a Codeplant lessons
*/
//% weight=100 color=#d2b48c 
//% groups='["Create", "Movement", "Speak", "Properties"]'
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

    /**
     * Get the Seeward's sprite
     */
    //% group="Properties"
    //% blockId=seewardSprite block="%Seeward(seeward) sprite"
    //% weight=8
    get sprite(): Sprite {
        return this.player;
    }

    //% blockId=seewardAttack block="Attack"
    //% weight=8
    public animateAttack():void {
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

    /**
     * Make the character move in the direction indicated by the left and right arrow keys.
     */
    //% group="Movement"
    //% blockId=horizontalMovement block="make %Seeward(seeward) move left and right with arrow keys || %on=toggleOnOff"
    //% weight=100 blockGap=5
    horizontalMovement(on: boolean = true): void {
        let _this = this;

        this.updateFlags(on, codeplant.seewardFlags.HorizontalMovement);

        game.onUpdate(function () {
            if (!(_this.controlFlags & codeplant.seewardFlags.HorizontalMovement)) return;

            let dir: number = controller.dx();

            _this.player.vx = dir ? codeplant.normalize(dir) * _this.maxMoveVelocity :
                codeplant.roundTowardsZero(_this.player.vx * _this.decelerationRate);
        })
    }

    /**
     * Make the character jump when the up arrow key is pressed, and grab onto the wall when falling.
     */
    //% group="Movement"
    //% blockId=verticalMovement block="make %Seeward(seeward) jump if up arrow key is pressed || %on=toggleOnOff"
    //% weight=100 blockGap=5
    verticalMovement(on: boolean = true): void {
        let _this = this;

        this.updateFlags(on, codeplant.seewardFlags.VerticalMovement);

        controller.up.onEvent(ControllerButtonEvent.Released, function () {
            _this.releasedJump = true;
        })

        game.onUpdate(function () {
            if (!(_this.controlFlags & codeplant.seewardFlags.VerticalMovement)) return;

            if (controller.up.isPressed()) {
                if (_this.contactLeft() && controller.right.isPressed()
                    || _this.contactRight() && controller.left.isPressed()) {
                    _this.remainingJump = Math.max(_this.remainingJump + 1, _this.maxJump);
                }
                _this.jumpImpulse();
            }

            if ((_this.contactLeft() && controller.left.isPressed()
                || _this.contactRight() && controller.right.isPressed())
                && _this.player.vy > - 10) {
                _this.player.ay = _this.gravity >> 2;
            } else {
                _this.player.ay = _this.gravity;
            }

            if (_this.contactBelow()) {
                if (_this.initJump) {
                    _this.remainingJump = _this.maxJump;
                }
                _this.initJump = true;
            }
        })
    }

    /**
     * Set camera to follow Seeward horizontally, while keeping the screen centered vertically.
     */
    //% group="Movement"
    //% blockId=followseeward block="make camera follow %Seeward(seeward) left and right || %on=toggleOnOff"
    //% weight=90 blockGap=5
    follow(on: boolean = true): void {
        let _this = this;

        this.updateFlags(on, codeplant.seewardFlags.CameraFollow);

        game.onUpdate(function () {
            if (_this.controlFlags & codeplant.seewardFlags.CameraFollow) {
                scene.centerCameraAt(_this.player.x, screen.height >> 1);
            }
        })
    }

    /**
     * Make the character change sprites when moving.
     */
    //% group="Movement"
    //% blockId=updateSprite block="change image when %Seeward(seeward) is moving || %on=toggleOnOff"
    //% weight=100 blockGap=5
    updateSprite(on: boolean = true): void {
        let _this = this;

        this.updateFlags(on, codeplant.seewardFlags.UpdateSprite);

        game.onUpdate(function () {
            if (!(_this.controlFlags & codeplant.seewardFlags.UpdateSprite)) return;

            _this.count++;

            if (_this.player.vx == 0) {
                _this.player.setImage(_this.pickNext(_this.stillAnimation, 6));
            } else if (_this.player.vx < 0) {
                _this.player.setImage(_this.pickNext(_this._leftAnimation));
            } else {
                _this.player.setImage(_this.pickNext(_this._rightAnimation));
            }
        })
    }

    

    private jumpImpulse() {
        if (this.remainingJump > 0 && this.releasedJump) {
            this.releasedJump = false;
            if (this.initJump) {
                this.player.vy = -1 * this.jumpVelocity;
                this.initJump = false;
            } else {
                this.player.vy = Math.clamp((-4 * this.jumpVelocity) / 3, -30,
                    this.player.vy - this.jumpVelocity);
            }
            this.remainingJump--;
        }
    }

    private updateFlags(on: boolean, flag: codeplant.seewardFlags): void {
        if (on) this.controlFlags |= flag;
        else this.controlFlags &= codeplant.seewardFlags.All ^ flag;
    }

    private pickNext(input: Image[], state: number = 3): Image {
        return input[(this.count / state) % input.length];
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
