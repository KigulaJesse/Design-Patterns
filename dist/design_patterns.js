"use strict";
//Singleton Design Pattern
class ConfigurationManager {
    constructor() {
        this.config = {};
    }
    ;
    static getInstance() {
        if (!ConfigurationManager.instance) {
            ConfigurationManager.instance = new ConfigurationManager();
        }
        return ConfigurationManager.instance;
    }
    setConfig(key, value) {
        this.config[key] = value;
    }
    getConfig(key) {
        return this.config[key];
    }
}
// Usage
const config1 = ConfigurationManager.getInstance();
config1.setConfig('theme', 'dark');
const config2 = ConfigurationManager.getInstance();
console.log(config2.getConfig('theme')); // dark
// Both references point to the same instance
console.log(config1 === config2); // true
class PayPal {
    processPayment(amount) {
        console.log(`Paypal has processed this amount: ${amount}`);
    }
}
class MobileMoney {
    processPayment(amount) {
        console.log(`MTN has processes this amount: ${amount}`);
    }
}
class PaymentFactory {
    static createPayment(method) {
        if (method === 'pay_pal') {
            return new PayPal();
        }
        else if (method === 'paypal') {
            return new MobileMoney();
        }
        throw new Error('Invalid payment method');
    }
}
const roles = {
    admin: "Administrator",
    User2020: "Regular User2020",
    guest: "Guest User2020",
};
console.log(roles.admin); //
