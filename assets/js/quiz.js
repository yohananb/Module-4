var startbtn = document.getElementById("start");
var timer = document.getElementById("timer");
var questions = [
    {
        prompt: "Commonly used data types do NOT include:", 
        options: ["booleans", "alerts", "strings", "numbers"],
        answer:"booleans"
    },

    {
        prompt: "The condition in an if / else statement is enclosed with:", 
        options: ["quotes", "curly brackets", "parenthesis", "sqaure brackets"],
        answer:"parenthesis"
    },
    {
        prompt: "Arrays in JavaScript can be used to store:", 
        options: ["nubmer and strings", "other arrays", "booleans", "all of the above"],
        answer:"booleans"

    },
    {
        prompt: "String values must be enclosed within _____ when being assigned to variables:", 
        options: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer:"quotes"

    },
    {
        prompt: "A very useful tool used during development and debugging for printing content  to the debugger is", 
        options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer:"Javascript",







    }
]

function hide(){
document.getElementById("answersList").style.display = "none"
}

 







var timerleft = 50
var currentquestion = 0
function showquestion(){
    document.getElementById("prompt").textContent = questions[currentquestion].prompt
    document.getElementById("opt1").textContent = questions[currentquestion].options[0]
    document.getElementById("opt2").textContent = questions[currentquestion].options[1]
    document.getElementById("opt3").textContent = questions[currentquestion].options[2]
    document.getElementById("opt4").textContent = questions[currentquestion].options[3]
    
}




function quizbegins(){
    document.getElementById("answersList").style.display = "block"
    startTimer() 
    showquestion()
}



function startTimer(){
  
    var quizinterval = setInterval(timegoesdown, 1000);
    function timegoesdown(){
        timerleft--
        timer.textContent = timerleft

        if(timerleft <= 0 || !questions[currentquestion]){
           clearInterval(quizinterval)
           timer.textContent = "Time is up!!"
           
        //    final score at the end
           var score = timerleft
           var finalscore = document.getElementById("finalscore")
           finalscore.textContent = "Your final score: " + score

           
           var scoreboard = document.getElementById("scoreboard"); 
        //    get the scoreboard id 
           scoreboard.classList.remove("displaynone"); 
        //    removes the display none css from id
           
           var quizquestions = document.getElementById("quizquestions");
           quizquestions.classList.add("displaynone");

           var title = document.getElementById("title");
           title.classList.add("displaynone");
           
           var startbtngone = document.getElementById("start");
           startbtngone.classList.add("displaynone");

           
        

        }
    }      
 }
    


       
function checkanswer(event){
    var userchoice = event.target.textContent
    questions[currentquestion].answer
    if(questions[currentquestion].answer != userchoice){
        timerleft -= 5
    }
    
    currentquestion++
    showquestion()

    // if (!questions[currentquestion]) {
    //     startTimer()
    //    }

    // use userchoice to check if its incorrect or correct

}

hide()

startbtn.addEventListener("click",quizbegins)
document.getElementById("opt1").addEventListener("click",checkanswer)
document.getElementById("opt2").addEventListener("click",checkanswer)
document.getElementById("opt3").addEventListener("click",checkanswer)
document.getElementById("opt4").addEventListener("click",checkanswer)


