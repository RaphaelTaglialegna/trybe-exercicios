var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    /*
      Ao invés de declarar os atributos antes do construtor, receber parâmetros
      no construtor e colocá-los nos atributos da classe, se não formos
      validar, podemos utilizar uma forma simplificada de escrita, simplesmente
      colocando o modificador de visibilidade na frente
      do nome do parâmetro no construtor
  
      Exemplo
      O seguinte código:
  
      public x: number
      constructor(x: number) { this.x = x }
  
      Pode ser substituído por:
  
      constructor(public x: number) { }
    */
    function Animal(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }
    Animal.prototype.getAge = function () {
        var today = new Date();
        var age = 50;
        // if (today.getMonth() - this.birthDate.getMonth() <= 0 && today.getDate() <= this.birthDate.getDate()) {
        //   age--;
        // }
        return age;
    };
    return Animal;
}());
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mammal.prototype.walk = function () {
        console.log("".concat(this.name, " est\u00E1 andando!"));
    };
    return Mammal;
}(Animal));
var d1 = new Date();
d1.setFullYear(2015);
var m1 = new Mammal('Tatu', d1);
var myFunc = function (animal) { console.log(animal.getAge); };
myFunc(m1);
m1.walk();
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bird.prototype.fly = function () {
        console.log("".concat(this.name, " est\u00E1 voando!"));
    };
    return Bird;
}(Animal));
var d2 = new Date();
d2.setFullYear(2017);
var b1 = new Bird('Papagaio', d2);
console.log(b1.getAge);
b1.fly();
