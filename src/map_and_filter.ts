interface Relative {
    readonly name: string;
    DoB?: Date;
    type: "Uncle" | "Aunt" | "Cousin";
    married: true | false;
}

const relatives: Relative[] = [
    { name: "John Ssenyonyi", type: "Uncle", married: true },
    { name: "Ruth Ssenyonyi", type: "Aunt", married: true },
    { name: "Julian Nyombi", type: "Aunt", married: true },
    { name: "Solomon Nyombi", DoB: new Date(1996, 11, 3), type: "Cousin", married: false },
]

type RelativeTypeCount = {
    type: "Uncle" | "Aunt" | "Cousin";
    number: number
}



// Strings to Uppercase
const petrolstations: string[] = ["Rubix", "Shell", "Total", 'Oryx']
const upperPetrol = petrolstations.map(petrolstation => petrolstation.toUpperCase());
console.log(upperPetrol);

//Takes numbers and returns array of objects with squares.
class Squared {
    evenNumber: number;
    square: number;
    constructor(evenNumber: number, square:number){
        this.evenNumber = evenNumber;
        this.square = square;
    }
}
const evennumbers: number[] = [2, 4, 6, 8]
const evenobject = evennumbers.map((evennumber) => {
    return new Squared(evennumber, evennumber ** 2)
})
console.log(evenobject);

//Get evennumbers
const booms: number[] = [1,2,3,4,2,22010,3030]
const evenbooms = booms.filter((boom)=>boom%2===0)
console.log(evenbooms);


//Get adults
class Human {
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

const humans: Human[] = [
    new Human("James", 30),
    new Human("John", 4),
    new Human("Orla", 45),
    new Human("Daniella", 16),
    new Human("Sinza", 12),
]

const adults = humans.filter(({name,age})=> age > 18);
console.log(adults)


const randomnumbers: number[] = [1, 45, 60, 4, 7, 9, 12]

const finalnumbers = randomnumbers
                        .filter((number) => number < 10)
                        .map((number) => number**2);

console.log(finalnumbers)


const arrayToReduce = [1,4,-1,-10,5,9,10];

const arrayReduced = arrayToReduce
                        .filter((number)=> number > 0)
                        .map((number) => number *2)
                        .reduce((acc,number) => acc + number,0 )









