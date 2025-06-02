// import {data} from "./doc";

// const questions = data.question;
const questions = [
    {
        question:"How do we call click event in JS",
        options:["onScroll","onHover","onChange","onClick"],
        answer:3,
    },
    {
        question:"In below What are in build browser events",
        options:["alert","makecall","inputs","dom"],
        answer:0,
    },
    {
        question:"What is not an attribute of HTML Element",
        options:["class","id","div","href"],
        answer:2,
    },
    {
        question:"What is HTML Element",
        options:["tag","id","div","href"],
        answer:0,
    },
];


const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const btnNextElement = document.getElementById("btn-next");
const scoreContainerElement = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const btnRestartElement = document.getElementById('btn-restart');
let currentQuestionIndex = 0
let scoreValue = 0
// for(let i=0;i<questions.length;i++){
//     questionElement.question[i].
// }

function showQuestion (index){
    const question = questions[index];
    console.log(question);
    questionElement.textContent= question.question;
    optionsElement.innerText = "";
    question.options.map((option,index)=>{
    const button = document.createElement("button")
    button.textContent = option
    button.setAttribute("value",index);
    button.addEventListener("click",(e)=>{
        selectAnswer(index,question.answer);
        const selectValue =e.target.value;
        // console.log(question.answer === +selectValue);
        // if(question.answer === +selectValue){
            //     button.style.backgroundColor = "green";
            // }else{
                //     button.style.backgroundColor = "red";
                // }        
            })
            optionsElement.appendChild(button);
        });
        btnNextElement.classList.add('hide')
}   

function selectAnswer(selectedindex,answerindex){
    //verfy the answer is right or wrong
    const optionButtons = optionsElement.querySelectorAll("button");
    console.log(optionButtons);
    
    optionButtons.forEach((button,idx)=>{
        if(idx === answerindex){
            button.classList.add("correct-ans");
            
        }else if(idx === selectedindex){
            button.classList.add("wrong-ans")
        }
        button.disabled=true;
    });
    if(selectedindex === answerindex){
        scoreValue ++;
        console.log("score Value", scoreValue);
    }
    btnNextElement.classList.remove('hide')
}

btnNextElement.addEventListener("click",()=>{
    currentQuestionIndex++;
    console.log(currentQuestionIndex);
    
    if(currentQuestionIndex < questions.length){
        showQuestion(currentQuestionIndex);
        
    }else{
        showScore()
    }
})


function showScore(){
    questionElement.classList.add('hide')
    btnNextElement.classList.add('hide')
    optionsElement.classList.add('hide')
    scoreContainerElement.classList.remove('hide');
    scoreContainerElement.style.backgroundColor = "teal";
    scoreElement.textContent = "Score Value " + scoreValue
}

btnRestartElement.addEventListener('click',()=>{
    currentQuestionIndex = 0
    scoreValue = 0
    console.log("Restart value",currentQuestionIndex);
    questionElement.classList.remove('hide')
    btnNextElement.classList.remove('hide')
    optionsElement.classList.remove('hide')
    scoreContainerElement.classList.add('hide');
    showQuestion(currentQuestionIndex)    
})

showQuestion(currentQuestionIndex);