var quizForm = document.querySelector(".quiz-form");
var btnSubmit = document.querySelector("#btn-check");
var outputDiv = document.querySelector("#triangle-quiz");

var correctAnswers=["Equilateral", "Scalene", "Hypotenuse", "Centroid", "Pythagoras Theorem", "Acute angle triangle", "75°", "Trigonometry", "25", "180°"];

function calculateScore(){
   
    let score = 0;
    index = 0;
    var formResults = new FormData(quizForm);

   for(let value of formResults.values()){
       if(value === correctAnswers[index]
        ){
            score = score+1;
        }
        index = index + 1;
   }
    outputDiv.innerText=(`You total score is ${score}`);
}

btnSubmit.addEventListener("click", calculateScore);