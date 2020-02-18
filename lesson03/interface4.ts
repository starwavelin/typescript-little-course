// In Typescript, an interface can extend multiple interfaces, creating a combination of all of the interfaces.

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square: Square = {} as Square;
square.color = 'Brown';
square.sideLength = 100;
square.penWidth = 2.8;

console.log(`This square's color is ${square.color}, and its length is ${square.sideLength}, 
    and its pen width is ${square.penWidth}`);