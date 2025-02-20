"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function processMessages(messages) {
    let processedMessages = [];
    for (let i = 0; i < messages.length; i++) {
        let message = messages[i];
        let formattedMessage = message.trim().toLowerCase();
        if (formattedMessage.length > 0) {
            let newMessage = formattedMessage.split(" ").join("-");
            processedMessages.push(newMessage);
        }
    }
    return processedMessages;
}
function processMessages2(messages) {
    let processedMessages = [];
    messages.forEach((message) => {
        processedMessages.push(message.trim().toLowerCase().split(" ").join("-"));
    });
    return processedMessages;
}
function filterAndSortData(data) {
    let filteredData = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] > 10) {
            filteredData.push(data[i]);
        }
    }
    filteredData.sort(function (a, b) {
        return a - b;
    });
    return filteredData;
}
function filterAndSortDataRefactored(data) {
    return data
        .filter((number) => number > 10)
        .sort((a, b) => a - b);
}
function findUniqueElements(arr) {
    let uniqueElements = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueElements.indexOf(arr[i]) === -1) {
            uniqueElements.push(arr[i]);
        }
    }
    return uniqueElements;
}
function findUniqueElementsRefactored(arr) {
    return [...new Set(arr)];
}
const arr = [1, 2, 2, 3, 4, 4, 5, "sjaaj"];
const arr1 = [4, 5, 6];
const arr2 = [8, 9, 6, 0];
const arr3 = [...arr1, ...arr2];
// console.log(arr3);
// console.log(findUniqueElementsRefactored(arr3));
function fetchData2(url) {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
        if (data.success) {
            return data.result;
        }
        else {
            throw new Error("Data fetch failed");
        }
    });
}
function fetchData2Refactored(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            const data = yield response.json();
            if (!data.success) {
                throw new Error("Data fetch failed");
            }
            return data.result;
        }
        catch (error) {
            console.log("Error fetching data:", error);
            throw (error);
        }
    });
}
class LRUCacheThird {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }
        const value = this.cache.get(key);
        if (value) {
            this.cache.delete(key);
            this.cache.set(key, value);
            return value;
        }
        return -1;
    }
    set(key, value) {
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
    remove(key) {
        this.cache.delete(key);
    }
    clearCache() {
        this.cache = new Map();
    }
    displayCache() {
        console.log(this.cache);
    }
    hasKey(key) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
            const value = this.cache.get(key);
            if (value)
                this.cache.set(key, value);
            return true;
        }
        return false;
    }
    size() {
        return this.cache.size;
    }
}
const lruThird = new LRUCacheThird(2);
lruThird.set("bar", "Ricky's");
lruThird.set("restaurant", "Pumba's");
lruThird.set("bar", "Timon's");
lruThird.set("school", "Pumba");
lruThird.displayCache();
