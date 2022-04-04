"use strict";
exports.__esModule = true;
var MyClass = /** @class */ (function () {
    function MyClass(myNumber) {
        this.myNumber = myNumber;
    }
    MyClass.prototype.myfunc3 = function (myparam) {
        var soma = this.myNumber + myparam;
        return "A soma ".concat(soma);
    };
    return MyClass;
}());
var myObject = new MyClass(5);
console.log(myObject.myNumber);
console.log(myObject.myfunc3(5));
