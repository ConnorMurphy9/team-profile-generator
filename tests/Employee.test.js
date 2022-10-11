const Employee = require('../lib/employee') 
// () => {}
describe("Employee", () => {

// name
it("should return the name was used in the constructor", () => {
  const testValue = "Bob"
  const obj = new Employee(testValue, 1, "blah@email.com");

    expect(obj.name).toBe(testValue);
});

// id

// email

// getName()

// getId()

// getEmail()

// getRole()—returns 'Employee'


    describe("Initialization", () => {
it("should return an object that contains a name property", () => {
    const obj = new Employee();

      expect("name" in obj).toEqual(true);
});

it("should return an object that contains an id property", () => {
    const obj = new Employee();

      expect("id" in obj).toEqual(true);
});

it("should return an object that contains an email property", () => {
    const obj = new Employee();

      expect("email" in obj).toEqual(true);
});
 })
})