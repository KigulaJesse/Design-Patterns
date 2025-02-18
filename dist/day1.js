"use strict";
const kolaemployee = {
    name: "Kezekia",
    login: "knduhura@kolapro.com",
    pin: 1234,
};
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user = new UserAccount("Murphy", 1);
const bird1 = { wings: 2 };
const bird2 = { wings: 2 };
// console.log("Bird1",bird1.wings);
// console.log("Bird2: ",bird2.wings);
const bird3 = bird1;
let owl = { wings: 2, nocturnal: true };
let chicken = { wings: 2, colourful: false };
// console.log("Owl: ",owl.wings," ",owl.nocturnal);
// console.log("Chicken: ",chicken.wings);
// owl = chicken;
// chicken = owl;
function getBird(bird) {
    return `This bird has ${bird.name}`;
}
function getBird2() {
    let chicken2 = { wings: 2, colourful: false, flies: false };
    return chicken2;
}
const donaldduck = { name: "Donald Duck", wings: 2, nocturnal: false };
//console.log(getBird(donaldduck));
var names = ["Rena", "Jesse", "John"];
let cousin = {
    'name': "Jordie",
    'age': 24,
    'city': 'Kampala',
};
for (let key in cousin) {
    console.log(`${key}`);
}
if (names.length > 0) {
    var names = ['Pat', 'Hannah', 'Andrew', 'Solomon'];
    console.log(names);
}
// Simple fors in TypeScript
for (let name of names) {
    // Returns actual value
    console.log(name);
}
for (let key in names) {
    // Returns actual value but uses keys
    console.log(names[key]);
}
