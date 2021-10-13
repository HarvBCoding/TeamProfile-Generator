const Employee = require('./Employee.js');

class Intern extends Employee{
    constructor(name, id, email, school) {
        
        this.name = name;

        this.id = id;
        this.email = email;

        this.school = school;
    }
    super();

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;