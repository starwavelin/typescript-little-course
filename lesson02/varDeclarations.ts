function f() {
    let a = 1;

    a = 2;
    var b = g();
    a = 3;

    return b;

    function g() {
        return a;
    }
}

console.log(f()); // returns '2'


// for (var i = 0; i < 5; i++) {
//     setTimeout(() => { 
//         console.log(i); 
//     }, 100 * i);
// }

/**
 * Let’s take a minute to consider what that means. setTimeout will run a function after some number of milliseconds, 
 * but only after the for loop has stopped executing; 
 * By the time the for loop has stopped executing, 
 * the value of i is 5. So each time the given function gets called, it will print out 5!
 */


 /**
  * work around solution, which looks awkward to me
  */
// for (var i = 0; i < 5; i++) {
//     (i => {
//         setTimeout(() => { 
//             console.log(i); 
//         }, 100 * i);
//     })(i);
// }

function foo() {
    // okay to capture 'a'
    console.log('Okay to capture a');
    return a;
}

// illegal call 'foo' before 'a' is declared
// runtimes should throw an error here
foo();

let a;

function h(condition, x) {
    if (condition) {
        let x = 100;
        return x;
    }

    return x;
}

console.log(h(false, 0)); // returns '0'
console.log(h(true, 0));  // returns '100'

/**
 * let declarations have drastically different behavior when declared as part of a loop. 
 * Rather than just introducing a new environment to the loop itself, 
 *  these declarations sort of create a new scope per iteration. 
 */
// for (let i = 0; i < 5 ; i++) {
//     setTimeout(() => { 
//         console.log(i); 
//     }, 100 * i);
// }

// const declarations

/**
 * Unless you take specific measures to avoid it, the internal state of a const variable is still modifiable. 
 * Fortunately, TypeScript allows you to specify that members of an object are readonly. The chapter on Interfaces has the details
 */


 // Destructuring
let input = [50, 100];
let [first, second] = input;
console.log(`first is : ${first}; second is ${second}`);
// after swap
[first, second] = [second, first];
console.log(`After swap, first is : ${first}; second is ${second}`);

function des([fir, sec]: [number, number]) {
    console.log(fir);
    console.log(sec);
}
des([3, 7]);


function des2([first, ...rest]: [number, number, number]) {
    console.log(first);
    console.log(rest);
}
des2([2, 4, 8]);

let [, sec, , fourth] = [5, 10, 15, 29];
console.log(sec); // outputs 10
console.log(fourth); // outputs 29

// destructuring object
let o = {
    aa: "foo",
    bb: 12,
    cc: "bar"
};
let { aa, bb } = o;
console.log(`so aa is ${aa}, and bb is ${bb}`);

({ aa, bb } = {aa: 'hello', bb: 19});
console.log(`After re-assignment, now aa is ${aa}, and bb is ${bb}`);
console.log(`But, o.aa and o.bb should be the same. So, o.aa is ${o.aa}, and o.bb is ${o.bb}`);

let { aa: newName1, bb: newName2 } = o;
console.log(`After renaming property names, now I have two new variable names. 
So, newName1 is ${newName1}, and newName2 is ${newName2}`);

let { ha, ho } = {ha: 2019, ho: 3019};
console.log(`ha is ${ha}, and ho is ${ho}`);