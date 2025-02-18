"use strict";
//First example of an arrow function using addition
const add = (a, b) => {
    return a + b;
};
console.log(add(5, 10));
// A casual greeting my fellow coder
const greet = (name) => "Hello " + name;
console.log(greet("James"));
class Person {
    constructor() {
        this.name = "Alice";
    }
    sayHello() {
        setTimeout(() => {
            console.log("Hello " + this.name);
        }, 1000);
    }
}
new Person().sayHello();
