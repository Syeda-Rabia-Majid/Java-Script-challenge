// *******************************CONTROL STRUCTURES***************************************//

//--------------------------if else-----------------------
//Task 1
function checkNum (num) {
    if (num === 0) {
        console.log(`${num} is zero`);
    }
    if (num > 0) {
        console.log(`${num} is positive number`);
    }
    if (num < 0) {
        console.log(`${num} is negative number`);
    }
    else{
        console.log("Not a valid number")
    }
}
checkNum(-5);
//Task 2
let personAge = 20;
if(personAge >= 18){
    console.log("Person is eligible to vote")
}
else{
    console.log("Person is not eligible to vote")
}

//--------------------------Nested if else-------------------------
//Task 1
let num1 = 5
let num2 = 8
let num3 = 3
if (num1 > num2) {
    if (num1 > num3) {
        console.log(`${num1} is the largest number`)
    }
}
if (num2 > num1) {
    if (num2 > num3) {
        console.log(`${num2} is the largest number`)
    }
}
if (num3 > num1) {
    if (num3 > num2) {
        console.log(`${num3} is the largest number`)
    }
}

//--------------------------Switch Case-------------------------

//Task 1
let day = 6
switch (day) {
    case 1:
        console.log("Mon")
        break;
    case 2:
        console.log("Tues")
        break;
    case 3:
        console.log("Wed")
        break;
    case 4:
        console.log("Thurs")
        break;
    case 5:
        console.log("Fri")
        break;
    case 6:
        console.log("Sat")
        break;
    case 7:
        console.log("Sun")
        break;

    default:
        console.log("Not a day")
        break;
}

//Task 2
let score = 71
switch (true) {          //The switch statement uses true as the expression. This allows each case to be evaluated as a boolean condition.
    case (score >= 90):
        console.log("Grade A")
        break;
    case (score >= 70):
        console.log("Grade B")
        break;
    case (score >= 60):
        console.log("Grade C")
        break;
    case (score >= 40):
        console.log("Grade D")
        break;

    default:
        console.log("FAil")
        break;
}

//--------------------------Conditional(Ternary) Operator-------------------------

//Task 1
let num = 9;
num % 2 == 0 ? console.log(`${num} is even number`): console.log(`${num} is odd number`);

//--------------------------Combining Conditionr-------------------------

const checkLeapYear = (year) => {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true; // Divisible by 400, so it is a leap year
            } else {
                return false; // Divisible by 100 but not by 400, so it is not a leap year
            }
        } else {
            return true; // Divisible by 4 but not by 100, so it is a leap year
        }
    } else {
        return false; // Not divisible by 4, so it is not a leap year
    }
};

// Examples
console.log(checkLeapYear(2020)); // true
console.log(checkLeapYear(2021)); // false
console.log(checkLeapYear(1900)); // false
console.log(checkLeapYear(2000)); // true
