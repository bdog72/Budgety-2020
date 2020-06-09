//
//
// console.log('Bozo');

// ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);

// ES5
function driversLicense5(passedTest) {
  if (passedTest) {
    var firstName = 'John';
    console.log(firstName);
    var yearOfBirth = 1990;
  }
  console.log(`${firstName} was born in ${yearOfBirth}`);
}
driversLicense5(true);

// ES6
function driversLicense6(passedTest) {
  let firstName;
  console.log(firstName);
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = 'John';
  }
  console.log(`${firstName} was born in ${yearOfBirth}`);
}

driversLicense6(true);

let i = 23;
