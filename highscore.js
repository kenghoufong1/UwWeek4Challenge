var highscorepage = document.getElementById("namehighscore");
var returnbutton = document.getElementById("newbutton");
returnbutton.textContent =("Return to Main");

returnbutton.addEventListener("click",function(){
    window.location='index.html';
})


var highscore =JSON.parse(localStorage.getItem("Score"));
console.log(highscore);
highscorepage.textContent = highscore.name + "with a score of "+highscore.score ;

