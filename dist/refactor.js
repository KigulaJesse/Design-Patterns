"use strict";
class LRUCacheNew {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }
    set(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key); // Delete this key because it will later be added to the front
        }
        if (this.cache.size >= this.capacity) {
            const oldestKey = this.cache.keys().next().value; // Identify the oldest key on the map
            this.cache.delete(oldestKey); // Remove the least recently used item (first in the keys array)
        }
        this.cache.set(key, value); // Adds the key at the end, marking it as recently used
    }
    print() {
        console.log("Cache contents:");
        this.cache.forEach((value, key) => console.log(`${key}: ${value}`));
    }
}
const lruTest = new LRUCacheNew(2);
class ShoppingCart {
    constructor() {
        this.items = [];
        this.totalAmount = 0;
    }
    addItem(item) {
        if (!item.name || !item.price || item.price <= 0) {
            console.log("Invalid item");
            return;
        }
        this.items.push(item);
        this.totalAmount += item.price;
        console.log(`Item added: ${item.name}`);
    }
    removeItem(itemName) {
        const itemIndex = this.items.findIndex(item => item.name === itemName);
        if (itemIndex === -1) {
            console.log("Item not found");
            return;
        }
        this.totalAmount -= this.items[itemIndex].price;
        this.items.splice(itemIndex, 1);
        console.log(`Item removed: ${itemName}`);
    }
    getTotal() {
        return this.totalAmount;
    }
    printItems() {
        // console.log("");
        // console.log("Items in cart:");
        this.items.forEach(item => {
            console.log(`${item.name} - $${item.price}`);
        });
    }
}
const clientX = new ShoppingCart();
class UserManager {
    constructor() {
        this.users = [];
    }
    addUser(user) {
        user.id = Math.random().toString(36).substr(2, 9);
        this.users.push(user);
        console.log("User added: " + user.name);
        return user;
    }
    findUser(email) {
        return this.users.find((user) => user.email === email) || null;
    }
    deleteUser(email) {
        let index = -1;
        index = this.users.findIndex((user) => user.email === email);
        if (index !== -1) {
            this.users.splice(index, 1);
            console.log("User deleted: " + email);
        }
        else {
            console.log("User not found: " + email);
        }
    }
}
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
class Cart {
    constructor() {
        this.items = [];
    }
    addItem(product) {
        let found = false;
        this.items.find((item) => {
            if (item.name === product.name) {
                found = true;
            }
        });
        if (!found) {
            this.items.push(product);
        }
        console.log("Item added: " + product.name);
    }
    removeItem(productName) {
        let index = this.items.findIndex((item) => item.name === productName);
        if (index !== -1) {
            this.items.splice(index, 1);
            console.log("Item removed: " + productName);
        }
        else {
            console.log("Item not found: " + productName);
        }
    }
    getTotal() {
        let total = this.items.reduce((total, item) => total + item.price * item.quantity, 0);
        return total;
    }
}
class Employee {
    constructor(name, age, position, salary) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
class EmployeeManager {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
        console.log("Employee added: " + employee.name);
    }
    getEmployee(name) {
        return this.employees.find((employee) => employee.name === name) || null;
    }
    removeEmployee(name) {
        let index = this.employees.findIndex((employee) => employee.name === name);
        return index !== -1 ? (this.employees.splice(index, 1), "Employee removed: " + name) : "Employee not found: " + name;
    }
    getTotalSalaries() {
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }
}
class Task {
    constructor(title, description, dueDate, priority, completed) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
    }
    markCompleted() {
        this.completed = true;
        // console.log("Task marked as completed: " + this.title);
    }
}
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
        return "Task added: " + task.title;
    }
    getTask(title) {
        return this.tasks.find((task) => task.title === title) || null;
    }
    removeTask(title) {
        let index = this.tasks.findIndex((task) => task.title === title);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return "Task removed: " + title;
        }
        else {
            return "Task not found: " + title;
        }
    }
    listPendingTasks() {
        let pendingTasks = this.tasks.map((task) => task.completed === true);
        return pendingTasks;
    }
    listTasksByPriority(priority) {
        let priorityTasks = [];
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].priority === priority) {
                priorityTasks.push(this.tasks[i]);
            }
        }
        return priorityTasks;
    }
}
class UserBoom {
    constructor(id, name, email, password, isAdmin) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
    }
    getUserDetails() {
        return `User: ${this.name}, Email: ${this.email}, Admin: ${this.isAdmin ? "Yes" : "No"}`;
    }
}
class UserService {
    constructor() {
        this.users = [];
    }
    addUser(user) {
        this.users.push(user);
    }
    findUserByEmail(email) {
        return this.users.find((user) => user.email === email) || null;
    }
    deleteUser(email) {
        let index = this.users.findIndex((user) => user.email === email);
        if (index > -1) {
            this.users.splice(index, 1);
        }
    }
    getUserDetails() {
        return this.users.map((user) => user.getUserDetails());
    }
}
const userService = new UserService();
userService.addUser(new UserBoom(1, "John Doe", "john@example.com", "password123", false));
userService.addUser(new UserBoom(2, "Jane Smith", "jane@example.com", "securepass", true));
// console.log(userService.getUserDetails());
// console.log(userService.findUserByEmail("john@example.com"));
// userService.deleteUser("john@example.com");
// console.log(userService.getUserDetails());
class LRUCacheRefactor1 {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    get(key) {
        if (!this.cache.has(key)) {
            return null;
        }
        let value = this.cache.get(key);
        this.cache.delete(key);
        if (value) {
            this.cache.set(key, value);
        }
        return value || null;
    }
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        else if (this.cache.size >= this.capacity) {
            let oldestKey = this.cache.keys().next().value;
            if (oldestKey) {
                this.cache.delete(oldestKey);
            }
        }
        this.cache.set(key, value);
    }
}
const lru = new LRUCacheRefactor1("3");
lru.put(1, "one");
lru.put(2, "two");
lru.put(3, "three");
// console.log(lru.get(2));
lru.put(4, "four");
class EmployeeManagementBoom {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        const employeeExists = this.employees.some((employeeboom) => employeeboom.id === employee.id);
        if (employeeExists) {
            return "Employee Exists";
        }
        this.employees.push(employee);
        return "Employee Added";
    }
    getAllEmployees() {
        return this.employees;
    }
    getEmployeesByDepartment() {
        let employeesByDepartment = {};
        this.employees.forEach((employee) => {
            if (employeesByDepartment[employee.department]) {
                employeesByDepartment[employee.department].push(employee.name);
            }
            else {
                employeesByDepartment[employee.department] = [employee.name];
            }
        });
        return employeesByDepartment;
    }
    getHighestPaidEmployee() {
        let employee = this.employees.reduce((highest, employee) => {
            return (highest.salary < employee.salary) ? highest : employee;
        });
        return employee;
    }
    getAverageSalaryDepartment() {
        let totalsPerDepartment = {};
        this.employees.map((employee) => {
            if (!totalsPerDepartment[employee.department]) {
                totalsPerDepartment[employee.department] = { totalSalary: 0, employeeCount: 0 };
            }
            totalsPerDepartment[employee.department]['totalSalary'] = totalsPerDepartment[employee.department]['totalSalary'] + employee.salary;
            totalsPerDepartment[employee.department]['employeeCount'] += 1;
        });
        const averageSalaries = {};
        for (const department in totalsPerDepartment) {
            const { totalSalary, employeeCount } = totalsPerDepartment[department];
            averageSalaries[department] = totalSalary / employeeCount; // Calculate average
        }
        return averageSalaries;
    }
}
const employeesRefactor1 = [
    { id: 1, name: 'Alice', department: 'Engineering', salary: 90000, joinDate: new Date(2022, 3, 15) },
    { id: 2, name: 'Bob', department: 'Marketing', salary: 80000, joinDate: new Date(2021, 5, 20) },
    { id: 3, name: 'Charlie', department: 'Engineering', salary: 100000, joinDate: new Date(2023, 2, 10) },
    { id: 4, name: 'David', department: 'HR', salary: 75000, joinDate: new Date(2020, 12, 5) },
    { id: 5, name: 'Eve', department: 'Engineering', salary: 110000, joinDate: new Date(2021, 6, 25) }
];
const empmgmt = new EmployeeManagementBoom();
employeesRefactor1.forEach((employee) => empmgmt.addEmployee(employee));
// console.log(empmgmt.getAllEmployees());
// console.log(empmgmt.getEmployeesByDepartment());
// console.log(empmgmt.getHighestPaidEmployee());
console.log(empmgmt.getAverageSalaryDepartment());
