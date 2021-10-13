const Manager = require('../lib/Manager.js');

test('creates a new manager object', () => {
    const manager = new Manager('test', '1A', 'someone@somewhere', '9');

    expect(manager.name).toBe('test');
    expect(manager.id).toBe('1A');
    expect(manager.email).toBe('someone@somewhere');
    expect(manager.office).toBe('9');

});

test('inherited methods properly passed down', () => {
    const manager = new Manager('test', '1A', 'someone@somewhere', '9');

    expect(manager.getName()).toBe('test');
    expect(manager.getId()).toBe('1A');

});

test('gets the managers office number', () => {
    const manager = new Manager('test', '1A', 'someone@somewhere', '9');

    expect(manager.getOffice()).toBe('9');

});

test('gets the managers role', () => {
    const manager = new Manager('test', '1A', 'someone@somewhere', '9');

    expect(manager.getRole()).toBe('Manager');

});