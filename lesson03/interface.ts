interface LabeledValue {
    label: string
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj = {size: 9, label: "Size 9 Object"};
printLabel(myObj);



interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
        console.log(`newSquare's color is ${newSquare.color}`);
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
        console.log(`newSquare's area is ${newSquare.area}`);
    }
    return newSquare;
}

let mySquare = createSquare({color: "blue", width: 13});


interface ClockInterface {
    currentTime: Date;

    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentTime: Date;

    setTime(d: Date) {
        this.currentTime = d;
    }

    constructor(h: number, m: number) {
        this.currentTime = new Date();
    }
}

interface ClockConstructor {
    // new(hour: number, minute: number);
    setTime(hour: number, minute: number): void;
}

class Clock2 implements ClockConstructor {
    currentTime: Date;
    
    setTime(h: number, m: number): void {}
    constructor(h: number, m: number) {}
}

