//---------------------------------------Template Literals----------------------------------
// Task 1

const name = "Rabia";
const age = 22;

const message = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(message);

//Task 2
const multiLineString = `This is a string
that spans multiple
lines using template literals.`;

console.log(multiLineString);

//---------------------------------------Destructing------------------------------------

//Task 1
const array = [1,2,3,4,5,6]
// Destructuring to get the first element and the rest of the elements
const [first, ...rest] = array;
// Destructuring to get the last element from the rest array
const last = rest.pop();
console.log(first);
// console.log(rest);
console.log(last);

///Task2
const book = {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960
  };

const {title: t} = book
console.log(t);

const {author} = book
console.log(author);

//---------------------------------------Spread and rest Operator------------------------------------

//Task 1: spread operator to create a new array that includes all the eleemnt of existing array plus additional element
const existingArray = [1, 2, 3];
const newArray = [...existingArray, 4, 5];

console.log(newArray);

//Task 2: rest operator in a function that accept arbitrary number sum them and log the result
const sumAll = function(...number){
  const sum = number.reduce((accumulator,currentValue) =>{
    return accumulator +currentValue 
  }, 0)
  return sum
}
console.log(sumAll(4,7,6))

//---------------------------------------Default parameter------------------------------------

function product(n1,n2=1){  //n2 has default value 
  return n1*n2
}
console.log(product(6));
console.log(product(2,3))

//---------------------------------------Enhanced Objecg Literals------------------------------------

//Task 1
const Name = "Alice";
const Age = 30;

// Using enhanced object literals
const person = {
  Name, // Shorthand for `name: name`
  Age,  // Shorthand for `age: age`

  // Method shorthand
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },

  // Computed property
  get isAdult() {
    return this.age >= 18;
  }
};

console.log(person);
console.log(person.greet());
console.log(`Is Adult: ${person.isAdult}`);


//Task 2:
 const key = 'myname';
const Person = {
  [key]: 'rabia'
};

console.log(Person.myname); // Logs: Alice


