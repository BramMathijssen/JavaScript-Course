function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

Question.prototype.displayQuestion =
    function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ": " + this.answers[i]);
        }
    }

Question.prototype.checkAnswer =
    function (ans) {
        if (ans === this.correctAnswer) {
            console.log("Correct answer!👌");
        } else {
            console.log("Wrong answer. Try again 😂");
        }
    }

var question1 = new Question("Hoe heet het stadion van AFC Ajax?", ["Johan Cruijf Arena", "Rat Verlegh Stadion", "Arena"], 0);
var question2 = new Question("Hoe heet de spits van Real Madrid?", ["Ronaldo", "Messi", "Benzema"], 2);
var question3 = new Question("Hoe heet de coach van Liverpool?", ["Louis van Gaal", "Jurgen Klopp", "Karel Eiting"], 1);

var questionsCollection = [question1, question2, question3];

number = Math.floor(Math.random() * questionsCollection.length) + 1

questionsCollection[number].displayQuestion();

var answer = parseInt(prompt("Please select the correct answer."));

questionsCollection[number].checkAnswer(answer);






