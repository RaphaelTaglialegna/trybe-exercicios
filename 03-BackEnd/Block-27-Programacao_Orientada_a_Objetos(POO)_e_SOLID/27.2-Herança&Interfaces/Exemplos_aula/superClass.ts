class Superclass { 
  isSuper: boolean;
  constructor()  {
    this.isSuper = true;
  }

 public sayHello(): void { 
    console.log('Hello Word')
  }
}

class Subclass extends Superclass { 
  constructor () { 
    super();
    this.isSuper = false;
  }

 }

const myFunc1 = (object: Superclass) => { 
  object.sayHello();
  console.log(object.isSuper ? 'Super': 'Sub')
}

const sup = new Superclass();
const sub = new Subclass();

myFunc1(sup);
myFunc1(sub);