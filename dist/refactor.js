"use strict";
class LRUCacheTest {
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
            this.cache.delete(key);
        }
        else if (this.cache.size >= this.capacity) {
            let oldestkey = this.cache.keys().next().value;
            this.cache.delete(oldestkey);
        }
        this.cache.set(key, value);
    }
    printCache() {
        console.log("Current cache state:");
        this.cache.forEach((value, key) => console.log(`${key}: ${value}`));
    }
}
const lruTest = new LRUCacheTest(2);
lruTest.set("bar", "Ricky's");
lruTest.set("restaurant", "Humphrey's");
lruTest.set("school", "City Parents' School");
lruTest.printCache();
