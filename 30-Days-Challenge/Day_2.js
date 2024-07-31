//************************Arithmetic operation************************/
const num1 = 6;
const num2 = 7;
const addnum = num1 + num2
console.log(`By adding: ${addnum}`)

const number1 = 32;
const number2 = 25;
const subnum = number1 - number2
console.log(`By subtracting: ${subnum}`)

const No_1 = 6;
const No_2 = 7;
const mulnum = No_1 * No_2
console.log(`By multiplying: ${mulnum}`)

const dividend = 125
const divisor = 5
const dividenum = dividend / divisor
console.log(`By dividing: ${dividenum}`)

const dividend1 = 11
const divisor1 = 2
const remainder = dividend1 % divisor1
console.log(`Remainder: ${remainder}`)

//************************Assignment operation************************/

//Add a number to variable
let var1 = 9
var1 += 5
console.log(`value = ${var1}`)

///subtract a number to variable
let var2 = 9
var2 -= 5
console.log(`value = ${var2}`)

//************************Comparison operation************************/

//using < , >
let jsCoursePrice = 3500
let fluttercoursePrice = 2000
if(jsCoursePrice > fluttercoursePrice){
    console.log(`jscoursePrice is ${jsCoursePrice - fluttercoursePrice} more than fluterCoursePrice`)
}
if(jsCoursePrice < fluttercoursePrice){
    console.log(`jscoursePrice is ${jsCoursePrice - fluttercoursePrice} less than fluterCoursePrice`)
}

//using <= , >=
let score1 = 200
let score2 = 250
if(score1 >= score2){
    console.log("score1 is greater than or equal to score2")
}
if(score1 <= score2){
    console.log("score1 is less than or equal to score2")
}

// using == , ===
let val1 = 9
let val2 = '9'
if (val1 == val2) {
    console.log(`== show ${val1} is equal to ${val2}`)
}

if (val1 === val2) {
    console.log(`=== show ${val1} is equal to ${val2}`)
}
else{
    console.log(`=== show ${val1} is not equal to ${val2}`)
}

//************************Logical operation************************/

// using && operator
let isUserLoggedIn = true
let validDebitCart = false
if(isUserLoggedIn && validDebitCart){
    console.log("User can palce order")
}
else{
    console.log("Not valid")
}

// using || operator
let userLoginFromEmail = true
let userLoginFromGoogle = false
if (userLoginFromEmail || userLoginFromGoogle) {
    console.log("You are varified")
}

// using ! operator
let userLogin = true
console.log(!userLogin)       //false

//************************Ternary operation************************/

let temp = -30
temp > 0 ? console.log("TEMPRATURE IS POSITIVE"): console.log("TEMPRATURE IS POSITIVE");

