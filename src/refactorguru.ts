
interface User566 {
    id: number;
    name: string;
    email: string;
    age: number
}


class UserManager566 {
    private users: User566[] = [];

    constructor(users: User566[]) {
        this.users = users;
    }

    getUser(id: number): User566 | undefined {
        const foundUser = this.users.find((user) => user.id === id);
        return foundUser;
    }

    getUserDetails(id: number): string {
        const foundUser = this.getUser(id);
        return foundUser ? `User: ${foundUser.name},Email: ${foundUser.email}, Age: ${foundUser.age}` : "User not found";
    }

    addUser(user: User566): void {
        this.users.push(user);
    }

    removeUser(id: number): void {
        let index = this.users.findIndex((user) => user.id === id);
        if (index !== -1) this.users.splice(index, 1);
    }

    sendUserEmail(id: number, message: string): void {
        let foundUser = this.getUser(id);
        foundUser ? console.log(`Sending email to ${foundUser.email}: ${message}`) : console.log("User not found");
    }

    generateUserReport(id: number): string {
        let foundUser = this.getUser(id);
        return foundUser ? `Report for ${foundUser.name}:\n- Email: ${foundUser.email}\n- Age: ${foundUser.age}` : "User not found";
    }
}

interface User890 {
    id: number;
    name: string;
    age: number;
    email: string
}


class UserManager {
    private users: User890[] = [];

    constructor(users: User890[]) {
        this.users = users;
    }

    getUserById(id: number): User890 | undefined {
        let user = this.users.find(user => user.id === id);
        if (!user) {
            console.log("User not found");
        }
        return user;
    }

    addUser(id: number, name: string, age: number, email: string): void {
        if (this.users.some(user => user.id === id)) {
            console.log("User already exists");
        } else {
            this.users.push({ id, name, age, email });
        }
    }

    updateUser(id: number, name: string, age: number, email: string): void {
        let user = this.getUserById(id);
        if (user) {
            user.name = name;
            user.age = age;
            user.email = email;
        } else {
            console.log("User not found for update");
        }
    }

    deleteUser(id: number): void {
        let index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
        } else {
            console.log("User not found for deletion");
        }
    }

    getAllUsersByAge(age: number): { id: number, name: string, age: number, email: string }[] {
        let filteredUsers = this.users.filter(user => user.age === age);
        return filteredUsers;
    }

    getAllUsers(): { id: number, name: string, age: number, email: string }[] {
        return this.users;
    }

    getUserNames(): string[] {
        let names = this.users.map(user => user.name);
        return names;
    }

    sendEmailToUsers(subject: string, message: string): void {
        for (let user of this.users) {
            console.log(`Sending email to ${user.email} with subject: ${subject} and message: ${message}`);
        }
    }

    countUsersByAge(age: number): number {
        return this.users.filter(user => user.age === age).length;
    }
}





interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    discount: number;
}

class ProductManager {
    private products: Product[] = [];

    constructor(products: Product[]) {
        this.products = products;
    }

    getProductPerCategory() {
        this.products.reduce((categories, product) => {
            if (!categories.has(product.category)) {
                categories.set(product.category, [])
            }
            categories.get(product.category)?.push(product);
            return categories;
        }, new Map<string, Product[]>());
    }

    // Get total price of all products
    getTotalPrice(): number {
        const total = this.products.reduce((total, product) => total + product.price, 0);
        return total;
    }

    // Get all products that are in a specific category with a discount greater than 10%
    getDiscountedProducts(category: string): Product[] {
        return this.products.filter((product) => product.category === category && product.discount > 10);
    }

    // Get a summary of the most expensive product per category
    getMostExpensiveProduct(): { [category: string]: Product | undefined } {
        let result: { [category: string]: Product | undefined } = {};
        this.products.forEach((product) => {
            if (!result[product.category] || result[product.category]?.price < product.price) {
                result[product.category] = product;
            }
        });
        return result;
    }

    // Get average price of products in each category
    getAveragePriceByCategory(): { [category: string]: number } {
        const categoryPrices: { [category: string]: { total: number; count: number } } = {};

        this.products.forEach((product) => {
            if (!categoryPrices[product.category]) {
                categoryPrices[product.category] = { total: 0, count: 0 };
            }
            categoryPrices[product.category].total += product.price;
            categoryPrices[product.category].count++;
        });

        let averages: { [category: string]: number } = {};
        for (const category in categoryPrices) {
            averages[category] = categoryPrices[category].total / categoryPrices[category].count;
        }

        return averages;
    }

