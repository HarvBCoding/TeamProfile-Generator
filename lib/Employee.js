class Employee {
    constructor(name, id, email) {

        this.name = name;

        this.id = id;

        this.email = email;

        this.role = "Employee";
    }

    getName() {
        // get name from prompt in index.js
        return this.name;
    }

    getId() {
        // get the id from prompt
        return this.id;
    }

    getEmail() {
        // same as the other 2
        return this.email;
    }

    getRole() {
        return this.role;
    }
};

module.exports = Employee;