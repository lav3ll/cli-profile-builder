// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    console.log(this.name);
    return this.name;
  }
  getid() {
    console.log(this.id);
    return this.id;
  }
  getEmail() {
    console.log(this.email);
    return this.email;
  }
  getRole() {
    console.log("Employee");
    return "Employee";
  }
}

const Lavell = new Employee("lavell", 1, "lav3ll");
Lavell.getEmail();
Lavell.getRole();
