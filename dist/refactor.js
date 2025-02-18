"use strict";
class LRUCacheSmells {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = {};
        this.order = [];
    }
    get(key) {
        if (this.cache[key] === undefined) {
            return -1;
        }
        // Re-order the cache (not efficient)
        this.order.push(key);
        return this.cache[key];
    }
    set(key, value) {
        if (Object.keys(this.cache).length >= this.capacity) {
            const oldestKey = this.order.shift();
            delete this.cache[oldestKey];
        }
        this.cache[key] = value;
        this.order.push(key);
    }
    remove(key) {
        if (this.cache[key] !== undefined) {
            delete this.cache[key];
            this.order = this.order.filter((k) => k !== key);
        }
    }
    printCache() {
        console.log("Current cache state:");
        for (let key in this.cache) {
            console.log(`${key}: ${this.cache[key]}`);
        }
    }
}
