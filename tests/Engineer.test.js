const Employee = require('../lib/employee')
const Engineer = require('../lib/Engineer')
describe("Engineer", () => {

    // name
    it("should return the name that was used in the constructor", () => {
      const testValue = "Bob"
      const obj = new Engineer(testValue, 1, "blah@email.com");
    
        expect(obj.name).toBe(testValue);
    });
    
    // id
    
    // email
    
    // getName()
    
    // getId()
    
    // getEmail()
    
    // getRole()—returns 'Engineer'
    
    
        describe("Initialization", () => {
    it("should return an object that contains a name property", () => {
        const obj = new Engineer();
    
          expect("name" in obj).toEqual(true);
    });
    
    it("should return an object that contains an id property", () => {
        const obj = new Engineer();
    
          expect("id" in obj).toEqual(true);
    });
    
    it("should return an object that contains an email property", () => {
        const obj = new Engineer();
    
          expect("email" in obj).toEqual(true);
    });
     })
    })