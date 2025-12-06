let range = 0
basic.showString("Range?")
input.onButtonPressed(Button.A, function () {
    range += 10
    basic.showNumber(range)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(0, range))
    
})
// Press A to increase coin count. press B to flip them for a random number.
input.onButtonPressed(Button.AB, function() {
    range = 10
    basic.showNumber(range)
})