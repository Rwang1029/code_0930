let degrees = 0
input.onGesture(Gesture.Shake, function () {
    degrees = randint(80, 100)
    basic.showNumber(degrees)
    if (degrees <= 84) {
        basic.showString("A-")
    } else if (degrees <= 89) {
        basic.showString("A")
    } else if (degrees <= 100) {
        basic.showString("A+")
    } else {
    	
    }
})
basic.forever(function () {
	
})
