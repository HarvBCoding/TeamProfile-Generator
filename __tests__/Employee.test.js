const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('test', '1A', 'someone@somewhere');

    expect(employee.name).toBe('test');
    expect(employee.id).toBe('1A');
    expect(employee.email).toBe('someone@somewhere');

});

test('gets the name of employee', () => {
    const employee = new Employee('test', '1A', 'someone@somewhere');

    expect(employee.getName()).toBe('test');

});

test('gets the id of employee', () => {
    const employee = new Employee('test', '1A', 'someone@somewhere');

    expect(employee.getId()).toBe('1A');

});

test('gets the email of employee', () => {
    const employee = new Employee('test', '1A', 'someone@somewhere');

    expect(employee.getEmail()).toBe('someone@somewhere');

});

test('gets the role of employee', () => {
    const employee = new Employee('test', '1A', 'someone@somewhere');

    expect(employee.getRole()).toBe('Employee');
    
});