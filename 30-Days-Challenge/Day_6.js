//---------------------------------------Array Creation and access--------------------
const arr = [1,2,3,4,5,6,7,8]
console.log(arr)
console.log(arr[0]);               // access 1st element of array
console.log(arr[arr.length-1]);   //access last element of array

//--------------------------------------Array methods (Basics) --------------------------------------

arr.push(6);
console.log(`By pushing ${arr}`);
arr.pop();
console.log(`By popping ${arr}`);
arr.unshift(7);
console.log(`By unshift ${arr}`);
arr.shift()
console.log(`By shift ${arr}`);

//--------------------------------------Array methods (Intermediate) -----------------------------------

// .map()

const new_arr1 = arr.map(function(value){
     return value*2;
})
console.log(new_arr1)

//.filter
const new_arr2 = arr.filter((item)=> item % 2 == 0)
console.log(new_arr2)

//--------------------------------------Array Iteration --------------------------------------------------

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
}

arr.forEach(element => {
    console.log(element)
});

//--------------------------------------Multidimensional Array--------------------------------------------------

const twoDimensionalArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(twoDimensionalArray);

//access specific element

console.log(twoDimensionalArray[2][2]);


const rows = 3;
const cols = 4;

const twoDimensionalArray2 = Array.from({ length: rows }, () => Array(cols).fill(2));

console.log(twoDimensionalArray2);

//---------------------------Function Expression----------------------------

const findMax = function(a, b) {
    return a > b ? a : b;
};

// Usage
const max = findMax(10, 20);
console.log(max); // Output: 20