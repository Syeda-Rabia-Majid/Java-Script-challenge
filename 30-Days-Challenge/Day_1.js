//*************************VARIABLES AND DATATYPES********************
//------------------ Activity 1: Variable Declaration---------------------

var number = 32;
console.log(`The Number is, ${number}`)

let Name = "Rabia"
console.log(`User Name is, ${Name}`)

//------------------ Activity 2: Constant Declaration---------------------
const isSunSet = true
console.log(`The Sun is set.., ${isSunSet}`)

//------------------ Activity 3: Data Types-------------------------------
let score = 200
const UserName = "RaBia MAjid"
const IsLoggedIn = false
const userObj = {
    UserName:"Syeda Rabia",
    email: "rabia@gmail.com",
    courseName:"Java Script"
}
function CourseDuration(time){
    return time;
}

console.log(typeof score);
console.log(typeof UserName);
console.log(typeof IsLoggedIn);
console.log(typeof userObj);
console.log(typeof CourseDuration);

//------------------ Activity 4: Reasigning Variables---------------------
let value = 25
console.log("Initial Value is ",value);
value = 30
console.log("New assigned Value is ",value)

//------------------ Activity 5: Understanding Constant---------------------
const marks = 400
console.log("Existing Marks = ",marks)
marks = 500                           //TypeError: Assignment to constant variable.
console.log("New Marks = ",marks)

