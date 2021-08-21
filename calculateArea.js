var sideInput = document.querySelectorAll(".inputs");
var btnCheck = document.querySelector("#btn-check");
var outputDiv = document.querySelector("#triangle-area");


function areaOfTriangle(){
    var baseHeightproduct = calculateBaseHeightProduct(Number(sideInput[0].value), Number(sideInput[1].value));

    var area = baseHeightproduct * 1/2
    outputDiv.innerText=(`The area of triangle is ${area} !`);
}

function calculateBaseHeightProduct(a,b){
    baseHeightproduct=  a * b;
    return baseHeightproduct ;
}

btnCheck.addEventListener("click", areaOfTriangle);