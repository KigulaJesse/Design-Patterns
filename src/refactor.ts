class LRUCacheSmells {
    private capacity: number;
    private cache: any;
    private order: any[];
  
    constructor(capacity: number) {
      this.capacity = capacity;
      this.cache = {};
      this.order = [];
    }
  
    get(key: string): any {
      if (this.cache[key] === undefined) {
        return -1;
      }
      
      // Re-order the cache (not efficient)
      this.order.push(key);
      return this.cache[key];
    }
  
    set(key: string, value: any): void {
      if (Object.keys(this.cache).length >= this.capacity) {
        const oldestKey = this.order.shift();
        delete this.cache[oldestKey];
      }
  
      this.cache[key] = value;
      this.order.push(key);
    }
  
    remove(key: string): void {
      if (this.cache[key] !== undefined) {
        delete this.cache[key];
        this.order = this.order.filter((k: string) => k !== key);
      }
    }
  
    printCache(): void {
      console.log("Current cache state:");
      for (let key in this.cache) {
        console.log(`${key}: ${this.cache[key]}`);
      }
    }
  }
  