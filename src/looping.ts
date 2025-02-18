let numbers = [1, 2, 3, 4, 5]

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i] * 2);
// }

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
// students.forEach(student => console.log(student.name, student.averageGrade));

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
        .forEach((product) => {
            product.discounted_price = product.price * 10 / 100
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
// console.log(discounted_products);

interface Employee {
    name: string;
    department: string;
    projects: {
        name: string;
        deadline?: Date;
    }[]
}



function countEmployees(employees: Employee[]): Record<string, number> {
    let departments: Record<string, number> = {};

    employees.forEach((employee) => {
        console.log(employee.department);
        console.log(departments)
        if (employee.department in departments) {
            departments[employee.department] += 1
        } else {
            departments[employee.department] = 1
        }

    })

    return departments;
}

function mapEmployeesToProject(employees: Employee[]): Record<string, string[]> {
    let projectMapping: Record<string, string[]> = {};
    employees.forEach((employee) => {
        employee.projects.forEach((project) => {
            if (project.name in projectMapping) {
                projectMapping[project.name].push(employee.name);
            } else {
                projectMapping[project.name] = [employee.name]
            }
        })
    })
    return projectMapping;
}

const employees: Employee[] = [
    {
        name: "Alice", department: "Engineering", projects: [
            {
                name: "Project X",
                deadline: new Date(2025, 6, 15)
            },
            {
                name: "Project Y",
                deadline: new Date(2025, 7, 6),
            }
        ]
    },

    {
        name: "Bob", department: "Marketing", projects: [
            {
                name: "Project Y",
                deadline: new Date(2025, 7, 20)
            }
        ]
    },

    {
        name: "Charlie", department: "Engineering", projects: [
            {
                name: "Project Y",
                deadline: new Date(2025, 7, 20)
            }
        ]
    },

    { name: "David", department: "HR", projects: [] },

    {
        name: "Eve", department: "Engineering", projects: [
            {
                name: "Project X",
                deadline: new Date(2025, 7, 7)
            }
        ]
    },
];

// console.log(countEmployees(employees));

// console.log(mapEmployeesToProject(employees));


type Order = {
    id: number;
    customerName: string;
}

type OrderExtended = {
    items: {
        name: string,
        quantity: number,
    }[],
    totalAmount: number
} & Order;


function processTotalOrdersAndQuantities(orders: OrderExtended[]): Record<string,number>[]{
    let totalNumberofOrders: Record<string,number> = {}
    let quantityPerProduct: Record<string,number> = {}

    orders.forEach(({customerName, items})=>{
        totalNumberofOrders[customerName] = (totalNumberofOrders[customerName] || 0) + 1
        items.forEach(({name, quantity})=>{
            quantityPerProduct[name] = (quantityPerProduct[name] || 0) + quantity
        })
    })

    // console.log(totalNumberofOrders)
    // console.log(quantityPerProduct)
    return [totalNumberofOrders, quantityPerProduct]
}


const orders: OrderExtended[] = [
    { id: 1, customerName: "Alice", items: [{ name: "Laptop", quantity: 1 }], totalAmount: 1000 },
    { id: 2, customerName: "Bob", items: [{ name: "Phone", quantity: 2 }], totalAmount: 1200 },
    { id: 3, customerName: "Alice", items: [{ name: "Mouse", quantity: 3 }, { name: "Laptop", quantity: 1 }], totalAmount: 200 },
    { id: 4, customerName: "David", items: [{ name: "Keyboard", quantity: 1 }], totalAmount: 150 },
    { id: 5, customerName: "Bob", items: [{ name: "Laptop", quantity: 1 }, { name: "Mouse", quantity: 2 }], totalAmount: 1300 },
];

console.log(processTotalOrdersAndQuantities(orders));





