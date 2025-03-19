const questions=[
  {
    questions:"Which is largest animal in the worls?",
    answers:[
      {text:"shark",correct:false },
      {text:"Blue Whale",correct:true},
      {text:"ELEPHANT",correct:false },
      {text:"Giraffe",correct:false },

      
  ]
  },
  {
    questions:"Which is the smallest country in the worls?",
    answers:[
      {text:"vitnam city",correct:true },
      {text:"Bhopal",correct:true},
      {text:"nepal",correct:false },
      {text:"shri lanka",correct:false },

      
  ]
  },
  {
    questions:"Which is largest desert in the worls?",
    answers:[
      {text:"kalahari",correct:false },
      {text:"gobi",correct:true},
      {text:"sahara",correct:false },
      {text:"antarctica",correct:true },

      
  ]
  },{
    questions:"Which is smalllest continent in the worls?",
    answers:[
      {text:"asia",correct:false },
      {text:"austrila",correct:true},
      {text:"arctic",correct:false },
      {text:"africa",correct:false },

      
  ]
  },
];

const questionElement = document.querySelector("#question");

const answereButtons = document.querySelector("#answere-buttons");

const nextButton = document.querySelector("#next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML="next";
  showQuestion();
}

function showQuestion(){

  resetState();
  let currentQuestion=questions[currentQuestionIndex];
  let questionNo=currentQuestionIndex+1;
  questionElement.innerHTML=questionNo+"."+currentQuestion.questions;

  currentQuestion.answers.forEach(answere=>{
    const button=document.createElement('button');
    button.innerHTML=answere.text;
    button.classList.add('btn');
    answereButtons.appendChild(button);

    if(answere.correct){
      button.dataset.correct=answere.correct;
    }
    button.addEventListener('click',selectAnswer)
  });
}

function resetState(){
  nextButton.style.display="none";
  while(answereButtons.firstChild){
    answereButtons.removeChild(answereButtons.firstChild)
  }
}

function selectAnswer(e){
  const selectedBtn= e.target;
  const isCorrect =selectedBtn.dataset.correct==='true';
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answereButtons.children).forEach(button=>{
    if(button.dataset.correct==="true"){
      button.classList.add("correct");
    }
    button.disabled=true;
  });
  nextButton.style.display="block";
}

function showScore(){
  resetState();
  questionElement.innerHTML=`you scored ${score} out of ${questions.length} `;
  nextButton.innerHTML='play agin';
  nextButton.style.display='block';
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex<questions.length){
    showQuestion();
  }else{
    showScore();
  }
}
nextButton.addEventListener('click',()=>{
  if(currentQuestionIndex<questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
})

 
startQuiz();