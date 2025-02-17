"use strict";
//-------------Arrow Functions
//function add(a:number, b:number): number{
//	return a + b;
//}
const add = (a, b) => (a + b);
//console.log(add(1,2));
const subtract = (x, b) => (x - b);
//console.log(add(subtract(10,5),5));
//-------------Generic Returns
function identifyNumber(value) {
    return value;
}
function identifyString(value) {
    return value;
}
function identify(value) {
    return value;
}
//console.log(identifyNumber(5));
//console.log(identifyString("James"));
console.log(identify("James"));
console.log(identify(5));
