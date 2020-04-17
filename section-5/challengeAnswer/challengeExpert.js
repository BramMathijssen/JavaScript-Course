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
    function (ans, callback) {
        var sc;

        if (ans === this.correctAnswer) {
            console.log("Correct answer!👌");
            sc = callback(true)
        } else {
            console.log("Wrong answer. Try again 😂");

            sc = callback(false);
        }

        this.displayScore(sc);
    }

Question.prototype.displayScore =
    function (score) {
        console.log("You current score is: " + score);
        console.log("----------------------");
    }

var question1 = new Question("Hoe heet het stadion van AFC Ajax?", ["Johan Cruijf Arena", "Rat Verlegh Stadion", "Arena"], 0);
var question2 = new Question("Hoe heet de spits van Real Madrid?", ["Ronaldo", "Messi", "Benzema"], 2);
var question3 = new Question("Hoe heet de coach van Liverpool?", ["Louis van Gaal", "Jurgen Klopp", "Karel Eiting"], 1);

var questionsCollection = [question1, question2, question3];

function score() {
    var sc = 0;
    return function (correct) {
        if (correct) {
            sc++;
        }
        return sc;
    }
}

var keepScore = score();

function nextQuestion() {


    number = Math.floor(Math.random() * questionsCollection.length);

    questionsCollection[number].displayQuestion();

    var answer = prompt("Please select the correct answer.");

    if (answer !== "exit") {
        questionsCollection[number].checkAnswer(parseInt(answer), keepScore);

        nextQuestion();
    } else if (answer === "exit") {
        console.log("Thanks for playing!")
    }
}

nextQuestion();