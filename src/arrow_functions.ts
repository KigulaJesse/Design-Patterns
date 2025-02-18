//First example of an arrow function using addition
const add = (a: number, b: number): number => {
	return a + b;
};

console.log(add(5, 10));

// A casual greeting my fellow coder
const greet = (name: string) => "Hello " + name;
console.log(greet("James"))

class Person {
	name = "Alice";

	sayHello() {
		setTimeout(() => {
			console.log("Hello "+ this.name);
		}, 1000);
	}
}

new Person().sayHello();


