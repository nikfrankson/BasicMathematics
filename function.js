var MyClass = (function () {
    function MyClass() {
    }
    MyClass.prototype.add = function (x, y) {
        return x + y;
    };
    return MyClass;
})();
var classInstance = new MyClass();
console.log(classInstance.add(2, 1));
