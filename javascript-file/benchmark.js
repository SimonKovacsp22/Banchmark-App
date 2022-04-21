// QUESTIONS


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
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
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

let questionCount = 1
let correctAnswersCount = 0


  questions.forEach(function(Question){
    let questionsAndAnswersDivNode = document.createElement('div')
    let questionAndAnswersHolderNode = document.getElementById('questions-container')
    questionAndAnswersHolderNode.appendChild(questionsAndAnswersDivNode)

    let questionH2Node = document.createElement('h2')
    questionH2Node.innerText = Question.question
    questionH2Node.classList.add('question-style')
    
    questionsAndAnswersDivNode.appendChild(questionH2Node)
    let correctAnsButtonNode = document.createElement('button')
    correctAnsButtonNode.innerText = Question.correct_answer
    correctAnsButtonNode.classList.add('btn')
    correctAnsButtonNode.setAttribute('id','correct')
    questionsAndAnswersDivNode.appendChild(correctAnsButtonNode)
    Question.incorrect_answers.forEach(function(answer){
      let incorrectAnsButtonNode = document.createElement('button')
      incorrectAnsButtonNode.innerText = answer
      incorrectAnsButtonNode.classList.add('btn')
      questionsAndAnswersDivNode.appendChild(incorrectAnsButtonNode)
    })
})
let allDivsContainingQuestionsNode = document.querySelectorAll('#questions-container > div')
allDivsContainingQuestionsNode.forEach(function(element){
  element.classList.add('display-not')

})
allDivsContainingQuestionsNode[0].classList.remove('display-not')
let allButtonsWithAnswersNodes =document.getElementsByClassName('btn')
for(let node of allButtonsWithAnswersNodes){
  node.addEventListener('click',function(){ node.classList.toggle('selected')})
}



let submitBtn= document.querySelector('#submitBtn')


submitBtn.addEventListener('click',queTrans =function (){
  
  
let allQuestionsDivsNode = document.querySelectorAll('#questions-container >div')
let questionNumberSpan = document.getElementById("questionNumber")
questionNumberSpan.innerText =`${2}`
 
  questionCount +=1
  for (let index = 0; index < questions.length; index++) {
    
    if (!allQuestionsDivsNode[index].classList.contains('display-not')  ) {
      
      allQuestionsDivsNode[index].classList.add('display-not')
      
      allQuestionsDivsNode[index+1].classList.remove('display-not')
      
      return 1

      
    };
    if(questionCount === 11){
      submitBtn.classList.add('display-not')
      let proceedBtnNode = document.getElementById('proceedBtn')
      proceedBtnNode.classList.remove('display-not')
      questionNumberSpan.classList.add('display-none')
      // let aTagNode =document.createElement('a')
      // aTagNode.setAttribute('href','./result.html')
      // submitBtn.appendChild(aTagNode)


    }
    questionNumberSpan.innerText =`${questionCount}`
  }
  
  return questionCount
})







allQuestions= document.querySelectorAll('#questions-container > div')
checkIfAnswerSelectedIsCorrect = function(){
  
 
  let long =0
  let currentButton
  for (let index = 0; index < questions.length; index++) {
    long = allQuestions[index].querySelectorAll('button').length
    
    for (let j = 0; j < long; j++) {
      currentButton = allQuestions[index].querySelectorAll('button')[j]
       if(currentButton.classList.contains('selected')&& (currentButton.id==('correct'))){
         correctAnswersCount++;


       }
      
      
    }
   
}

return correctAnswersCount
}



  
 


// makeSureOnlyOneAnswerGetsSelected = function(){
//   for (let index = 0; index < questions.length; index++) {
//     length = allQuestions[index].querySelectorAll('button').length
//     for (let j = 0; j < length; j++) {
//       currentButton = allQuestions[index].querySelectorAll('button')[j]
//        if(currentButton.classList.contains('selected')){
//          switch(j){
//           case 0:
//             for(let k =1; k <length; k++){
//               allQuestions[index].querySelectorAll('button')[k].classList.remove('selected')
//             };
//             break;
//            case 1:
            
//               allQuestions[index].querySelectorAll('button')[0].classList.remove('selected');
//               allQuestions[index].querySelectorAll('button')[2].classList.remove('selected');
//               allQuestions[index].querySelectorAll('button')[3].classList.remove('selected');
//               break;
//               case 2:
//                 allQuestions[index].querySelectorAll('button')[0].classList.remove('selected');
//               allQuestions[index].querySelectorAll('button')[1].classList.remove('selected');
//               allQuestions[index].querySelectorAll('button')[3].classList.remove('selected');
//               break;
//               case 3:
//                 allQuestions[index].querySelectorAll('button')[0].classList.remove('selected');
//               allQuestions[index].querySelectorAll('button')[1].classList.remove('selected');
//               allQuestions[index].querySelectorAll('button')[2].classList.remove('selected');
              



            

//          }
         

//         }
      
//       }
   
//     }

//   }
//  























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


let myTime = new Date().getSeconds();
let mySec = Number(myTime.toString().slice(0,2));
 startTimer();

 function onTimesUp() {
   clearInterval(timerInterval);
 }

 function startTimer() {
    setInterval(() => {
     timePassed = timePassed += 1;
     timeLeft = TIME_LIMIT - timePassed;
     document.getElementById("base-timer-label").innerHTML =
       formatTime(timeLeft);
     setCircleDasharray();
     setRemainingPathColor(timeLeft);

     if (timeLeft === 0) {
        console.log("Times Up");
    //    onTimesUp();
        timeLeft = 10;
      //  randomQuestion();

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

// SELECTING THE ELEMENTS



// console.log(`this is my question ${question}`);
// console.log(`Correct answer ${correctAnswer}`);
// console.log(`incorrect answer ${incorrectAnswers}`);








