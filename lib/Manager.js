const Employee = require('./Employee.js');

class Manager extends Employee{
    constructor(name, id, email, office) {
        super(name, id, email);

        this.office = office;


    }

    getOffice() {
        // return data
        return this.office;
    }

    getRole() {
        // return role
        return 'Manager';
    }
}

module.exports = Manager;