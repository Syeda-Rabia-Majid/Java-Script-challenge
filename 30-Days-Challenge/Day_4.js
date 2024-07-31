//***************************************************LOOPS************************************/
//---------------------For Loop---------------------

//Task 1         printing integers from 1 to 20
for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element)
    
}
//Task 2         Mulitplication table of 5
let tableArray = []
for (let i = 1; i <= 10; i++) {
    for (let j = 5; j <= 10; j++) {
        const element = i*j;
        if (j > 5) {
            break;
        }
        console.log(`${j} * ${i} = ${element} `)

    }
    
}

//-------------------------------While loop----------------------
//Task 3                 Sum of Numbers
let numArray = [1,2,3,4,5,6,7,8,9,10]
let item = 0
let sum = 0
while (item <= numArray.length) {
    sum += item;
    item++
}
console.log(`sum of numbers = ${sum}`)

//Task 4                 print Numbers from 10 to 1
let num = 10;
while (num > 0) {
    console.log(num);
    num--
}

//-------------------------------do while loop----------------------

//Task 6                print numbers from 1 to 5
let i = 0;
do {
    i++
    console.log(i); 
} while (i < 5);

// Task 5                Factorial number
let Number = 5;
let factorial = 1
console.log(`Factorial of number 5 is `)
do {
    factorial *= Number;
    Number--
} while (Number > 1);
console.log(factorial)

//-------------------------------Nested Loop--------------------------------

//Task 6                Print Pattern
for (let i = 0; i < 5; i++) {
    let row = ''
    for (let j = 5; j > i; j--) {
        
        row += '*'
    }
    console.log(row)
    
}

//Task

for (let i = 1; i <= 5; i++) {
    let row = ''
    for (let j = 0; j < i; j++) {
        
        row += '*'
    }
    console.log(row)
    
}

//-------------------------------Loop Control Statment----------------------

// Task 7           Print number from 1 to 10 Skip 5 using continue statement
for (let i = 1; i < 11; i++) {
    if (i == 5) {
        continue;  //skip 5
    }
    console.log(i)
    
}

//Task 8            Print number from 1 to 10 Stop loop when number is 7

for (let i = 1; i < 111; i++) {
    if (i == 7) {
      break;  
    }
    console.log(i)
}

