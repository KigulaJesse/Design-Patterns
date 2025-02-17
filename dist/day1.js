"use strict";
const kolaemployee = {
    name: "Kezekia",
    login: "knduhura@kolapro.com",
    pin: 1234,
};
console.log(kolaemployee.name);
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user = new UserAccount("Murphy", 1);
const bird1 = { wings: 3 };
const bird2 = { wings: 5 };
console.log("Bird1", bird1.wings);
console.log("Bird2: ", bird2.wings);
const bird3 = bird1;
console.log("Bird3: ", bird3.wings);
let owl = { wings: 2 };
let chicken = { wings: 2 };
console.log("Owl: ", owl.wings, " ", owl.nocturnal);
console.log("Chicken: ", chicken.wings);
