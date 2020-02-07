/************************************
* Variable mutation and type coercion
*/

var firstName = 'John'
var age = 28

//Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is het married? ' + isMarried);

// Variable mutation - Video 9
age = 'twenty eight';
job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is het married? ' + isMarried);

// var lastName = prompt('What is his last name?');
// console.log('His last name is: ' + lastName);


/*******************************
* Basic operators - Video 10
*/

var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - 28;
yearMark = now - 33;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


//Logical operators
console.log('John is  ' + ageJohn + '. Mark is ' + ageMark);
var johnOlder = ageJohn > ageMark;
console.log('is john older than mark?: ' + johnOlder);


// Typeof operator
console.log(typeof johnOlder);


/*******************************
* Operator precendence - Video 11
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
// Assignments are operated from right to left so this is why x is not undefined.
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y)

x *= 2;
console.log(x);
x += 10;
console.log(x);
x = x + 1;
x++;
console.log(x);


/*******************************
* Coding Challenge - Video 12
*/

var markMass, johnMass, markHeight, johnHeight;
var markBMI, johnBMI;
var isMarkBMILarger;

markMass = 92;
markHeight = 1.95;

johnMass = 78;
johnHeight = 1.69;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);
console.log("Marks BMI is :" + markBMI);
console.log("John's BMI is :" + johnBMI);

isMarkBMILarger = markBMI > johnBMI;
console.log("Is mark's BMI larger than John? " + isMarkBMILarger);


/*******************************
* If / else statements - Video 14
*/

var firstName = "John";
var civilStatus = "Single";

if (civilStatus === "Married") {
    console.log(firstName + "Is married!");
} else {
    console.log(firstName + " is Single 😢😢");
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + "Is married!");
} else {
    console.log(firstName + " is Single 😢😢");
}

// Improved the coding challenge
var markMass, johnMass, markHeight, johnHeight;
var markBMI, johnBMI;
var isMarkBMILarger;

markMass = 92;
markHeight = 1.95;

johnMass = 78;
johnHeight = 1.69;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);
console.log("Marks BMI is :" + markBMI);
console.log("John's BMI is :" + johnBMI);

if (markBMI > johnBMI) {
    console.log("Mark's BMI is larger than John's")
} else {
    console.log("John's BMI is larger than Mark's")
}

/*******************************
* Boolean logic - Video 15
*/

var firstName = "John";
var age = 16;

if (age < 13) {
    console.log(firstName + "is a boy.")
} else if (age >= 13 && age < 20) {
    console.log(firstName + "is a teenager")
} else if (age >= 20 && age < 30) {
    console.log(firstName + "is a young man")
} else {
    console.log(firstName + "is a man")
}

/*******************************
* The Ternary Operator and Switch statements - Video 16
*/

var firstName = "John"
var age = 16

// Ternary Operator
// is the age greater than 18? true = first statement, elese is second statement.
age >= 18 ? console.log(firstName + "Drinks beer.")
    : console.log(firstName + " Drinks Juice.")

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

// The ternary operation written as if/else
if (age >= 18) {
    var drink = "beer";
} else {
    var drink = "juice";
}

// Switch statement
var job = "slink";
switch (job) {
    case "teacher":
        console.log(firstName + " teaches kids how to code");
        break;
    case "driver":
        console.log(firstName + " teaches how to drive");
        break;
    case "designer":
        console.log(firstName + " designs websites");
        break;
    default:
        console.log(firstName + " does something else");
}

//checks for the case "True" so whenever one of the cases below is true it will be printed.

var age = 20;
switch (true) {
    case age < 13:
        console.log(firstName + " is a boy");
        break;
    case age >= 13 && age < 20:
        console.log(firstName + " is a teenager");
        break;
    case age >= 20 && age < 30:
        console.log(firstName + " is a young man");
        break;
    default:
        console.log(firstName + " is a man")
}

/*******************************
* Truthy and Flasy values and equality operators - Video 17
*/

// falsy values: undefined, null, 0, '', NaN( =Not a Number)
// truthy values: NOT falsy values;

var height;
height = 0

if (height || height === 0) {
    console.log("variable is defined")
} else {
    console.log("Variable has NOT been defined")
}

// Equality operators
if (height == '23') {
    console.log("The == operator does type coercion!");
}


/*******************************
* Coding challenge II - Video 18
*/

var johnAvg, mikeAvg, maryAvg;

johnAvg = (100 + 100 + 100) / 3;
mikeAvg = (100 + 100 + 100) / 3;
maryAvg = (100 + 100 + 101) / 3;

console.log("johns team average score is: " + johnAvg);
console.log("mikes team average score is: " + mikeAvg);
console.log("mary's team average score is: " + maryAvg);

if (johnAvg > mikeAvg && johnAvg > maryAvg) {
    console.log("johns steam is the winner with " + johnAvg + " points, while mikes team had " + mikeAvg + "points. and Mary " + maryAvg);
} else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
    console.log("mike is the winner");
} else if (maryAvg > johnAvg && maryAvg > mikeAvg) {
    console.log("Mary is the winner ");
} else if (johnAvg === mikeAvg && johnAvg === maryAvg && mikeAvg === maryAvg) {
    console.log("both teams have " + johnAvg + " points!, its a Draw!");
} else {
    console.log("A strange situation happened! 😒");
}

''