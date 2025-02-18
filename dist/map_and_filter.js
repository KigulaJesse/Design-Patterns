"use strict";
const relatives = [
    { name: "John Ssenyonyi", type: "Uncle", married: true },
    { name: "Ruth Ssenyonyi", type: "Aunt", married: true },
    { name: "Julian Nyombi", type: "Aunt", married: true },
    { name: "Solomon Nyombi", DoB: new Date(1996, 11, 3), type: "Cousin", married: false },
];
// Strings to Uppercase
const petrolstations = ["Rubix", "Shell", "Total", 'Oryx'];
const upperPetrol = petrolstations.map(petrolstation => petrolstation.toUpperCase());
console.log(upperPetrol);
//Takes numbers and returns array of objects with squares.
class Squared {
    constructor(evenNumber, square) {
        this.evenNumber = evenNumber;
        this.square = square;
    }
}
const evennumbers = [2, 4, 6, 8];
const evenobject = evennumbers.map((evennumber) => {
    return new Squared(evennumber, evennumber ** 2);
});
console.log(evenobject);
//Get evennumbers
const booms = [1, 2, 3, 4, 2, 22010, 3030];
const evenbooms = booms.filter((boom) => boom % 2 === 0);
console.log(evenbooms);
//Get adults
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const humans = [
    new Human("James", 30),
    new Human("John", 4),
    new Human("Orla", 45),
    new Human("Daniella", 16),
    new Human("Sinza", 12),
];
const adults = humans.filter(({ name, age }) => age > 18);
console.log(adults);
const randomnumbers = [1, 45, 60, 4, 7, 9, 12];
const finalnumbers = randomnumbers
    .filter((number) => number < 10)
    .map((number) => number ** 2);
console.log(finalnumbers);
const arrayToReduce = [1, 4, -1, -10, 5, 9, 10];
const arrayReduced = arrayToReduce
    .filter((number) => number > 0)
    .map((number) => number * 2)
    .reduce((acc, number) => acc + number, 0);
