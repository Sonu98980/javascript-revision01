// SPREAD OPERATORS
// OBJECT ARRAY TOO MUCH USED IN FUNCTION 
// ... SHOULD USE
// DUPLICATE BNANE KE LIYE

// SPREAD OPERATOR IN ARRAYS

// const arr = [1,2,3,4,5,];
// const duplicateArray = [...arr]
// console.log(duplicateArray);


// q MERGE TWO ARRAY

// const num1 = [1,2,3,4,5];
// const num2 = [6,7,8,9];

// const result = [...num1, ...num2]
// console.log(result)    // output [1,2,3,4,5,6,7,8,9] merged


// const deTail = ["sonu", 20, "ranchi", "male",]
// // deTail.push("hello")
// const res = [...deTail,"helloo","hey"]
// console.log(res)


// IN OBJECT

// const obj = {
//     name : "sonu",
//     gender: "male",
//     age : 20,
//     address : "ranchi"
// };
// const obj1= {
//     a:1,
//     b:2
// };
// const result = {...obj, ...obj1};
// console.log(result);


// IN FUNCTION 

// function sum(...numbers){
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         // console.log(`adding ${numbers[i]}`)
//         sum += numbers[i];
//     }
//     return sum ;
// };
// console.log(sum(635,6,66));


// LET CONST VARIABLES

// let a = 10;
// a=30;            // ESKO MODIFY KIYA JA SAKTA HAI OUTPUT = 30 MODIFY KIYE HAI
// console.log(a);

// const a = 20;
// // a=30;              // ESKO MODIFY NAHI KAR SKTE ERROR SHOW HOGA ASSIGNMENT TO CONSTANT 

// console.log(a); //OUTPUT 20

