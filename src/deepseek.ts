//First code segment split functions
interface SampleUser2020 {
    name: string;
    age: number;
}

function printSampleUser2020(data: SampleUser2020): void {
    console.log(`User2020: ${data.name}, Age: ${data.age}`);
}

function processAdulthood(data: SampleUser2020): void {
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


//Third code segment, remove zip, address
type Zip = {
    code: string;
    plus4: string;
}

type Address = {
    street: string;
    city: string;
    zip: Zip;
}

type User2020Deep = {
    id: number;
    name: string;
    address: Address;
};

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

//Seventh Code Segment
interface Product20 {
    id: number;
    name: string;
}

interface Order20Boom {
    id: number;
    product: Product20;
};

//Eigth Code Segment
// function processItem20(item: string): void;
// function processItem20(item: number): void;
// function processItem20(item: boolean): void;
function processItem20(item: string | number | boolean): void {
    console.log(`Processing item: ${item}`);
}

//Ninth Code Segment
const config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
};

config.timeout = 10000;

//Tenth Code Segment
// enum Status {
//     Active,
//     Inactive,
//     Pending,
//     Cancelled,
//     Archived,
//     Deleted,
// }

type status = "Active" | "Inactive" | "Pending" | "Cancelled" | "Archived" | "Deleted"


//Eleventh Code Segment
const counter = 0;

//Twelveth Code Segment
function calculateTotal(price: number, discount?: number) {
    if (discount) return price - discount;
}


//Thirteenth Code Segment
const User2020s = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 17 },
];

User2020s.push({ id: 3, name: 'Charlie', age: 30 });


const numberssj = [10, 20, 30, 40];

const first = numberssj.shift(); // Removes 10
console.log(first); // 10
console.log(numberssj); //