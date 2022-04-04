import { object } from "joi";

interface MyInterface { 
  myNumber: number;
  myfunc3(myparam: number): string;
}

class MyClass implements MyInterface { 

  constructor(public myNumber: number) {
  }

  myfunc3(myparam: number): string {
    const soma = this.myNumber + myparam

    return `A soma ${soma}`;
  }
}

const myObject = new MyClass(5);
console.log(myObject.myNumber);
console.log(myObject.myfunc3(5));
