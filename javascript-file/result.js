window.onload = function () {
  setProgress(percentage);
};
let progressCircle = document.querySelector(".progress");
let radius = progressCircle.r.baseVal.value;
//circumference of a circle = 2πr;
let circumference = radius * 2 * Math.PI;
progressCircle.style.strokeDasharray = circumference;

//0 to 100
// setProgress(80);
let rightPercentage = document.getElementById("correctPresentage");
let wrongPercentage = document.getElementById("wrongPresentage");
let rightCount = document.getElementById("rightCount");
let wrongCount = document.getElementById("wrongCount");

let questionNum = randomResult();
console.log(questionNum);
// let correctNum = document.getElementById("calPresentage").value;
let correctNum = randomResult();
console.log(correctNum);

let percentage = ( correctNum ) * ( questionNum );
console.log(percentage);

// TO GENERATE RANDOM 

function randomResult(){
  return Math.trunc(Math.random() * 10);
}


function setProgress(percent) {
  progressCircle.style.strokeDashoffset =
    circumference - (percent / -100) * circumference;
  progressCircle.classList.add("circlAnimation");
  progressCircle.setAttribute("stroke-dashoffset", percent * 10);
  rightPercentage.innerText = percentage + " %";
  wrongPercentage.innerText = 100 - percentage + " %";
  rightCount.innerText = correctNum + "/" + questionNum + " questions";
  wrongCount.innerText =
    questionNum - correctNum + "/" + questionNum + " questions";
}



function checkResult(){
   setProgress(percentage)
}



setInterval(checkResult, 1000)