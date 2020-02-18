interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square: Square = <Square>{};
square.color = 'red';
square.sideLength = 3;

console.log(`This square's color is ${square.color}, and its length is ${square.sideLength}`);
