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




// FUNCTIONS

//Syntax of functions || 
// function name(params) {
// }
// An arguments can be pass using FUNCTIONS and the ARGUMENTS can be RETURN using KEYWORDS!!!


// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// const ageJohn = calculateAge(1999)
// const ageMark = calculateAge(2000)
// const ageJane = calculateAge(1995)

// console.log(ageJohn, ageMark, ageJane);




// Assign the function => year & firstName
//  Declare the functions => function name(params) { 
// }
// Calculate => the year until retirement => using if/else statement to know those who has retired. 
//FUNCTIONS CAN CALL OTHER FUNCTIONS!!!!



// function yearsUntilRetirement(year, firstName) {
//     let age = calculateAge(year);
//     let retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' year ');
//     } else {
//         console.log(firstName + ' is already retired ');
//     }
// }
//  yearsUntilRetirement(1990, 'John');
//  yearsUntilRetirement(1945, 'Mike');
//  yearsUntilRetirement(2002, 'Jane');




// Function Statements and Expressions

//Function declaration 
//Function whatDoYouDo(job, firstName) {} 


//Functions expressions
// const whatDoYouDo = function (job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver':
//             return firstName + ' drives Bolt in Lagos';
//         case 'designer':
//             return firstName + ' designs beautiful websites';
//         default:
//             return firstName + ' does something else';
//     }
// }

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('driver', 'Andrew'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Favour'));




// Arrays 
// const names = ['John', 'Mark', 'Jane'];
// const years = new Array (1890, 2000, 2018);

// console.log(names);
// console.log(names.length);

// names[1] = 'Ben';//=> .name[] is to re-assign 'element' in the array

// names[names.length] = 'Mary'; //=> .length is to assign new 'element' in the array
// console.log(names);

// const primes = [2,6,7];
// console.log(primes.length-1); //=> .length-1 is to remove 'element-length' in the array



// Different data types


// const John = ['John', 'Smith', 2000, 'designer', 'false']

// John.push('blue'); //=> .push is to add 'element' from behind

// John.unshift('Mr.'); //=> .unshift is to add 'element' from the front

// John.pop(); //=> .pop is to remove 'element' from behind

// John.shift(); //=> .shift is to add 'element' from the front

// console.log(John);

// console.log(John.indexOf(2));

// const isDesigner = John.indexOf('designer') === -1 ? 'John is not a designer ' : 'John is a designer'

// console.log(isDesigner);


//Coding Challenge

// function calculateTip(bill) {
//     let percentage;
//     if (bill < 50) {
//         percentage = .2;
//     } else if (bill >= 50 && bill < 200) {
//         percentage = .15;
//     } else {
//         percentage = .1;
//     }
//     return percentage * bill;
// }

// const bills = [124, 48, 268];
// const tips = [calculateTip(bills[0]), 
// calculateTip(bills[1]),
// calculateTip(bills[2])];

// const finalValues = [bills[0] + tips[0], bills[1] + tips[0], bills[2] + tips[2]];

// console.log(tips, finalValues);





// Object and Properties 
// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     job: 'Teacher',
//     birthYear: 1999,
//     family: ['Jane','Elo', 'Favour'],
//     isMarried: 'false'
// };

// console.log(john.firstName);
// console.log(john.lastName);
// console.log(john['birthYear']);

// const x = 'job';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// const jane = new Object();
// jane.firstName = 'John';
// jane.lastName = 'smith';
// jane['job'] = 'teacher';

// console.log(jane);





// //Object and Method
// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     job: 'Teacher',
//     birthYear: 2000,
//     family: ['Jane','Elo', 'Favour'],
//     isMarried: 'false',
//     calcAge: function() {
//         this.age = 2040 - this.birthYear;
//     }
// };
// john.calcAge();
// console.log(john);




// Coding Challenge

// create the Objects - John & Mark
// const john = {
//     fullName: '',
//     mass: , //Kg
//     height: , //mm
//     calculateBMI: function() {
//          = () return ;
//     }

// const john = {
//     fullName: 'John Smith',
//     mass: 79 , //Kg
//     height: 5.1, //mm
//     calculateBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
// return this.bmi;
//     }
// }


// const mark = {
//     fullName: 'Mark Miller',
//     mass: 89, //Kg
//     height: 6.1, //mm
//     calculateBMI: function() {
//         this.bmi = this.mass /(this.height * this.height); return this.bmi;
//     }
// }

// if (john.calculateBMI() > mark.calculateBMI()) {
//     console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
// } else if (mark.bmi > john.bmi) {
//     console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
// } else {
//     console.log('They have the same BMI');
// }


// Loops & Iteration


// for loop

/*
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let john = [ 'Andrew', 'James', 'Henry', 1999];
for (let i = 0; i < john.length; i++) {
    console.log(john[i]);
}


// while loop


let i = 0
while (i < john.length) {
    console.log(john[i]);
    i++;
} */


// Continue and break statement

/*let john = [ 'Andrew', 'James', 'Henry', 1999, 'faith', false, 'blue'];
for (let i = 0; i < john.length; i++) {
    if (typeof john[1] !== 'string') continue;
    console.log(john[i]);
}


for (let i = 0; i < john.length; i++) {
    if (typeof john[1] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards
for (let i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}/*/

//Loops prevent repetitions of code but still getting same functionality as it.

///

/********
 Coding Challenge 5
 */

 /*
 Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

 This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
 John likes to tip 20% of the bil when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

 Implement a tip calculator using objects and loops:
 1. Create an object with an array for the bill values
 2. Add a method to calculate the tip
 3. This method should include a loop to iterate over all the paid bills and do the trip calculations
 4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


 EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.

 Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

 5. Implement the same functionality as before, this time using Mark's tipping  rules.
 6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting frm 0). After you have the sum of the array, divide it by the number of the elements in it(that's how you calculate the average)
 7. Calculate the average tip for each family 
 8. Log to the console which family paid the highest tips on average. 
*/

//Coding Challenge Solution

let john = {
    fullName: "John Smith",
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (let i = 0; i < this.bills.length; i++)
        {
            //Determine percentage based on tipping rules
            let percentage;
            let bill = this.bills[i];
            
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            //Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill * bill * percentage;
        }
    }
}

john.calcTips() ;
console.log(john);


















































