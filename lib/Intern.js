// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.role = "Intern";
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return this.role;
  }
}

// const intern = new Intern(
//   "GARY",
//   3,
//   "gary@hotmail.com",
//   "Chris the king 6th form"
// );
// intern.getRole();
// intern.getSchool();

module.exports = Intern;
