const Intern = require('../lib/Intern.js');

test('creates a new intern object', () => {
    const intern = new Intern('test', '3C', 'some@somewhere', 'washu');

    expect(intern.name).toBe('test');
    expect(intern.id).toBe('3C');
    expect(intern.email).toBe('some@somewhere');
    expect(intern.school).toBe('washu');

});

test('inherited methods are properly passed down', () => {
    const intern = new Intern('test', '3C', 'some@somewhere', 'washu');

    expect(intern.getName()).toBe('test');
    expect(intern.getEmail()).toBe('some@somewhere');
    
});

test('gets intern school', () => {
    const intern = new Intern('test', '3C', 'some@somewhere', 'washu');

    expect(intern.getSchool()).toBe('washu');

});

test('gets intern role', () => {
    const intern = new Intern('test', '3C', 'some@somewhere', 'washu');

    expect(intern.getRole()).toBe('Intern');
});