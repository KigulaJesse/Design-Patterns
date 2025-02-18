class LRUCache <K,V>{
    private capacity: number;
    private cache: Map<K,V>;

    constructor(capacity: number){
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key: K): V | undefined {
        if (!this.cache.has(key)) return undefined;
        const value = this.cache.get(key)!;
        // We need to move this value to the front
        this.cache.delete(key);
        this.cache.set(key,value);
        return value;
    }

    put(key:K, value:V): void {
        if(this.cache.has(key)){
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity){
            console.log("1: ",this.cache.keys());
            console.log("2: ",this.cache.keys().next());
            console.log("3: ",this.cache.keys().next().value);
            const oldestKey = this.cache.keys().next().value!;
            this.cache.delete(oldestKey)
        }

        this.cache.set(key,value);
    }
}

const lruCache = new LRUCache<string,string>(3);
lruCache.put("foo", "bar");
lruCache.put("baz", "bar");
lruCache.put("name", "Jesse");
lruCache.put("age", "30");
lruCache.put("time", "40");
console.log(lruCache)