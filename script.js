/********************
* Variable and data types
*/

// const firstName = 'John';
// console.log(firstName);

// const lastName = 'Smith';
// const age = 28;

// const fullAge = true;
// console.log(fullAge);

// let job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// Variable naming rules
// var _3years = 3;
// var johnMark = 'John and Mark';
// // var if = 23;




/********************
* Variable mutation and type coercion
*/


// var firstName = 'John';
// var age = 28;

// console.log(firstName + ' ' + age);


// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);


// // Variable mutation

// age = 'twenty-eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt(' What is his last Name? ');
// console.log(firstName + ' ' + lastName);






/***
 * Basic operators
 */
// var year, yearJohn, yearMark;
// now = 2022;

// // Math operators

// yearJohn = now - 33;
// yearMark = now - 44;

// console.log(yearJohn);

// console.log(now - 2);
// console.log(now + 2);
// console.log(now / 2);
// console.log(now * 2);

// //Logical operators
// var johnOlder = yearJohn < yearMark;
// console.log(johnOlder);

// //typeof operators

// console.log(typeof yearJohn);
// console.log(typeof johnOlder);
// console.log(typeof 'mark is a good boy!');
// var x;
// console.log(typeof x);




/*
Operator Precedence
*/

// let now = 2018;
// let yearJohn = 1989;
// let fullAge = 18;

// //Multiple operators
// let FullAge = now - yearJohn >= fullAge;
// console.log(FullAge);

// // Grouping
// let ageJohn = now - yearJohn;
// let ageMark = 35;
// let average = (ageJohn + ageMark) / 2;
// console.log(average);

// //Multiple grouping
// let x, y;
// x = y = (3 + 3) * 6 - 1;
// console.log(x, y);

// //More operation
// x *= 2;
// console.log(x);
// x**
// console.log(x);




// Coding challenge 

//Height

// let heightJohn = 4.5; //meters
// let heightMark = 6.5; //meters

// // Mass
// let massJohn = 70; //kg
// let massMark = 90; //kg

// // Calculate BMI - BMI = mass / height^2 = mass / (height * height).

// let JohnBMI = massJohn / heightJohn^2;
// console.log(JohnBMI);

// let MarkBMI = massMark / heightMark^2;
// console.log(MarkBMI);

// let markHigherBMI = MarkBMI > JohnBMI;
// console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);



// If / Else statements

// let firstName = 'John';
// let civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + 'is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// let isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }




// Boolean logic



// const firstName = 'John';
// const age = 20;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if(age >= 13 && age < 20){
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man. ');
// }else {
//     console.log(firstName + ' is a man.');
// }





// Ternary Operator and Switch Statements
 
// const firstName = 'John';
// const age = 21;

// // Ternary Operator 
// age >= 18 ? console.log(firstName + ' drinks beer. ')
// : console.log(firstName + ' drinks juice ');

// const drink = age >= 18 ? 'beer ' : 'juice ';
// console.log(drink);


// Switch Statements

// const job = 'teacher';
// switch (job) {
//     case 'teacher':
//         console.log(firstName + ' teaches kids in coding');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives Bolt in Lagos');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful website');
//         break;
//     default:
//         console.log(firstName + ' does something else ');
// }


// const firstName = 'John';
// const age = 21;
// switch (age) {
//     case 18:
//     case 19:
//     case 20:
//     case 21:
//     case 22:
//     case 23:
//     case 24:
//         console.log(firstName + ' drinks beer ');
//         break;
//     default:
//         console.log(firstName + ' drink juice ');
// }


// const firstName = 'John';
// const age = 13;
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a young man.');
// }



// Truthy and Falsy values and equality operators

// Falsy values: undefined, null, 0, '', NaN
// Truthy values: NOT falsy values

// let height;

// height = 23;
// if(height || height === 0) {
//     console.log('variable is defined');
// } else {
//     console.log('variable has NOT been defined');
// }

// // Equality operators
// if(height === '23') {
//     console.log('The == operator does type coercion!');
// }




//Coding Challenge 
 
// const scoreJohn = (89 + 120 + 103) / 3
// const scoreMike = (116 + 94 + 123) / 3
// const scoreMary = (97 + 134 + 105) / 3
// console.log(scoreJohn, scoreMike, scoreMary);

// if(scoreJohn > scoreMike && scoreJohn > scoreMary) {
//     console.log('John\'s team wins with ' + scoreJohn + ' points ');
// } else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
//     console.log('Mike\'s team wins with ' + scoreMike + ' points ');
// } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
//     console.log('Mary\'s team wins with ' + scoreMary + ' points');
// } else {
//     console.log('There is a draw');
// }



// if(scoreJohn > scoreMike) {
//     console.log('John\'s team wins with ' + scoreJohn + ' points ');
// } else if (scoreMike > scoreJohn) {
//     console.log('Mike\'s team wins with ' + scoreMike + ' points ');
// } else {
//     console.log('There is a draw');












































































/**********************
* Basic operators
*/



























