const Employee = require('./Employee.js');

class Manager extends Employee{
    constructor(name, id, email, office) {
        super(name, id, email);

        this.office = office;

        this.role = "Manager";


    }

    getOffice() {
        // return data
        return this.office;
    }

    getRole() {
        // return role
        return this.role;
    }
}

module.exports = Manager;