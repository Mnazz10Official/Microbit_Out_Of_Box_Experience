input.onButtonPressed(Button.A, function () {
    if (state == 1) {
        state = 2
    }
})
input.onGesture(Gesture.ScreenUp, function () {
    if (state == 7) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.showIcon(IconNames.Yes)
        basic.pause(2000)
        basic.clearScreen()
        basic.showString("Touch Logo")
        state = 8
    }
})
input.onSound(DetectedSound.Loud, function () {
    if (state == 5) {
        led.stopAnimation()
        claps += 1
    }
})
input.onGesture(Gesture.Shake, function () {
    if (state == 3) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        state = 4
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (state == 8) {
        picture = images.createBigImage(`
            . . . . . . . . . .
            . . . . . . . . . .
            . . . . # # . . . .
            . . . . . . . . . .
            . . . . . . . . . .
            `)
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Forever)
        state = 9
    }
})
let picture: Image = null
let claps = 0
let state = 0
state = 0
basic.showIcon(IconNames.Happy)
music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
basic.pause(3000)
basic.clearScreen()
basic.showString("Hello!")
state = 1
basic.forever(function () {
    if (state == 1) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (state == 2) {
        led.stopAnimation()
        basic.showIcon(IconNames.Yes)
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        basic.pause(1000)
        basic.clearScreen()
        basic.showString("SHAKE!")
        state = 3
    }
})
basic.forever(function () {
    if (state == 4) {
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.pause(5000)
        basic.clearScreen()
        basic.showString("CLAP!")
        state = 5
    }
})
basic.forever(function () {
    if (state == 5) {
        basic.showNumber(claps)
    }
})
basic.forever(function () {
    if (state == 9) {
        picture.scrollImage(1, 200)
    }
})
basic.forever(function () {
    if (state == 5) {
        if (claps == 5) {
            state = 6
        }
    }
})
basic.forever(function () {
    if (state == 6) {
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        basic.pause(2000)
        basic.clearScreen()
        basic.showString("Place Flat")
        state = 7
    }
})
