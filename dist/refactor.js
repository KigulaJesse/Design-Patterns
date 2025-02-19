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
