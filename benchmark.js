'use strict';

 // Credit: Mateusz Rybczonec

 const FULL_DASH_ARRAY = 283;
 const WARNING_THRESHOLD = 10;
 const ALERT_THRESHOLD = 5;

 const COLOR_CODES = {
   info: {
     color: "green",
   },
   warning: {
     color: "orange",
     threshold: WARNING_THRESHOLD,
   },
   alert: {
     color: "red",
     threshold: ALERT_THRESHOLD,
   },
 };

 const TIME_LIMIT = 10;
 let timePassed = 0;
 let timeLeft = TIME_LIMIT;
 let timerInterval = null;
 let remainingPathColor = COLOR_CODES.info.color;

 document.getElementById("app").innerHTML = `
<div class="base-timer">
<svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<g class="base-timer__circle">
 <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
 <path
   id="base-timer-path-remaining"
   stroke-dasharray="283"
   class="base-timer__path-remaining ${remainingPathColor}"
   d="
     M 50, 50
     m -45, 0
     a 45,45 0 1,0 90,0
     a 45,45 0 1,0 -90,0
   "
 ></path>
</g>
</svg>
<span id="base-timer-label" class="base-timer__label">${formatTime(
timeLeft
)}</span>
</div>
`;

 startTimer();

 function onTimesUp() {
   clearInterval(timerInterval);
 }

 function startTimer() {
   timerInterval = setInterval(() => {
     timePassed = timePassed += 1;
     timeLeft = TIME_LIMIT - timePassed;
     document.getElementById("base-timer-label").innerHTML =
       formatTime(timeLeft);
     setCircleDasharray();
     setRemainingPathColor(timeLeft);

     if (timeLeft === 0) {
       onTimesUp();
     }
   }, 1000);
 }

 function formatTime(time) {
   // const minutes = Math.floor(time / 60);
   // let seconds = time % 60;
   let seconds = time;

   if (seconds < 10) {
     seconds = `0${seconds}`;
   }

   // return `${minutes}:${seconds}`;
   return `${seconds}`;
 }

 function setRemainingPathColor(timeLeft) {
   const { alert, warning, info } = COLOR_CODES;
   if (timeLeft <= alert.threshold) {
     document
       .getElementById("base-timer-path-remaining")
       .classList.remove(warning.color);
     document
       .getElementById("base-timer-path-remaining")
       .classList.add(alert.color);
   } else if (timeLeft <= warning.threshold) {
     document
       .getElementById("base-timer-path-remaining")
       .classList.remove(info.color);
     document
       .getElementById("base-timer-path-remaining")
       .classList.add(warning.color);
   }
 }

 function calculateTimeFraction() {
   const rawTimeFraction = timeLeft / TIME_LIMIT;
   return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
 }

 function setCircleDasharray() {
   const circleDasharray = `${(
     calculateTimeFraction() * FULL_DASH_ARRAY
   ).toFixed(0)} 283`;
   document
     .getElementById("base-timer-path-remaining")
     .setAttribute("stroke-dasharray", circleDasharray);
 }

// STARTING OF THE QUESTIONS ARRAY
const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];
// SELECTING THE ELEMENTS
let h2 = document.querySelector("h2");
let randNumber = Math.trunc(Math.random() * questions.length);

// TO GET THE RANDOM OBJECT INSIDE ARRAYS
function ranQuestionsObj(){
    const randObject = questions[randNumber];
    return randObject;
}



console.log(ranQuestionsObj());
// // INITIALISE MY WORK
let question = ranQuestionsObj().question;
let incorrectAnswers = ranQuestionsObj().incorrect_answers;
let correctAnswer = ranQuestionsObj().correct_answer;

console.log(`this is my question ${question}`);
console.log(`Correct answer ${correctAnswer}`);
console.log(`incorrect answer ${incorrectAnswers}`);

let myTime = setInterval(function(){
    
}, 1000)

if(myTime === 2){
    question = ranQuestionsObj().question;
    h2.innerText = question;
}