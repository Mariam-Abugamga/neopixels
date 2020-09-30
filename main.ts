// Created by; Mariam Abugamga
// Date: Sept 30, 2020
// This program lights up neopixels in a traffic light form
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(1000)
    strip.clear()
    strip.show()
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
    basic.pause(1000)
    strip.clear()
    strip.show()
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(1000)
    strip.clear()
    strip.show()
})
