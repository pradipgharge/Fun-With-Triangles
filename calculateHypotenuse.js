var inputSides = document.querySelectorAll(".inputs");
var btnCheck = document.querySelector("#btn-check");
var outputDiv = document.querySelector("#triangle-hypotenuse");

function calculateHypotenuse(){
    
    var sumOfSquares = calculateSumOfSquares(Number(inputSides[0].value), Number(inputSides[1].value)); 
    var hypotenuseLength = Math.sqrt(sumOfSquares);

    outputDiv.innerText=(`The length of hypotenuse is ${hypotenuseLength} !!`);

}

 function calculateSumOfSquares(a,b) {
    var sumOfSquares = a*a + b*b;
    return sumOfSquares;
}


btnCheck.addEventListener("click", calculateHypotenuse);