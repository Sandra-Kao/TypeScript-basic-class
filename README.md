# TypeScript-basic-class
Function:
``` Typescript
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

```

Output:
``` Javascript
console.log(modernDepartment);
// {
//   "name": "Mardon"
// }
```

See in Codepen:
https://codepen.io/K-SY/pen/gORVbYQ
