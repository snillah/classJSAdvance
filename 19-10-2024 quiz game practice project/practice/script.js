const quizQuestions = [
  {
    question: "How do we call click event in JS ?",
    options: ["onScroll", "onHover", "onChange", "onClick"],
    answer: 3,
  },
  {
    question: "In below What are in build browser events ?",
    options: ["alert", "makecall", "inputs", "dom"],
    answer: 0,
  },
  {
    question: "What is not an attribute of HTML Element ?",
    options: ["class", "id", "div", "href"],
    answer: 2,
  },
];

const questionElement = document.getElementById("question");
const optionsContainerElement = document.getElementById("options-container");
const btnNext = document.getElementById("btn-next");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const btnRestart = document.getElementById("btn-restart");

let currentQuestionIndex = 0;
let scoreValue = 0;

function startQuiz(questionIndex) {
  // initial value
  const question = quizQuestions[questionIndex];
  // question display
  questionElement.innerHTML = question.question;
  // Options list
  optionsContainerElement.textContent = "";
  question.options.map((option, idx) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.setAttribute("key", idx);
    button.addEventListener("click", () => {
      showAnswer(idx, question.answer);
    });
    optionsContainerElement.appendChild(button);
    btnNext.classList.add("hide");
  });
}

function showAnswer(selectedIndex, answerIndex) {
  const optionList = optionsContainerElement.querySelectorAll("button");
  console.log("option List", optionList);
  optionList.forEach((button, idx) => {
    console.log("idx", idx);
    if (idx === answerIndex) {
      button.classList.add("correct-ans");
    } else if (idx === selectedIndex) {
      button.classList.add("wrong-ans");
    }
    button.disabled = true;
  });
  btnNext.classList.remove("hide");
  if (selectedIndex === answerIndex) {
    scoreValue++;
  }
}

btnNext.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    startQuiz(currentQuestionIndex);
  } else {
    showScoreValue();
  }
});
function showScoreValue() {
  questionElement.classList.add("hide");
  optionsContainerElement.classList.add("hide");
  console.log("option", optionsContainerElement);
  btnNext.classList.add("hide");
  scoreContainer.classList.remove("hide");
  scoreElement.textContent =
    "Your score : " + scoreValue + " Out of " + quizQuestions.length;
    
    if((scoreValue  / quizQuestions.length) > .50){
        
        console.log("value",scoreValue  / quizQuestions.length);
        scoreContainer.style.backgroundColor = "#6ef116";
    }
}

btnRestart.addEventListener("click", function () {
  currentQuestionIndex = 0;
  scoreValue = 0;
  questionElement.classList.remove("hide");
  optionsContainerElement.classList.remove("hide");
  btnNext.classList.remove("hide");
  scoreContainer.classList.add("hide");
  startQuiz(currentQuestionIndex)
});

startQuiz(currentQuestionIndex);
