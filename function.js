var MyClass = (function () {
    function MyClass() {
    }
    MyClass.prototype.formula = function (x, y, z) {
        return x * y / z;
    };
    return MyClass;
})();
var classInstance = new MyClass();
console.log("The output of 23 multiplied by 34 and then divided by 2 is " + classInstance.formula(23, 34, 2) + ".");
