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
        console.log("Task marked as completed: " + this.title);
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
