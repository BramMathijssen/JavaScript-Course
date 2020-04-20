// var john = {
//     name: "John",
//     yearOfBirth: 1990,
//     job: "teacher"
// };

// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;

//     /*this.calculateAge = function() {
//         console.log(2016 - this.yearOfBirth); 
//     }*/
// }

// // placed the calculateAge method outside of the contructor, so you can use it only when you needed.
// // This is especialy more efficient when the method has many lines of code.
// Person.prototype.calculateAge = function () {
//     console.log(2016 - this.yearOfBirth);
// }

// Person.prototype.lastName = "smith";

// var john = new Person("John", 1990, "teacher");
// john.calculateAge();

// var jane = new Person("Jane", 1969, "designer");
// var mark = new Person("Mark", 1948, "retired");

// console.log(john.lastName);
// console.log(mark.lastName);
// console.log(jane.lastName);

// var x= [2,3,4];

// console.log(x.length);


//-----------------------------
//Object.create -- Video 63
//-----------------------------

var personProto = {
    calculateAge : function () {
        console.log(2016 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto,
    {
        name: { value: "jane"},
        yearOfBirth: {value: 1969},
        job: {value: "designer"}
    } );


//-----------------------------
// Primitives vs objects -- Video 64
//-----------------------------


// Primitives
var a = 23;
var b = a;
a= 46;
console.log(a); // returns 46
console.log(b); // returns 23


//Objects
var obj1 = {
    name: "john",
    age : 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); // both return 30
console.log(obj2.age); // both return 30


//Functions
var age = 27;
var obj = {
    name: "Jonas",
    city: "Lisbon"
};

function change(a,b) {
    a = 30;
    b.city = "San Francisco"
}

change(age,obj);

console.log(age);
console.log(obj.city);


//-----------------------------
// First class Functions -- Video 65
// Passing functions as arguments
//-----------------------------

var years= [1990, 1965, 1947, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i<arr.length ;i++){
        arrRes.push(fn(arr[i]))
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <81){
        return  Math.round(206.9 - (0.67 * el));
    } else{
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);

//-----------------------------
// Functions returning a function -- Video 66
//-----------------------------

function interviewQuestion(job) {
    if (job === "designer"){
        return function(name) {
            console.log(name + ", can you please explain what UX design is?");
        }
    } else if (job === "teacher") {
        return function(name) {
            console.log("what subject do you teach, " + name + "?");
        }
    } else{
        return function (name){
            console.log("Hello " + name + ", what do you do?");
        }
    }
}

var teacherQuestion = interviewQuestion("teacher");

var designerQuestion= interviewQuestion("designer");

teacherQuestion("John")
designerQuestion("John");

interviewQuestion("teacher")("mark");//works aswell


//-----------------------------
// IIFE = Immediatly Invoked Function Expressions -- Video 67
//-----------------------------

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();
sdgvg
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);

})(5);


//-----------------------------
// Closures -- Video 68
//-----------------------------
// An inner function always has access to the variables and parameters of it's outer function,
// even after the outer function has returned

function retirement(retirementAge) {
    var a = " years left until retirement."
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log(retirementAge - age + a);
    } 
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland  = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

//retirement(66)(1990);

// function interviewQuestion(job) {
//     if (job === "designer"){
//         return function(name) {
//             console.log(name + ", can you please explain what UX design is?");
//         }
//     } else if (job === "teacher") {
//         return function(name) {
//             console.log("what subject do you teach, " + name + "?");
//         }
//     } else{
//         return function (name){
//             console.log("Hello " + name + ", what do you do?");
//         }
//     }
// }

// Same function as above but made using Closures.
// You can use the job argument even while the function is allready returned
function interviewQuestion(job){
    return function(name){
        if(job === "designer"){
            console.log(name + ", can you please explain what UX design is?");
        } else if(job == "teacher"){
            console.log("what subject do you teach, " + name + "?");
        } else {
            console.log("Hello " + name + ", what do you do?");
        }
    }
}

var interviewQuestionDesigner = interviewQuestion("designer");
interviewQuestionDesigner("john");

interviewQuestion("teacer")("john");


//-----------------------------
// Lecture: Bind, call and apply -- Video 69
//-----------------------------

var john = {
    name: "john",
    age: 26,
    job: "teacher",
    presentation: function(style, timeOfDay){
        if (style === "formal"){
            console.log("Good " + timeOfDay + " Ladies and gentlement! I'm" + this.name + "Im a " + this.job + "and im " + this.age);
        } else if (style === "friendly") {
            console.log("Yo whatsup homies I'm " + this.name + " Im a " + this.job + " and im " + this.age + " Have a nicer " + timeOfDay);
        }
    }
}

var emily = {
    name: "emily",
    age: 36,
    job: "designer"
};

john.presentation("formal" , "morning")
john.presentation.call(emily, "friendly", "afternoon")

var johnFriendly = john.presentation.bind(john, "friendly");
johnFriendly("morning");
johnFriendly("night");

var emilyFormal = john.presentation.bind(emily, "formal");
emilyFormal("afternoon");


var years= [1990, 1965, 1947, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i<arr.length ;i++){
        arrRes.push(fn(arr[i]))
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el){
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);