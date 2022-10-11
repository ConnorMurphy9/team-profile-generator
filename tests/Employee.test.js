

// const { it } = require('node:test');
const Employee = require('../lib/employee') 
// () => {}

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole()—returns 'Employee'


describe("Employee", () => {
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