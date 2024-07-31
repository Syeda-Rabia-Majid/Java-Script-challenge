//--------------------------------------------Function Declaration---------------------------
 function square(num){
    return num*num
}
console.log(square(6));

let checknum = (num)=>{
    if(num %2 == 0){
        console.log(`${num} is an even number`)
}
    else{
        console.log(`${num} is an odd number`)
    }
}
console.log(checknum(7))

//--------------------------------------------Function Expression---------------------------

//find maximum of two number
const findMax = function(a, b) {
    return a > b ? a : b;
};
const max = findMax(10, 20);
console.log(max); // Output: 20

// to check special character in a string

const containsAnySpecialChar = str => /[!@#$%^&*(),.?":{}|<>]/.test(str);

const result1 = containsAnySpecialChar('hello world!');
console.log(result1); // Output: true

const result2 = containsAnySpecialChar('hello world');
console.log(result2); // Output: false

//The regular expression /[!@#$%^&*(),.?":{}|<>]/ is used to match any single special character from the set of characters inside the square brackets.
// [ ]: Denotes a character class. It matches any single character within the brackets.


//--------------------------------------------Function Parameter and default value------------------------------

function product(n1,n2=5){  //n2 has default value 
    return n1*n2
}
console.log(product(6));
console.log(product(2,3))

const saygreet = function(name, age= 20){
    console.log(`Assalam o AlAIKUM your name is  ${name} and your age is ${age}`);
}
saygreet('HAyAT');
saygreet('Rabia', 21);

//--------------------------------------------Higher Order Function-----------------------------

//higher order function that takes function and a number and calls the function that many times
function hye() {
    return'hye';
}

function repeatFunction(myfunction, n){
    for(let i=0; i<n; i++){
        console.log(myfunction)
}
}
repeatFunction(hye(), 3)

//function that takes two function and a value , apply the 1st function to the value and 2nd function to the result

function applyFunctions(fn1, fn2, value) {
    const result1 = fn1(value);
    const result2 = fn2(result1);
    return result2;
}

function double(x) {
    return x * 2;
}

function addFive(x) {
    return x + 5;
}

const initialValue = 3;
const finalResult = applyFunctions(double, addFive, initialValue);
console.log(finalResult); // Output: 11 (3 * 2 + 5)
