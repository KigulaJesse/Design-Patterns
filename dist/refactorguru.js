"use strict";
class UserManager566 {
    constructor(users) {
        this.users = [];
        this.users = users;
    }
    getUser(id) {
        const foundUser = this.users.find((user) => user.id === id);
        return foundUser;
    }
    getUserDetails(id) {
        const foundUser = this.getUser(id);
        return foundUser ? `User: ${foundUser.name},Email: ${foundUser.email}, Age: ${foundUser.age}` : "User not found";
    }
    addUser(user) {
        this.users.push(user);
    }
    removeUser(id) {
        let index = this.users.findIndex((user) => user.id === id);
        if (index !== -1)
            this.users.splice(index, 1);
    }
    sendUserEmail(id, message) {
        let foundUser = this.getUser(id);
        foundUser ? console.log(`Sending email to ${foundUser.email}: ${message}`) : console.log("User not found");
    }
    generateUserReport(id) {
        let foundUser = this.getUser(id);
        return foundUser ? `Report for ${foundUser.name}:\n- Email: ${foundUser.email}\n- Age: ${foundUser.age}` : "User not found";
    }
}
class UserManager {
    constructor(users) {
        this.users = [];
        this.users = users;
    }
    getUserById(id) {
        let user = this.users.find(user => user.id === id);
        if (!user) {
            console.log("User not found");
        }
        return user;
    }
    addUser(id, name, age, email) {
        if (this.users.some(user => user.id === id)) {
            console.log("User already exists");
        }
        else {
            this.users.push({ id, name, age, email });
        }
    }
    updateUser(id, name, age, email) {
        let user = this.getUserById(id);
        if (user) {
            user.name = name;
            user.age = age;
            user.email = email;
        }
        else {
            console.log("User not found for update");
        }
    }
    deleteUser(id) {
        let index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
        }
        else {
            console.log("User not found for deletion");
        }
    }
    getAllUsersByAge(age) {
        let filteredUsers = this.users.filter(user => user.age === age);
        return filteredUsers;
    }
    getAllUsers() {
        return this.users;
    }
    getUserNames() {
        let names = this.users.map(user => user.name);
        return names;
    }
    sendEmailToUsers(subject, message) {
        for (let user of this.users) {
            console.log(`Sending email to ${user.email} with subject: ${subject} and message: ${message}`);
        }
    }
    countUsersByAge(age) {
        return this.users.filter(user => user.age === age).length;
    }
}
class ProductManager {
    constructor(products) {
        this.products = [];
        this.products = products;
    }
    getProductPerCategory() {
        this.products.reduce((categories, product) => {
            var _a;
            if (!categories.has(product.category)) {
                categories.set(product.category, []);
            }
            (_a = categories.get(product.category)) === null || _a === void 0 ? void 0 : _a.push(product);
            return categories;
        }, new Map());
    }
    // Get total price of all products
    getTotalPrice() {
        const total = this.products.reduce((total, product) => total + product.price, 0);
        return total;
    }
    // Get all products that are in a specific category with a discount greater than 10%
    getDiscountedProducts(category) {
        return this.products.filter((product) => product.category === category && product.discount > 10);
    }
    // Get a summary of the most expensive product per category
    getMostExpensiveProduct() {
        let result = {};
        this.products.forEach((product) => {
            var _a;
            if (!result[product.category] || ((_a = result[product.category]) === null || _a === void 0 ? void 0 : _a.price) < product.price) {
                result[product.category] = product;
            }
        });
        return result;
    }
    // Get average price of products in each category
    getAveragePriceByCategory() {
        const categoryPrices = {};
        this.products.forEach((product) => {
            if (!categoryPrices[product.category]) {
                categoryPrices[product.category] = { total: 0, count: 0 };
            }
            categoryPrices[product.category].total += product.price;
            categoryPrices[product.category].count++;
        });
        let averages = {};
        for (const category in categoryPrices) {
            averages[category] = categoryPrices[category].total / categoryPrices[category].count;
        }
        return averages;
    }
    // Get a list of all product names, sorted alphabetically
    getProductNamesSorted() {
        return this.products.map((product) => product.name).sort();
    }
    // Get the total discount for all products in a category
    getTotalDiscountForCategory(category) {
        return this.products
            .filter((product) => product.category === category)
            .map((product) => product.discount)
            .reduce((acc, discount) => acc + discount, 0);
    }
    // Get all products with a price above a certain threshold
    getExpensiveProducts(priceThreshold) {
        return this.products.filter((product) => product.price > priceThreshold);
    }
    // Get a list of all unique product categories
    getUniqueCategories() {
        return [...new Set(this.products.map((product) => product.category))];
    }
}
const sampleProducts = [
    { id: 1, name: "Laptop", price: 1500, category: "Electronics", discount: 5 },
    { id: 2, name: "Smartphone", price: 800, category: "Electronics", discount: 15 },
    { id: 3, name: "Headphones", price: 200, category: "Electronics", discount: 10 },
    { id: 4, name: "Shirt", price: 50, category: "Clothing", discount: 20 },
    { id: 5, name: "Jeans", price: 70, category: "Clothing", discount: 15 },
    { id: 6, name: "Coffee Maker", price: 100, category: "Home Appliances", discount: 8 },
    { id: 7, name: "Vacuum Cleaner", price: 300, category: "Home Appliances", discount: 12 },
    { id: 8, name: "Toaster", price: 40, category: "Home Appliances", discount: 5 },
    { id: 9, name: "Blender", price: 120, category: "Home Appliances", discount: 18 },
    { id: 10, name: "Tablet", price: 600, category: "Electronics", discount: 12 }
];
const manager = new ProductManager(sampleProducts);
class OrderManagement {
    constructor(orders) {
        this.orders = orders;
    }
    processOrder() {
        this.orders.reduce((summary, product) => {
        }, new Map);
    }
}
const orders20 = [
    {
        orderId: "001",
        customer: "Alice",
        orderDate: "2024-01-15",
        items: [
            { productId: "P001", quantity: 2, price: 50 },
            { productId: "P002", quantity: 1, price: 30 }
        ]
    },
    {
        orderId: "002",
        customer: "Jesse",
        orderDate: "2024-02-10",
        items: [
            { productId: "P001", quantity: 1, price: 50 },
            { productId: "P003", quantity: 4, price: 20 }
        ]
    },
    {
        orderId: "003",
        customer: "Peter",
        orderDate: "2024-07-10",
        items: [
            { productId: "P001", quantity: 6, price: 50 },
            { productId: "P003", quantity: 3, price: 20 }
        ]
    },
];
const ordermgmt = new OrderManagement(orders20);
console.log(ordermgmt.processOrder());
