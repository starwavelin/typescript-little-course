var _a, _b;
function f() {
    var a = 1;
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
var a;
function h(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
console.log(h(false, 0)); // returns '0'
console.log(h(true, 0)); // returns '100'
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
var input = [50, 100];
var first = input[0], second = input[1];
console.log("first is : " + first + "; second is " + second);
// after swap
_a = [second, first], first = _a[0], second = _a[1];
console.log("After swap, first is : " + first + "; second is " + second);
function des(_a) {
    var fir = _a[0], sec = _a[1];
    console.log(fir);
    console.log(sec);
}
des([3, 7]);
function des2(_a) {
    var first = _a[0], rest = _a.slice(1);
    console.log(first);
    console.log(rest);
}
des2([2, 4, 8]);
var _c = [5, 10, 15, 29], sec = _c[1], fourth = _c[3];
console.log(sec); // outputs 10
console.log(fourth); // outputs 29
// destructuring object
var o = {
    aa: "foo",
    bb: 12,
    cc: "bar"
};
var aa = o.aa, bb = o.bb;
console.log("so aa is " + aa + ", and bb is " + bb);
(_b = { aa: 'hello', bb: 19 }, aa = _b.aa, bb = _b.bb);
console.log("After re-assignment, now aa is " + aa + ", and bb is " + bb);
console.log("But, o.aa and o.bb should be the same. So, o.aa is " + o.aa + ", and o.bb is " + o.bb);
var newName1 = o.aa, newName2 = o.bb;
console.log("After renaming property names, now I have two new variable names. \nSo, newName1 is " + newName1 + ", and newName2 is " + newName2);
var _d = { ha: 2019, ho: 3019 }, ha = _d.ha, ho = _d.ho;
console.log("ha is " + ha + ", and ho is " + ho);
