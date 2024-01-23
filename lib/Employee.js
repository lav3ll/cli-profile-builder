// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.role = "Employee";
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
}

const Lavell = new Employee("lavell", 1, "lav3ll");
Lavell.getEmail();
Lavell.getRole();

module.exports = Employee;
