//****************************************Objects*****************************/
// Task 1                      Object creation and access
const book = {
    title: 'English comprehension',
    auhor: 'Hellen Keller',
    year: 2005,
    getDetails:function(){                      //object methods
        return `${this.title}, ${this.auhor}`;
    },
    getYear:function(year){
        return `${year}`
    }
}
// console.log(book);
// console.log(book.title);
// console.log(book.auhor);
// console.log(book.getDetails);
// console.log(book.getYear(2009));

//-----------------------------------Nested Objects-------------------------
const library = {
    name: "City Library",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee"
        },
        {
            title: "1984",
            author: "George Orwell"
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald"
        }
    ]
};
//Name of library
console.log(`Name of library: ${library.name}`)

//Name of title
library.books.forEach(book => {
    console.log(book.title) 
});


// console the name and year using this keyword within object
const Book = {
    name: 'Network Security',
    year: 2004,
    detail: function(){
        return `Book Name is ${this.name}  and published year is ${this.year}`
    }
}

console.log(Book.detail())

//---------------------------------------Object Iteration-----------------------------------------

const obj = {
    js: 'wJava Script',
    cpp: "C++",
    oop: "Object oriented programing"
}
for (const key  in obj) {
//    console.log(key)
   console.log(`${key} is shortcut for ${obj[key]}`);
}

//object.keys
console.log(Object.keys(obj))

//object.values
console.log(Object.keys(obj))




