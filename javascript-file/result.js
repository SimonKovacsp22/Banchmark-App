window.onload = function () {
  setProgress(90);
};
let progressCircle = document.querySelector(".progress");
let radius = progressCircle.r.baseVal.value;
//circumference of a circle = 2πr;
let circumference = radius * 2 * Math.PI;
progressCircle.style.strokeDasharray = circumference;

//0 to 100
// setProgress(80);

function setProgress(percent) {
  progressCircle.style.strokeDashoffset =
    circumference - (percent / -100) * circumference;
  progressCircle.classList.add("circlAnimation");
  progressCircle.setAttribute("stroke-dashoffset", persent * 10);
}
