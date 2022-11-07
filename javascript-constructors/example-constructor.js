function ExampleConstructor() {

}
console.log('ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var newConstructor = new ExampleConstructor();
console.log('newConstructor:', newConstructor);

var isExampleConstructor = newConstructor instanceof ExampleConstructor;
console.log('isExampleConstructor:', isExampleConstructor);
