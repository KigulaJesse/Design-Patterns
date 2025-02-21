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
function filterAndTransformProduct20s(products) {
    let discounted_products = [];
    products
        .filter((product) => product.inStock === true)
        .forEach((product) => {
        product.discounted_price = product.price * 10 / 100;
        discounted_products.push(product);
    });
    return discounted_products;
}
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
function processTotalOrder20sAndQuantities(orders) {
    let totalNumberofOrder20s = {};
    let quantityPerProduct20 = {};
    orders.forEach(({ customerName, items }) => {
        totalNumberofOrder20s[customerName] = (totalNumberofOrder20s[customerName] || 0) + 1;
        items.forEach(({ name, quantity }) => {
            quantityPerProduct20[name] = (quantityPerProduct20[name] || 0) + quantity;
        });
    });
    // console.log(totalNumberofOrder20s)
    // console.log(quantityPerProduct20)
    return [totalNumberofOrder20s, quantityPerProduct20];
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
function processEmployeeData(employees) {
    let list = [];
    return list;
}
const employees = [
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
