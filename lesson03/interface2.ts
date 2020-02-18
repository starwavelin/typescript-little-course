interface ClockConstructor {
    new (h: number, m: number): ClockInterface;
}

interface ClockInterface {
    tick(): void;
}

class DigitalClock implements ClockInterface {
    tick() {
        console.log('Beep beep');
    }
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

let digital = createClock(DigitalClock, 12, 17);
digital.tick();