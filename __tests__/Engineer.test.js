const Engineer = require('../lib/Engineer');

test('creates a new engineer object', () => {
    const engineer = new Engineer('test', '2B', 'some@somewhere', 'lernantino');

    expect(engineer.name).toBe('test');
    expect(engineer.id).toBe('2B');
    expect(engineer.email).toBe('some@somewhere');
    expect(engineer.github).toBe('lernantino');

});

test('inherited methods are properly passed down', () => {
    const engineer = new Engineer('test', '2B', 'some@somewhere', 'lernantino');

    expect(engineer.getName()).toBe('test');
    expect(engineer.getId()).toBe('2B');

});

test('gets the github profile name of the engineer', () => {
    const engineer = new Engineer('test', '2B', 'some@somewhere', 'lernantino');

    expect(engineer.getGithub()).toBe('lernantino');

});

test('gets the role of engineer', () => {
    const engineer = new Engineer('test', '2B', 'some@somewhere', 'lernantino');

    expect(engineer.getRole()).toBe('Engineer');
    
});
