var Question = function (question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

var question1 = new Question("Hoe heet het stadion van AFC Ajax?", ["0: Johan Cruijf Arena", "1: Rat Verlegh Stadion", "2: Arena"], 0);
var question2 = new Question("Hoe heet de spits van Real Madrid?", ["0: Ronaldo", "1: Messi", "2: Benzema"], 2);
var question3 = new Question("Hoe heet de coach van Liverpool?", ["0: Louis van Gaal", "1: Jurgen Klopp", "2: Karel Eiting"], 1);

var questionsCollection = [question1, question2, question3];

console.log(questionsCollection[1]);

console.log(questionsCollection);
number = Math.floor(Math.random() * 3) + 1;
console.log(number);

function questionSelector(questionsCollection) {
    number = Math.floor(Math.random() * 3) + 1
    randomQuestion = questionsCollection[number];

    console.log(randomQuestion.question);
    console.log(randomQuestion.answers[0]);
    console.log(randomQuestion.answers[1]);
    console.log(randomQuestion.answers[2]);

    return randomQuestion
};

var selectedQuestion = questionSelector(questionsCollection);

console.log(selectedQuestion.correctAnswer);

var userinput = prompt("Please select the correct answer(just type the number)");


function QuestionCorrectChecker(userinput) {

    console.log("You have chosen " + userinput);

    var correctAnswer = selectedQuestion.correctAnswer

    console.log("The correct answer is: " + correctAnswer);

    if (correctAnswer = userinput) {
        console.log("correct answer");
    } else {
        console.log("incorrect answer");
    }
}

QuestionCorrectChecker(userinput);




