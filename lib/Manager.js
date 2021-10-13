const Employee = require('./Employee.js');

class Manager extends Employee{
    constructor(name, id, email, phone) {
        super(name, id, email);

        this.phone = phone;


    }

    getPhone() {
        // return data
        return this.phone;
    }

    getRole() {
        // return role
        return 'Manager';
    }
}

module.exports = Manager;