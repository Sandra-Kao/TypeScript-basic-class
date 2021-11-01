class Department {
  // Upper case
  name: string;

  constructor(n: string) {
    // constructor is reserved word
    this.name = n;
  }
}

const modernDepartment = new Department("Mardon");
// new a class

console.log(modernDepartment);
