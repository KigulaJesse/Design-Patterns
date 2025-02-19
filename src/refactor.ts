class LRUCacheNew<K,V>{
    private capacity: number;
    private cache: Map<K,V>;
  
    constructor(capacity: number) {
      this.capacity = capacity;
      this.cache = new Map();
    }
  
    get(key: K): V | number {
        if (!this.cache.has(key)) {
            return -1;
        }
        const value = this.cache.get(key)!;
        this.cache.delete(key);
        this.cache.set(key,value);
        return value;
    }
  
    set (key: K, value: V): void {
        if (this.cache.has(key)){
            this.cache.delete(key); // Delete this key because it will later be added to the front
        }
        if (this.cache.size >= this.capacity) {
            const oldestKey = this.cache.keys().next().value!; // Identify the oldest key on the map
            this.cache.delete(oldestKey); // Remove the least recently used item (first in the keys array)
        }
  
        this.cache.set(key, value) // Adds the key at the end, marking it as recently used
       
    }
  
    print(): void {
        console.log("Cache contents:");
        this.cache.forEach((value,key)=>console.log(`${key}: ${value}`))    
    }
}
  

const lruTest = new LRUCacheNew(2);
// lruTest.set("bar","Resty's");
// lruTest.set("restaurant","Lucky's");
// lruTest.set("school","Boom's")  ;
// lruTest.print();


interface Item {
    name: string;
    price: number;
}

class ShoppingCart {
    private items: Item[];
    private totalAmount: number;
  
    constructor() {
      this.items = [];
      this.totalAmount = 0;
    }
  
    addItem(item: Item): void {
      if (!item.name || !item.price || item.price <= 0) {
        console.log("Invalid item");
        return;
      }
  
      this.items.push(item);
      this.totalAmount += item.price;
      console.log(`Item added: ${item.name}`);
    }
  
    removeItem(itemName: string): void {
      const itemIndex = this.items.findIndex(item => item.name === itemName);
      if (itemIndex === -1) {
        console.log("Item not found");
        return;
      }
  
      this.totalAmount -= this.items[itemIndex].price;
      this.items.splice(itemIndex, 1);
      console.log(`Item removed: ${itemName}`);
    }
  
    getTotal(): number {
      return this.totalAmount;
    }
  
    printItems(): void {
        // console.log("");
        // console.log("Items in cart:");
        this.items.forEach(item => {
            console.log(`${item.name} - $${item.price}`);
        });
    }
}

const clientX = new ShoppingCart();
// clientX.addItem({name:"cup", price:10000})
// clientX.addItem({name:"tea", price:5000})
// clientX.addItem({name:"earphones", price:3000})
// clientX.addItem({name:"cup", price:10000})
// clientX.printItems()
// clientX.removeItem("cup")
// clientX.printItems()


interface User{
    id?: string
    name: string,
    email: string,
    age: number,
    address: string,
}

class UserManager {
    users: User[];
  
    constructor() {
        this.users = [];
    }
  
    addUser(user: User) {
        user.id = Math.random().toString(36).substr(2, 9)
        this.users.push(user);
        console.log("User added: " + user.name);
        return user;
    }
  
    findUser(email: string): User | null{
        return this.users.find((user)=> user.email === email) || null;
    }
  
    deleteUser(email: string) {
        let index = -1;
        index = this.users.findIndex((user)=> user.email === email);
        if (index !== -1) {
            this.users.splice(index, 1);
            console.log("User deleted: " + email);
        } else {
            console.log("User not found: " + email);
        }
    }
}
  









