var startbutton = document.getElementById("startbutton");
var timeEl = document.getElementById("time");
var fullpage = document.querySelector("body");
var timerhs = document.querySelector(".firstpage");
var questionEl = document.getElementById("question");
var answerList = document.getElementById("answers");
var firstcontent = document.querySelector(".middle");

startbutton.addEventListener("click", startquiz);

//created a function that counts down the time and appears game over when time runs out
var timeleft = 60;
function countdown() {
    var timerinterval = setInterval(function () {
        timeleft--;
        timeEl.textContent = timeleft + " sec until Gameover";
        if (timeleft < 1) {
            clearInterval(timerinterval);
            Gameover();
        }
    }, 1000);
}
// created an Array of Object for the question and answers 
const quiz = [{
    question: "What is HTML?",
    answers: ["HyperText Markup Language", "A website", "An international language", "An App"],
    correctIndex: 0
},
{
    question: "what is CSS?",
    answers: ["A Video Game", "Cascading Style Sheets", "Computer Science Search", "An App"],
    correctIndex: 1
},
{
    question: "What is JS?",
    answers: ["JavaScript", "An App", "A Computer ", "A Brand"],
    correctIndex: 0
}];
//created an another functiuon that will start the quiz when the button is click also display some hidden stuff and hide the first page
function startquiz() {
    timerhs.setAttribute("style", "display: inline");
    firstcontent.setAttribute("style", "display:none");
    appearanswer();
    countdown();
}



//created an another function that when time runs out will display a new page and also take in the user's name and score and saved it to local storage . 
function Gameover() {
    var timeleftreal =timeleft
    fullpage.innerHTML = " ";
    let newpage = document.createElement("h1");
    newpage.textContent = "GameOver Your Final Score is " + timeleft;
    fullpage.appendChild(newpage);
    let nameinput = document.createElement("textarea");
    nameinput.setAttribute("placeholder","Your Name");
    fullpage.appendChild(nameinput);
    let newbutton = document.createElement("button");
    fullpage.appendChild(newbutton);
    newbutton.textContent ="Submit";
    newbutton.addEventListener("click",function(){
        var namescore ={
            name: nameinput.value,
            score: timeleftreal
        };
        localStorage.setItem("Score",JSON.stringify(namescore));
        window.location='index.html';
    })
}
//create a function that will 
questionIndex = 0;
function appearanswer() {
    if (questionIndex > quiz.length - 1) {
        Gameover();
    }
    questionEl.textContent = quiz[questionIndex].question;
    for (let i = 0; i < quiz[questionIndex].answers.length ; i++) {
        let answerEl = document.createElement("li");
        answerEl.textContent = quiz[questionIndex].answers[i];
        answerList.appendChild(answerEl);
        answerEl.addEventListener("click", checkanswer);

    }

}

function checkanswer(event) {
    var correctIndextemp = quiz[questionIndex].correctIndex;
    if (event.target.textContent == quiz[questionIndex].answers[correctIndextemp]) {
        alert("Correct!");
    }
    else {
        timeleft -= 15;
    }
    questionIndex++;
    answerList.innerHTML = "";
    appearanswer();
}
