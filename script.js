var startbutton = document.getElementById("startbutton");
var timeEl = document.getElementById("time");
var fullpage = document.querySelector("body");
var quizquestion = document.getElementById("question");
var timerhs = document.querySelector(".firstpage");
var questionEl = document.getElementById("question");
var answerList =document.getElementById("answers");


startbutton.addEventListener("click" , startquiz);

//created a function that counts down the time and appears game over when time runs out
var timeleft = 90;
function countdown(){
    var timerinterval = setInterval(function(){
        timeleft --;
        timeEl.textContent = timeleft +" sec until Gameover";
        if(timeleft === 0){
            clearInterval(timerinterval);
            fullpage.innerHTML = " ";
            
            
        }
    },1000);
}

// countdown();



const quiz = [{
    question: "what is HTML?",
    answers: ["HyperText Markup Language","1","2","3"],
    correctIndex: 0
},
{
    question:"what is CSS?",
    answers: ["css","2","5","20"],
    correctindex: 2
},
{
    question:"what is JS?",
    answers: ["JavaScript","200","2050","500"],
    correctindex: 0
}];

function startquiz(){
    timerhs.setAttribute("style","display: inline");
}

questionIndex = 0;

function displayquestion(){
    if(questionIndex > quiz.length -1){
        // endquiz
    }
    
}

 questionEl.textContent = quiz[questionIndex].question;
 for (let i = 0; i < quiz.length + 1; i++) {
    let answerEl = document.createElement("li");
    answerEl.textContent = quiz[questionIndex].answers[i];
    answerList.appendChild(answerEl);
 }


