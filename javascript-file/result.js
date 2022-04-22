window.onload = function () {
  setProgress(percentage);
};
let progressCircle = document.querySelector(".progress");
let radius = progressCircle.r.baseVal.value;
//circumference of a circle = 2πr;
let circumference = radius * 2 * Math.PI;
progressCircle.style.strokeDasharray = circumference;

let params = new URLSearchParams(document.location.search);
let newCorrectAnswer = parseInt(params.get("correct"))
console.log(newCorrectAnswer)

let newNUmberofQuestions = parseInt(params.get("questions"))
console.log(newNUmberofQuestions)


//0 to 100
// setProgress(80);
let rightPercentage = document.getElementById("correctPresentage");
let wrongPercentage = document.getElementById("wrongPresentage");
let rightCount = document.getElementById("rightCount");
let wrongCount = document.getElementById("wrongCount");

let questionNum = newNUmberofQuestions
console.log(questionNum);
// let correctNum = document.getElementById("calPresentage").value;
let correctNum = newCorrectAnswer;
console.log(correctNum);

let percentage = (correctNum / 100) * (questionNum * 100);
console.log(percentage);

// TO GENERATE RANDOM

function randomResult() {
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

function checkResult() {
  setProgress(percentage);
}

setInterval(checkResult, 1000);