    // Get a list of all product names, sorted alphabetically
    getProductNamesSorted(): string[] {
        return this.products.map((product) => product.name).sort();
    }

    // Get the total discount for all products in a category
    getTotalDiscountForCategory(category: string): number {
        return this.products
            .filter((product) => product.category === category)
            .map((product) => product.discount)
            .reduce((acc, discount) => acc + discount, 0);
    }

    // Get all products with a price above a certain threshold
    getExpensiveProducts(priceThreshold: number): Product[] {
        return this.products.filter((product) => product.price > priceThreshold);
    }

    // Get a list of all unique product categories
    getUniqueCategories(): string[] {
        return [...new Set(this.products.map((product) => product.category))];
    }
}


const sampleProducts: Product[] = [
    { id: 1, name: "Laptop", price: 1500, category: "Electronics", discount: 5 },
    { id: 2, name: "Smartphone", price: 800, category: "Electronics", discount: 15 },
    { id: 3, name: "Headphones", price: 200, category: "Electronics", discount: 10 },
    { id: 4, name: "Shirt", price: 50, category: "Clothing", discount: 20 },
    { id: 5, name: "Jeans", price: 70, category: "Clothing", discount: 15 },
    { id: 6, name: "Coffee Maker", price: 100, category: "Home Appliances", discount: 8 },
    { id: 7, name: "Vacuum Cleaner", price: 300, category: "Home Appliances", discount: 12 },
    { id: 8, name: "Toaster", price: 40, category: "Home Appliances", discount: 5 },
    { id: 9, name: "Blender", price: 120, category: "Home Appliances", discount: 18 },
    { id: 10, name: "Tablet", price: 600, category: "Electronics", discount: 12 }
];

const manager = new ProductManager(sampleProducts);

// Test cases
// console.log("Total Price:", manager.getTotalPrice());
// console.log("Discounted Electronics Products:", manager.getDiscountedProducts("Electronics"));
// console.log("Most Expensive Product per Category:", manager.getMostExpensiveProduct());
// console.log("Average Price by Category:", manager.getAveragePriceByCategory());
// console.log("Product Names Sorted:", manager.getProductNamesSorted());
// console.log("Total Discount for Clothing:", manager.getTotalDiscountForCategory("Clothing"));
// console.log("Products Above $500:", manager.getExpensiveProducts(500));
// console.log("Unique Categories:", manager.getUniqueCategories());



interface Item {
    productId: string;
    quantity: number;
    price: number;
}

interface Order {
    orderId: string;
    customer: string;
    items: Item[];
    orderDate: string;
}

interface ProductSaleBreakdown{
    productId: string;
    sales: {
        totalUnitsSold: number;
        totalRevenuePerProduct: number;
    };
}

interface OrderSummary {
    totalRevenue: number;
    totalUnitsSold: number;
    topCustomers: string[];
    productSalesBreakdown: ProductSaleBreakdown;
}

class OrderManagement {
    private readonly orders: Order[];
    constructor(orders: Order[]) {
        this.orders = orders;
    }

    processOrder() {
        this.orders.reduce((summary, product) => {

        }, new Map<string, []>)
    }
}




const orders20: Order[] = [
    {
        orderId: "001",
        customer: "Alice",
        orderDate: "2024-01-15",
        items: [
            { productId: "P001", quantity: 2, price: 50 },
            { productId: "P002", quantity: 1, price: 30 }
        ]
    },
    {
        orderId: "002",
        customer: "Jesse",
        orderDate: "2024-02-10",
        items: [
            { productId: "P001", quantity: 1, price: 50 },
            { productId: "P003", quantity: 4, price: 20 }
        ]
    },
    {
        orderId: "003",
        customer: "Peter",
        orderDate: "2024-07-10",
        items: [
            { productId: "P001", quantity: 6, price: 50 },
            { productId: "P003", quantity: 3, price: 20 }
        ]
    },

];




const ordermgmt = new OrderManagement(orders20)

console.log(ordermgmt.processOrder());