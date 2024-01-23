// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, offNumber) {
    super(name, id, email);
    this.off = offNumber;
    this.role = "Manager";
  }

  getRole() {
    return this.role;
  }
  officeNumber() {
    return this.offNumber;
  }
}

const manager = new Manager("Aaron", 4, "ayayron@hotmail.com", "1");
manager.getRole();

module.exports = Manager;
