"use strict";
class LRUCacheCongo {
    constructor(size) {
        this.maxSize = size;
        this.cache = new Map();
    }
    get(key) {
        if (!this.cache.has(key)) {
            return undefined;
        }
        const value = this.cache.get(key);
        if (value) {
            this.cache.delete(key);
            this.cache.set(key, value);
        }
        return value;
    }
    // Put a value into the cache
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        if (this.cache.size >= this.maxSize) {
            let oldestKey = this.cache.keys().next().value;
            if (oldestKey)
                this.cache.delete(oldestKey);
        }
        this.cache.set(key, value);
    }
}
// Example Usage:
const cache = new LRUCacheCongo(3);
cache.put(1, 10);
cache.put(2, 20);
cache.put(3, 30);
console.log(cache.get(2)); // 20 (Moves key 2 to recent)
cache.put(4, 40); // Removes LRU key (1)
console.log(cache.get(1)); // undefined
