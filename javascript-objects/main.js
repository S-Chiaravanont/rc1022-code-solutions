var student = {
  firstName: 'Chai',
  lastName: 'Chiaravanont',
  age: 28
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Professional pooper';

console.log('Value of student.livesInIrvine:', student.livesInIrvine);
console.log('Value of student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Porsche',
  model: 'Taycan',
  year: 2022
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('Value of vehicle["color"]:', vehicle['color']);
console.log('Value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('Value of vehicle:', vehicle);

var pet = {
  name: 'Collie',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('Value of pet:', pet);
