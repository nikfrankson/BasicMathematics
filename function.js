var MyClass = (function () {
    function MyClass() {
    }
    MyClass.prototype.formula = function (x, y, z) {
        return x / y * z;
    };
    return MyClass;
})();
var classInstance = new MyClass();
console.log(classInstance.formula(10, 2, 6));
