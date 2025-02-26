let numbers = [1, 2, 3, 4, 5]

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i] * 2);
// }

//numbers.forEach(num => console.log(num**2));

// Loop through all numbers multiplying by 2
//numbers.forEach(num => console.log(num * 2));

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
interface Product20 {
    id: number;
    name: string;
    category: string;
    price: number;
    inStock: boolean;
    discounted_price?: number;
}

function filterAndTransformProduct20s(products: Product20[]) {
    let discounted_products: Product20[] = [];
    products
        .filter((product) => product.inStock === true)
        .forEach((product) => {
            product.discounted_price = product.price * 10 / 100
            discounted_products.push(product)
        });

    return discounted_products;
}

// const products: Product20[] = [
//     { id: 1, name: "Laptop", category: "Electronics", price: 1000, inStock: true },
//     { id: 2, name: "Desk Chair", category: "Furniture", price: 150, inStock: false },
//     { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: true },
//     { id: 4, name: "Headphones", category: "Electronics", price: 200, inStock: true },
// ];

// let discounted_products: Product20[] = filterAndTransformProduct20s(products);
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
        // console.log(employee.department);
        // console.log(departments)
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

// const employees: Employee[] = [
//     {
//         name: "Alice", department: "Engineering", projects: [
//             {
//                 name: "Project X",
//                 deadline: new Date(2025, 6, 15)
//             },
//             {
//                 name: "Project Y",
//                 deadline: new Date(2025, 7, 6),
//             }
//         ]
//     },

//     {
//         name: "Bob", department: "Marketing", projects: [
//             {
//                 name: "Project Y",
//                 deadline: new Date(2025, 7, 20)
//             }
//         ]
//     },

//     {
//         name: "Charlie", department: "Engineering", projects: [
//             {
//                 name: "Project Y",
//                 deadline: new Date(2025, 7, 20)
//             }
//         ]
//     },

//     { name: "David", department: "HR", projects: [] },

//     {
//         name: "Eve", department: "Engineering", projects: [
//             {
//                 name: "Project X",
//                 deadline: new Date(2025, 7, 7)
//             }
//         ]
//     },
// ];

// console.log(countEmployees(employees));

// console.log(mapEmployeesToProject(employees));


type Order20 = {
    id: number;
    customerName: string;
}

type Order20Extended = {
    items: {
        name: string,
        quantity: number,
    }[],
    totalAmount: number
} & Order20;


function processTotalOrder20sAndQuantities(orders: Order20Extended[]): Record<string, number>[] {
    let totalNumberofOrder20s: Record<string, number> = {}
    let quantityPerProduct20: Record<string, number> = {}

    orders.forEach(({ customerName, items }) => {
        totalNumberofOrder20s[customerName] = (totalNumberofOrder20s[customerName] || 0) + 1
        items.forEach(({ name, quantity }) => {
            quantityPerProduct20[name] = (quantityPerProduct20[name] || 0) + quantity
        })
    })

    // console.log(totalNumberofOrder20s)
    // console.log(quantityPerProduct20)
    return [totalNumberofOrder20s, quantityPerProduct20]
}


const orders: Order20Extended[] = [
    { id: 1, customerName: "Alice", items: [{ name: "Laptop", quantity: 1 }], totalAmount: 1000 },
    { id: 2, customerName: "Bob", items: [{ name: "Phone", quantity: 2 }], totalAmount: 1200 },
    { id: 3, customerName: "Alice", items: [{ name: "Mouse", quantity: 3 }, { name: "Laptop", quantity: 1 }], totalAmount: 200 },
    { id: 4, customerName: "David", items: [{ name: "Keyboard", quantity: 1 }], totalAmount: 150 },
    { id: 5, customerName: "Bob", items: [{ name: "Laptop", quantity: 1 }, { name: "Mouse", quantity: 2 }], totalAmount: 1300 },
];

// console.log(processTotalOrder20sAndQuantities(orders));



type NewStudent = {
    name: string;
    grade: string
}

type StudentExtended = NewStudent & {
    subjects: string[]
}

function studentsPerGradeStudentsPerSubject(students: StudentExtended[]): [Record<string, number>, Record<string, string[]>] {
    let numberOfStudentsPerGrade: Record<string, number> = {};
    let studentsPerSubject: Record<string, string[]> = {}
    students.forEach(({ name, grade, subjects }) => {
        numberOfStudentsPerGrade[grade] = (numberOfStudentsPerGrade[grade] || 0) + 1
        subjects.forEach((subject) => {
            if (subject in studentsPerSubject) {
                studentsPerSubject[subject].push(name);
            }
            else {
                studentsPerSubject[subject] = [name];
            }
        });
    })
    return [numberOfStudentsPerGrade, studentsPerSubject];
}

const studentsnow: StudentExtended[] = [
    { name: "Alice", grade: "Grade 10", subjects: ["Math", "Science"] },
    { name: "Bob", grade: "Grade 11", subjects: ["English", "History"] },
    { name: "Charlie", grade: "Grade 10", subjects: ["Math", "English"] },
    { name: "David", grade: "Grade 12", subjects: ["Science", "History"] },
    { name: "Eve", grade: "Grade 11", subjects: ["Math", "Science"] },
];


console.log(studentsPerGradeStudentsPerSubject(studentsnow));


interface ProjectCool {
    name: string;
    status: "completed" | "in-progress" | "on-hold";
    budget: number;
}

interface EmployeeDeepSeek {
    id: number;
    name: string;
    department: string;
    salary: number;
    projects: ProjectCool[];
}


function processEmployeeData(employees: EmployeeDeepSeek[]): EmployeeDeepSeek[] {
    let list: EmployeeDeepSeek[] = [];
    return list;
}





const employees: EmployeeDeepSeek[] = [
    {
        id: 1,
        name: "Alice",
        department: "Engineering",
        salary: 90000,
        projects: [
            { name: "Project A", status: "completed", budget: 5000 },
            { name: "Project B", status: "in-progress", budget: 8000 },
        ],
    },
    {
        id: 2,
        name: "Bob",
        department: "Marketing",
        salary: 75000,
        projects: [
            { name: "Project X", status: "completed", budget: 12000 },
            { name: "Project Y", status: "completed", budget: 3000 },
        ],
    },
    {
        id: 3,
        name: "Charlie",
        department: "Sales",
        salary: 85000,
        projects: [
            { name: "Project Z", status: "on-hold", budget: 15000 },
            { name: "Project W", status: "completed", budget: 2000 },
        ],
    },
];

















