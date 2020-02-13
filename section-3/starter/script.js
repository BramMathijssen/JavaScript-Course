///////////////////////////////////////
// Lecture: Hoisting - Video 39


calculateAge(1990);

//function declaration supports hoisting
function calculateAge(year){
    console.log(2017 - year);
}

// retirement(1990);

//function expression does NOT support hoisting
var retirement = function(year){
    console.log(65 - (2016 - year));
}


//variables 
console.log(age); // returns undefined because its called before age is defined.
var age = 23; // stored in the global execution context
console.log(age);

function foo(){
    var age = 65;
    console.log(age); // prints 65
}
foo();
console.log(age); // prints 23 because var age is defined in the global execution context outside of a function


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(a + b + c + d); // doesnt work
    console.log(a + d);
}




///////////////////////////////////////
// Lecture: The this keyword

console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name:"john",
    YearOfBirth: 1990,
    calculateAge: function() {
        console.log(this); // in this case the this keyword refers to the john object
        console.log(this.YearOfBirth); // so this = john, so you could see this as john.YearOfBirth

        // function innerFunction() {
        //     console.log(this); // calls to the global window object and NOT to john anymore.
        // }
        // innerFunction();
    }
}

john.calculateAge();


var mike = {
    name : "mike",
    YearOfBirth: 1984,
};

// the this variable is only assigned a value as soon as a object calls a method in practice
// copies the john calculate age function and stores it in the mike object
mike.calculateAge = john.calculateAge;
mike.calculateAge();







