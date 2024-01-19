// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  getRole() {
    console.log(this.role);
    return this.role;
  }
}

const manager = new Manager("Aaron", 4, "ayayron@hotmail.com", "1");
manager.getRole();

module.exports = Manager;
