"use strict";
function printSampleUser(data) {
    console.log(`User: ${data.name}, Age: ${data.age}`);
}
function processAdulthood(data) {
    console.log("Adult");
}
//Second code segment remove type safety by checking
function fetchElement() {
    const element = document.getElementById('myButton');
    if (element) {
        element.addEventListener('click', () => {
            console.log('Button clicked!');
        });
    }
}
//Fourth Code Segment
function getInputValue() {
    const input = document.getElementById('input');
    if (input instanceof HTMLInputElement) {
        console.log(input.value);
    }
}
//Fifth Code Segment
function someUnknownFunction() { }
const result = someUnknownFunction();
//Sixth Code Segment
//import { unusedHelper } from './helpers';
const unusedData = { key: 'value' };
;
//Eigth Code Segment
// function processItem(item: string): void;
// function processItem(item: number): void;
// function processItem(item: boolean): void;
function processItem(item) {
    console.log(`Processing item: ${item}`);
}
//Ninth Code Segment
const config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
};
config.timeout = 10000;
//Eleventh Code Segment
const counter = 0;
//Twelveth Code Segment
function calculateTotal(price, discount) {
    if (discount)
        return price - discount;
}
//Thirteenth Code Segment
const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 17 },
];
users.push({ id: 3, name: 'Charlie', age: 30 });
