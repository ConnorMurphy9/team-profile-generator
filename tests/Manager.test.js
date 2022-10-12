const Employee = require('../lib/employee')

const Manager = require('../lib/Manager')


// () => {}
describe("Manager", () => {

// name
it("should return the name that was used in the constructor", () => {
  const testValue = "Bob"
  const obj = new Manager(testValue, 1, "blah@email.com");

    expect(obj.name).toBe(testValue);
});

// id

// email

// getName()

// getId()

// getEmail()

// getRole()—returns 'Manager'


    describe("Initialization", () => {
it("should return an object that contains a name property", () => {
    const obj = new Manager();

      expect("name" in obj).toEqual(true);
});

it("should return an object that contains an id property", () => {
    const obj = new Manager();

      expect("id" in obj).toEqual(true);
});

it("should return an object that contains an email property", () => {
    const obj = new Manager();

      expect("email" in obj).toEqual(true);
});
 })
})