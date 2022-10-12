const Employee = require('../lib/employee') 
// () => {}
const Intern = require('../lib/Intern')
describe("Intern", () => {

// name
it("should return the name was used in the constructor", () => {
  const testValue = "Bob"
  const obj = new Intern(testValue, 1, "blah@email.com");

    expect(obj.name).toBe(testValue);
});

// id

// email

// getName()

// getId()

// getEmail()

// getRole()—returns 'Intern'


    describe("Initialization", () => {
it("should return an object that contains a name property", () => {
    const obj = new Intern();

      expect("name" in obj).toEqual(true);
});

it("should return an object that contains an id property", () => {
    const obj = new Intern();

      expect("id" in obj).toEqual(true);
});

it("should return an object that contains an email property", () => {
    const obj = new Intern();

      expect("email" in obj).toEqual(true);
});
 })
})