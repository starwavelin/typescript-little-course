var DigitalClock = /** @class */ (function () {
    function DigitalClock() {
    }
    DigitalClock.prototype.tick = function () {
        console.log('Beep beep');
    };
    return DigitalClock;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var digital = createClock(DigitalClock, 12, 17);
digital.tick();
