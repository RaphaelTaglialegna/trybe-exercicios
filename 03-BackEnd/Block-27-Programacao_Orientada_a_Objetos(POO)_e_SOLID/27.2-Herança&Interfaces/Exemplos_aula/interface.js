var Bird = /** @class */ (function () {
    function Bird(name, birthDate) {
        this.name = name;
        this._birthDate = birthDate;
    }
    Object.defineProperty(Bird.prototype, "age", {
        get: function () {
            return new Date().getFullYear() - this._birthDate.getFullYear();
        },
        enumerable: false,
        configurable: true
    });
    Bird.prototype.getBirthDate = function () {
        return this._birthDate;
    };
    Bird.prototype.fly = function () { console.log("".concat(this.name, " est\u00E1 voando!")); };
    return Bird;
}());
var d1 = new Date();
d1.setFullYear(2015);
var b1 = new Bird('Papagaio', d1);
console.log(b1.age);
b1.fly();
/*
Saída (código executado em 2021):

Papagaio está voando!
*/ 
