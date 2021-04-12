console.log('ES6');

// differences between var and let

// var gets hoisted - with undefined as a value, let does not get hoisted
// var num = undefined;
console.log(num);
var num = 23;

var name = 'anna';
// redeclaring name - this works with var
var name = 'ahmed';
console.log(name)

// let cannot be redeclared 
// let user = 'foo';
// let user = 'bar';
// console.log(user)

// scoping - the area where a variable is accessible


var message = 'hello from global scope';
// var is function scoped
function helloFromLocalScope() {
    var greeting = 'hello from local scope';
    return greeting;
}

console.log(message);
console.log(helloFromLocalScope())

// console.log(greeting); -> Reference Error / greeting is not defined

// var is not scoped to this block
if (true) {
    var messageInIf = 'inside if';
}
console.log(messageInIf)
console.clear();

// function scope with let - let is also function scoped
function scopeLet() {
    let greeting = 'hello world';
    return greeting;
}
console.log(scopeLet())

// let is also scoped to this block
if (true) {
    let letInsideIf = 'let inside if';
}

// console.log(letInsideIf); -> ReferenceError

// in short: let is block scoped (this could be the block of a function, a conditional or a loop)
// var is only scoped to the function block


// ternary operator
// <condition> ? <thishappensiftrue> : <thishappensiffalse>
const password = '12345'
const user = password === '123' ? 'authenticated' : 'notAuthenticated';

console.clear();

// 

// now we want to have an object with a key 'password' and the value of the password
// variable from above
// this is the shorthand version of: {password: password}
const obj = { password }
console.log(obj)
console.log({ user: user })
console.log({ message })

console.clear();

// Destructuring

const person = {
    userName: 'Ironhacker',
    age: 25,
    hobby: 'chess',
    address: {
        street: 'Lobeckstr.',
        city: 'Berlin'
    }
}
// const userName = person.userName;
// const age = person.age;
// const hobby = person.hobby;

// Object destructuring - 
// const { userName, age, hobby, address } = person;
// we can alias by using the colon
const { userName: aliasForName, age, hobby, address: { city } } = person;

console.log(aliasForName, age, hobby, city);
console.clear();

const userX = {
    first: 'Michael',
    middle: 'Peter',
    last: 'Miller'
}
// write a function 'display' that receives the user object, destructures the
// keys and then returns a string with all the names

function display(user) {
    // destructure user
    const { first, middle, last } = user;
    return `${first} ${middle} ${last}`;
}
/* bonus: you can also destructure in the parameter
function display({ first, middle, last }) {
    // destructure user
    // const { first, middle, last } = user;
    return `${first} ${middle} ${last}`;
}
*/
const res = display(userX);
console.log(res)

console.clear();

// Array destructuring

const numbers = ['one', 'two', 'three', 'four', 'five'];

const [first, second] = numbers;
const [x, y] = numbers;
console.log(x, y);
console.log(first, second)

// i want a variable called 'third' that holds the third element from the array
const [third] = numbers;
console.log(third);

// setting a default value
const [, , thirdVal = 5] = [1, 3, 4]
console.log(thirdVal)

const [a, b = 2, c, d = 1] = [3, 4]
console.log(a, b, c, d); // (3, 4, undefined, 1)

// you can destructure a string as well
// const [g, h, z] = 'hello';
// console.log(g, h, z)

// Spread operator
const nums = [23, 12, 7, 45];
// console.log(Math.max(3, 5, 1))
const maxNumber = Math.max(...nums);
console.log(maxNumber);

// spread operator used to make a shallow copy
const numsCopy = [...nums];

// to combine two arrays
const reptiles = ['snake', 'lizard'];
const mammals = ['puppy', 'kitten'];
const animals = [...reptiles, ...mammals];
console.log(animals)
// to change a string to an array (replacement for .split(''))
const str = 'helloworld';
[...str].forEach(function (char) {
    console.log(char)
})

// spread operator as a function param to get all the parameters in an array 
function sum(...numbers) {
    // return numbers -> this is an array containing all the parameters
    // return numbers.reduce(function (acc, val) {
    //     return acc + val
    // })
}
const sumResult = sum(2, 45, 3, 4, 34, 78, 13)
console.log(sumResult)
console.clear();
// Arrow functions

// const calcSum = (a, b) => a + b

// when you have more than just one statement you need the {}
const calcSum = (a, b) => {
    const sum = a + b;
    return sum
}

const displayMessage = () => 'hello word'

console.log(displayMessage());

console.log(calcSum(8, 3));

const numsArr = [1, 2, 3, 4, 5];

// const evens = numsArr.filter(function(num) {
//     return num % 2 === 0
// })

// if you have only one parameter you can reove the wrapping parentheses
const evens = numsArr.filter(num => num % 2 === 0)

const names = ['anna', 'ahmed', 'thomas'];
const upperCased = names.map(name => name.toUpperCase());

console.log(upperCased)

// arrow functions and the 'this' keyword
/*
class Person {
    constructor() {
      this.age = 0;
    }
 
    growUp() {
      // const that = this;
      setInterval(() => {
        this.age++
        console.log(this.age)
      }, 1000)
    }
  }
 
  const p = new Person();
  p.growUp()
*/

console.clear();


// Promises - an object representing the eventual complation or failure of an 
// asynchronous operation

// this is a function that returns a promise - we will not write functions
// like this in the bootcamp but we will use them
function createRandomNumber(min, max) {
    return new Promise((resolve, reject) => {
        if (arguments.length !== 2) {
            return reject(new Error('Invalid number of arguments'));
        }
        setTimeout(() => {
            resolve(Math.floor(Math.random() * (max - min + 1) + min))
        }, 3000);
    });
}
// const randomNumber = createRandomNumber(1, 5);
// console.log(randomNumber)
// .then(<this is done if the call of the function is successful>)
// .catch(<this is done if the call of the function is not successful - we have an error>) 

createRandomNumber(1, 10)
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error.message)
    })

// async await
async function getNumber() {
    try {
        const randomNumber = await createRandomNumber(1, 100);
        console.log(randomNumber)
    } catch (error) {
        console.log(error.message)
    }
}

getNumber();