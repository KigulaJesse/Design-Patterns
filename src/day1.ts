interface ResUser1 {
	name: string;
	login: string;
}

type ResUser2 = {
	name: string;
	login: string;
}

interface Employee extends ResUser1 {
	pin: number;
}

const kolaemployee : Employee = {
	name: "Kezekia",
	login: "knduhura@kolapro.com",
	pin: 1234,
}

console.log(kolaemployee.name);





interface User {
	name:string;
	id: number;
}

class UserAccount {
	name: string;
	id: number
	
	constructor(name: string, id: number){
		this.name = name;
		this.id = id;
	}	
}

const user: User = new UserAccount("Murphy", 1);

//Types vs Interface

type BirdType = {
	wings: 2;
}

interface BirdInterface {
	wings: 2;
}

const bird1: BirdType = {wings: 2};
const bird2: BirdInterface = {wings: 2};

console.log("Bird1",bird1.wings);
console.log("Bird2: ",bird2.wings);

const bird3: BirdInterface = bird1;
console.log("Bird3: ",bird3.wings)

//Extension of Types and Interfaces
type Owl = {nocturnal: true} & BirdType;
type Robin = {nocturnal: false} & BirdInterface;

interface Peacock extends BirdType {
	colourful: true;
	flies: false;
}

interface Chicken extends BirdInterface {
	colourful: false;
	flies: false;
}

let owl: Owl = {wings: 2, nocturnal: true};
let chicken: Chicken = {wings:2, colourful:false, flies: false};

console.log("Owl: ",owl.wings," ",owl.nocturnal);
console.log("Chicken: ",chicken.wings);

















