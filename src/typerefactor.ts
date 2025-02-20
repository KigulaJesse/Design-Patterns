function processMessages(messages: string[]): string[] {
    let processedMessages: string[] = [];
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

function processMessages2(messages: string[]): string[] {
    let processedMessages: string[] = [];
    messages.forEach((message) => {
        processedMessages.push(message.trim().toLowerCase().split(" ").join("-"));
    })
    return processedMessages;
}

function filterAndSortData(data: number[]): number[] {
    let filteredData: number[] = [];
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

function filterAndSortDataRefactored(data: number[]): number[] {
    return data
        .filter((number) => number > 10)
        .sort((a, b) => a - b);
}


function findUniqueElements(arr: any[]): any[] {
    let uniqueElements: any[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueElements.indexOf(arr[i]) === -1) {
            uniqueElements.push(arr[i]);
        }
    }
    return uniqueElements;
}

function findUniqueElementsRefactored(arr: any[]) {
    return [...new Set(arr)];
}


const arr = [1, 2, 2, 3, 4, 4, 5, "sjaaj"];
const arr1 = [4,5,6];
const arr2 = [8,9,6,0];
const arr3 = [...arr1, ...arr2]
// console.log(arr3);
// console.log(findUniqueElementsRefactored(arr3));




function fetchData2(url: string): Promise<any> {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                return data.result;
            } else {
                throw new Error("Data fetch failed");
            }
        });
}

async function fetchData2Refactored(url:string): Promise<any>{
    try{
        const response = await fetch(url);
        const data = await response.json()
        if (!data.success){
            throw new Error("Data fetch failed");
        }
        return data.result;
    } catch (error){
        console.log("Error fetching data:", error);
        throw(error);
    }
}



class LRUCacheThird<K,V>{
    private cache: Map<K,V>;
    private capacity: number;
    
    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key: K): V | number{
        if(!this.cache.has(key)){
            return -1;
        }
        const value = this.cache.get(key);
        if (value){
            this.cache.delete(key);
            this.cache.set(key,value)
            return value;
        }
        return -1;
    }

    set(key: K, value: V): void {
        if(this.cache.has(key)){
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            let oldestKey = this.cache.keys().next().value;
            if (oldestKey){
                this.cache.delete(oldestKey);
            }
        }
        this.cache.set(key,value);
    }

    remove(key: K): void {
        this.cache.delete(key);
    }

    clearCache(): void {
        this.cache = new Map();
    }

    displayCache(): void {
        console.log(this.cache);
    }

    hasKey(key: any): boolean {
        if (this.cache.has(key)) {
            this.cache.delete(key);
            const value = this.cache.get(key);
            if(value) this.cache.set(key,value);
            return true;
        }
        return false;
    }

    size(): number {
        return this.cache.size;
    }
}

const lruThird = new LRUCacheThird(2);
lruThird.set("bar","Ricky's");
lruThird.set("restaurant","Pumba's");
lruThird.set("bar","Timon's");
lruThird.set("school","Pumba");
lruThird.displayCache();

