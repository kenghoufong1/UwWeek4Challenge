var startbutton = document.getElementById("startbutton");
var timeEl = document.getElementById("time");
var fullpage = document.querySelector("body");
var timerhs = document.querySelector(".firstpage");
var questionEl = document.getElementById("question");
var answerList = document.getElementById("answers");
var firstcontent = document.querySelector(".middle");


startbutton.addEventListener("click", startquiz);

//created a function that counts down the time and appears game over when time runs out
var timeleft = 90;
function countdown() {
    var timerinterval = setInterval(function () {
        timeleft--;
        timeEl.textContent = timeleft + " sec until Gameover";
        if (timeleft === 0) {
            clearInterval(timerinterval);
            Gameover();


        }
    }, 1000);
}

// countdown();



const quiz = [{
    question: "What is HTML?",
    answers: ["HyperText Markup Language", "A website", "An international language", "An App"],
    correctIndex: 0
},
{
    question: "what is CSS?",
    answers: ["A Video Game", "Cascading Style Sheets", "Computer Science Search", "An App"],
    correctindex: 1
},
{
    question: "What is JS?",
    answers: ["JavaScript", "An App", "A Computer ", "A Brand"],
    correctindex: 0
}];

function startquiz() {
    timerhs.setAttribute("style", "display: inline");
    firstcontent.setAttribute("style", "display:none");
    appearanswer();
    countdown();
}

questionIndex = 0;

function Gameover(){
    fullpage.innerHTML = " ";
    let newpage = document.createElement("h1");
    newpage.textContent = "GameOver Your Final Score is " + timeleft;
    fullpage.appendChild(newpage);

}

function appearanswer() {
    if (questionIndex > quiz.length - 1) {
        Gameover();
    }
    questionEl.textContent = quiz[questionIndex].question;
    for (let i = 0; i < quiz.length + 1; i++) {
        let answerEl = document.createElement("li");
        answerEl.textContent = quiz[questionIndex].answers[i];
        answerList.appendChild(answerEl);
        answerEl.addEventListener("click", function () {
            questionIndex++;
            answerList.innerHTML = "";
            appearanswer();
        })

    }

}

