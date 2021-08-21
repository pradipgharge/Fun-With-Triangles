var inputAngles = document.querySelectorAll(".input-angle");
var btnCheck = document.querySelector("#btn-check");
var outputDiv = document.querySelector("#isTriangle");

function isTriangle(){
    
    var sumOfAngles = calculateSumOfAngles(Number(inputAngles[0].value),Number(inputAngles[1].value), Number(inputAngles[2].value));

    if(sumOfAngles === 180){
        outputDiv.innerText= (`Yay, the sum of entered angles is ${sumOfAngles}. Hence they form a triangle !!`);
    }
    else if(sumOfAngles < 180){
        outputDiv.innerText= (`Uh Oh, the sum of entered angles is less than 180°. Hence they do not form a triangle !!`);

    }
    else{
        outputDiv.innerText= (`Uh Oh, the sum of entered angles exceeds 180°. Hence they do not form a triangle !!`);
    }
        
}

function calculateSumOfAngles(angle1, angle2, angle3){
    var sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

btnCheck.addEventListener("click", isTriangle);