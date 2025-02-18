let numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2);
}

//numbers.forEach(num => console.log(num**2));

// Loop through all numbers multiplying by 2
numbers.forEach(num => console.log(num * 2));

// First real exercise using forEach.

interface Student {
    id: number;
    readonly name: string;
    phone?: string;
    courses: {
        name: string;
        grade: number;
    }[];
    averageGrade?: number;
}

function calculateAverageGrades(students: Student[]): Student[] {
    students.forEach((student) => {
        let totalGrade = 0;
        let numberOfGrades = 0;
        student.courses.forEach((course) => {
            totalGrade += course.grade;
            numberOfGrades += 1
        })
        student.averageGrade = totalGrade / numberOfGrades;
    })
    return students;
}

const students: Student[] = [{
    'id': 9900,
    'name': "Andrew Opio",
    'phone': '+2567777144354',
    'courses': [
        { 'name': 'Structured Programming', 'grade': 5 },
        { 'name': 'Artificial Intelligence', 'grade': 4 },
    ]
}, {
    'id': 7700,
    'name': "Ndyabagye Henry",
    'courses': [
        { 'name': 'Structured Programming', 'grade': 5 },
        { 'name': 'Distributed Systems', 'grade': 6 },
    ]
}]

calculateAverageGrades(students);
students.forEach(student => console.log(student.name, student.averageGrade));

//Second example of forEach
interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    inStock: boolean;
    discounted_price?: number;
}

function filterAndTransformProducts(products: Product[]) {
    let discounted_products: Product[] = [];
    products
        .filter((product) => product.inStock === true)
        .forEach((product)=> {
            product.discounted_price = product.price * 10/100
            discounted_products.push(product)
        });

    return discounted_products;
}

const products: Product[] = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1000, inStock: true },
    { id: 2, name: "Desk Chair", category: "Furniture", price: 150, inStock: false },
    { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: true },
    { id: 4, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  ];

let discounted_products: Product[] = filterAndTransformProducts(products);
console.log(discounted_products);
