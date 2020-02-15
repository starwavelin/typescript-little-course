
let x: [string, number];
x = ['Happy', 13];
console.log(x[0].substring(0, 2));
console.log(x[0].substring(2));
console.log(x[1]);

enum Color {
    Red = 'RED',
    Green = 'GREEN',
    Blue = 2
};
let colorName: string = Color[2];
console.log(colorName); // undefined, cuz you explicitly assign each element in the enum with string values

/* However, variables of type Object only allow you to assign any value to them. 
You can’t call arbitrary methods on them, even ones that actually exist: */

// let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

let list: any[] = [1, true, "free"];
list[1] = 100;
console.log(`list[1] is ${list[1]}`); 
