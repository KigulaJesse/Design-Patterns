//Singleton Design Pattern
class ConfigurationManager {
    private static instance: ConfigurationManager;
    private config: Record<string, string> = {};

    private constructor() { };

    static getInstance(): ConfigurationManager {
        if (!ConfigurationManager.instance) {
            ConfigurationManager.instance = new ConfigurationManager();
        }
        return ConfigurationManager.instance;
    }

    setConfig(key: string, value: string): void {
        this.config[key] = value;
    }

    getConfig(key: string): string {
        return this.config[key];
    }
}

// Usage
const config1 = ConfigurationManager.getInstance();
config1.setConfig('theme', 'dark');

const config2 = ConfigurationManager.getInstance();
console.log(config2.getConfig('theme'));  // dark

// Both references point to the same instance
console.log(config1 === config2);  // true



//Factory Design Pattern
interface PaymentMethod {
    processPayment(amount: number): void;
}

class PayPal implements PaymentMethod {
    processPayment(amount: number): void {
        console.log(`Paypal has processed this amount: ${amount}`);
    }
}

class MobileMoney implements PaymentMethod {
    processPayment(amount: number): void {
        console.log(`MTN has processes this amount: ${amount}`);
    }
}

class PaymentFactory {
    static createPayment(method: string): PaymentMethod {
        if (method === 'pay_pal') {
            return new PayPal();
        } else if (method === 'paypal') {
            return new MobileMoney();
        }
        throw new Error('Invalid payment method');
    }
}



type User2020Roles = Record<string, string>;

const roles: User2020Roles = {
    admin: "Administrator",
    User2020: "Regular User2020",
    guest: "Guest User2020",
};

console.log(roles.admin); //



