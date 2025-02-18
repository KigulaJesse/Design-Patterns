"use strict";
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new ListNode(0, 0); // Dummy head node
        this.tail = new ListNode(0, 0); // Dummy tail node
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    // Get the value from the cache.
    get(key) {
        if (!this.map.has(key)) {
            return -1;
        }
        const node = this.map.get(key);
        this.moveToFront(node);
        return node.value;
    }
    // Put a key-value pair in the cache.
    put(key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            node.value = value;
            this.moveToFront(node);
        }
        else {
            if (this.map.size >= this.capacity) {
                this.removeLRU();
            }
            const newNode = new ListNode(key, value);
            this.map.set(key, newNode);
            this.addToFront(newNode);
        }
    }
    // Move the given node to the front (most recent).
    moveToFront(node) {
        this.removeNode(node);
        this.addToFront(node);
    }
    // Remove the given node from the list.
    removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    // Add the given node right after the head (most recent).
    addToFront(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }
    // Remove the least recently used node (right before the tail).
    removeLRU() {
        const lruNode = this.tail.prev;
        this.removeNode(lruNode);
        this.map.delete(lruNode.key);
    }
}
class ListNode {
    constructor(key, value) {
        this.prev = null;
        this.next = null;
        this.key = key;
        this.value = value;
    }
}
// Example usage:
const cache = new LRUCache(2);
cache.put(1, 1); // Cache is {1=1}
cache.put(2, 2); // Cache is {1=1, 2=2}
console.log(cache.get(1)); // returns 1, Cache is {2=2, 1=1}
cache.put(3, 3); // Evicts key 2, Cache is {1=1, 3=3}
console.log(cache.get(2)); // returns -1 (not found)
cache.put(4, 4); // Evicts key 1, Cache is {3=3, 4=4}
console.log(cache.get(1)); // returns -1 (not found)
console.log(cache.get(3)); // returns 3, Cache is {4=4, 3=3}
console.log(cache.get(4)); // returns 4, Cache is {3=3, 4=4}
