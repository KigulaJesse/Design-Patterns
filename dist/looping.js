"use strict";
let numbers = [1, 2, 3, 4, 5];
function calculateAverageGrades(students) {
    students.forEach((student) => {
        let totalGrade = 0;
        let numberOfGrades = 0;
        student.courses.forEach((course) => {
            totalGrade += course.grade;
            numberOfGrades += 1;
        });
        student.averageGrade = totalGrade / numberOfGrades;
    });
    return students;
}
const students = [{
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
    }];
calculateAverageGrades(students);
function filterAndTransformProducts(products) {
    let discounted_products = [];
    products
        .filter((product) => product.inStock === true)
        .forEach((product) => {
        product.discounted_price = product.price * 10 / 100;
        discounted_products.push(product);
    });
    return discounted_products;
}
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1000, inStock: true },
    { id: 2, name: "Desk Chair", category: "Furniture", price: 150, inStock: false },
    { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: true },
    { id: 4, name: "Headphones", category: "Electronics", price: 200, inStock: true },
];
let discounted_products = filterAndTransformProducts(products);
function countEmployees(employees) {
    let departments = {};
    employees.forEach((employee) => {
        // console.log(employee.department);
        // console.log(departments)
        if (employee.department in departments) {
            departments[employee.department] += 1;
        }
        else {
            departments[employee.department] = 1;
        }
    });
    return departments;
}
function mapEmployeesToProject(employees) {
    let projectMapping = {};
    employees.forEach((employee) => {
        employee.projects.forEach((project) => {
            if (project.name in projectMapping) {
                projectMapping[project.name].push(employee.name);
            }
            else {
                projectMapping[project.name] = [employee.name];
            }
        });
    });
    return projectMapping;
}
const employees = [
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
function processTotalOrdersAndQuantities(orders) {
    let totalNumberofOrders = {};
    let quantityPerProduct = {};
    orders.forEach(({ customerName, items }) => {
        totalNumberofOrders[customerName] = (totalNumberofOrders[customerName] || 0) + 1;
        items.forEach(({ name, quantity }) => {
            quantityPerProduct[name] = (quantityPerProduct[name] || 0) + quantity;
        });
    });
    // console.log(totalNumberofOrders)
    // console.log(quantityPerProduct)
    return [totalNumberofOrders, quantityPerProduct];
}
const orders = [
    { id: 1, customerName: "Alice", items: [{ name: "Laptop", quantity: 1 }], totalAmount: 1000 },
    { id: 2, customerName: "Bob", items: [{ name: "Phone", quantity: 2 }], totalAmount: 1200 },
    { id: 3, customerName: "Alice", items: [{ name: "Mouse", quantity: 3 }, { name: "Laptop", quantity: 1 }], totalAmount: 200 },
    { id: 4, customerName: "David", items: [{ name: "Keyboard", quantity: 1 }], totalAmount: 150 },
    { id: 5, customerName: "Bob", items: [{ name: "Laptop", quantity: 1 }, { name: "Mouse", quantity: 2 }], totalAmount: 1300 },
];
function studentsPerGradeStudentsPerSubject(students) {
    let numberOfStudentsPerGrade = {};
    let studentsPerSubject = {};
    students.forEach(({ name, grade, subjects }) => {
        numberOfStudentsPerGrade[grade] = (numberOfStudentsPerGrade[grade] || 0) + 1;
        subjects.forEach((subject) => {
            if (subject in studentsPerSubject) {
                studentsPerSubject[subject].push(name);
            }
            else {
                studentsPerSubject[subject] = [name];
            }
        });
    });
    return [numberOfStudentsPerGrade, studentsPerSubject];
}
const studentsnow = [
    { name: "Alice", grade: "Grade 10", subjects: ["Math", "Science"] },
    { name: "Bob", grade: "Grade 11", subjects: ["English", "History"] },
    { name: "Charlie", grade: "Grade 10", subjects: ["Math", "English"] },
    { name: "David", grade: "Grade 12", subjects: ["Science", "History"] },
    { name: "Eve", grade: "Grade 11", subjects: ["Math", "Science"] },
];
console.log(studentsPerGradeStudentsPerSubject(studentsnow));
