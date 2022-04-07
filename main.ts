while (true) {
    basic.showString(convertToText(pins.analogReadPin(AnalogPin.P0)))
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        . # . # .
        # # . # #
        `)
    basic.pause(100)
    basic.clearScreen()
}
