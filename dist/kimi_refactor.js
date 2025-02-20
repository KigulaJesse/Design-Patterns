"use strict";
class UserKimi {
    constructor(id, name, email, age) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._age = age;
    }
    getId() {
        return this._id;
    }
    getName() {
        return this._name;
    }
    getEmail() {
        return this._email;
    }
    getAge() {
        return this._age;
    }
    setId(id) {
        this._id = id;
    }
    setName(name) {
        this._name = name;
    }
    setEmail(email) {
        this._email = email;
    }
    setAge(age) {
        this._age = age;
    }
    static createUser(id, name, email, age) {
        return new User(id, name, email, age);
    }
    static validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    static validateAge(age) {
        return age > 0 && age < 120;
    }
    static validateName(name) {
        return name.length > 0;
    }
    static validateUser(user) {
        return (UserKimi.validateEmail(user.getEmail()) &&
            UserKimi.validateAge(user.getAge()) &&
            UserKimi.validateName(user.getName()));
    }
    static printUser(user) {
        console.log(`User ID: ${user.getId()}`);
        console.log(`Name: ${user.getName()}`);
        console.log(`Email: ${user.getEmail()}`);
        console.log(`Age: ${user.getAge()}`);
    }
}
// Example usage
const user = UserKimi.createUser(1, "John Doe", "john.doe@example.com", 30);
UserKimi.printUser(user);
