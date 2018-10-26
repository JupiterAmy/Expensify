//Object destructuring

// const person = {
//     name: 'Amritansh',
//     age: 28,
//     location: {
//         city: 'Bangalore',
//         temperature: 92
//     }
// };

// const {name, age} = person;
// console.log(`${name} is ${age} years old!`);

// /*
// ES6 important features
// 1. Template String
// 2. Arrow Functions
// 3. Default Parameters
// 4. Object Destructuring
// 5. Block scoped constructs let and const
// 6. Promises
// 7. classes in ES6





// */

// const book = {
//     name: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name, author} = book;
// const {name: publisherName = 'Self Published'} = book.publisher;

// console.log(`${name} is written by ${author} and published by ${publisherName}`);


//Array Destructuring

const address = ['106', 'Angel Block', 'Siddha Town', 'Kolkata'];

const [flat, block, society, city] = address;

console.log(`You are in ${society} in ${city}`);


