function ExampleConstructor(){};
console.log('value of ExampleConstructor.prototype: ', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor', typeof ExampleConstructor);

var ex = new ExampleConstructor();
console.log('value of ex: ', ex);
console.log('is ex an instance of ExampleConstructor? ', ex instanceof ExampleConstructor);
