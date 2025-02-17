//-------------Arrow Functions
//function add(a:number, b:number): number{
//	return a + b;
//}
const add = (a:number,b:number):number => (a + b);
//console.log(add(1,2));
const subtract = (x:number, b:number)=> (x-b);
//console.log(add(subtract(10,5),5));


//-------------Generic Returns
function identifyNumber(value:number):number{
	return value;
}

function identifyString(value:string):string{
	return value;
}

function identify<T>(value: T): T{
	return value;
}


//console.log(identifyNumber(5));
//console.log(identifyString("James"));
console.log(identify<string>("James"));
console.log(identify<number>(5));




