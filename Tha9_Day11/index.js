const quiz = [
  {
    q:"Which month comes right before june ?",
    options: ['may', 'june', 'december', 'august'],
    answer: 0
  },
  {
    q:"What color is a banana?",
    options: ['red', 'yellow', 'white', 'blue'],
    answer: 1
  },
  {
    q:"3 + 4 = 7 ?",
    options: ['true', 'false'],
    answer: 0
  },
  {
    q:"What time of day do we have breakfast?",
    options: ['afternoon', 'evening', 'morning'],
    answer: 2
  },
  {
    q:"What is 22 + 6?",
    options: ['99', '56', '16', '28'],
    answer: 3
  }];
const ques_no = document.querySelector(".ques_no");
const ques_text = document.querySelector(".ques_text");
const option_container = document.querySelector(".option_container");
const ans_indicator = document.querySelector(".ans_indicator");
const homebox = document.querySelector(".main_box");
const quizbox = document.querySelector(".quiz_box");
const resultbox = document.querySelector(".result_box");

let count = 0;
let currques;
let availableques = [];
let availoptions = [];
let correctAns = 0;
let attempts = 0;

function setavailques() {
  const totalques = quiz.length;
  for(let i = 0;i < totalques;i++)
    availableques.push(quiz[i]);
}

function getnewques() {
  ques_no.innerHTML = "Question " + (count + 1) + " of " + quiz.length;
  const quesindex = availableques[Math.floor(Math.random() * availableques.length)];
  currques = quesindex;
  ques_text.innerHTML = quesindex.q;
  const index1 = availableques.indexOf(quesindex);
  availableques.splice(index1,1);
  const optionlength = currques.options.length;
  for(let i = 0;i < optionlength;i++)
    availoptions.push(i);
  option_container.innerHTML = '';
  let animationDelay = 0.15;
  for(let i = 0;i< optionlength;i++){
    const optionindex = availoptions[Math.floor(Math.random() * availoptions.length)];
    const index2 = availoptions.indexOf(optionindex);
    availoptions.splice(index2, 1);
    const option = document.createElement("div");
    option.innerHTML = currques.options[optionindex];
    option.id = optionindex;
    option.style.animationDelay = animationDelay + 's';
    animationDelay += 0.15;
    option.className = "option";
    option_container.appendChild(option);
    option.setAttribute("onclick","getResult(this)");
  }
  count++;
}

function unclickableoptions(){
  const optionlen = option_container.children.length;
  for(let i = 0;i< optionlen;i++)
    option_container.children[i].classList.add("already_answered");
}

function getResult(element) {
  const id = parseInt(element.id);
  if(id === currques.answer){
    element.classList.add("correct");
    updateAnswerIndicator("correct");
    correctAns++;
  }
  else{
    element.classList.add("wrong");
    updateAnswerIndicator("wrong");
    const optionlen = option_container.children.length;
    for(let i = 0;i< optionlen;i++){
      if(parseInt(option_container.children[i].id) === currques.answer){
        option_container.children[i].classList.add("correct");
      }
    }
  }
  attempts++;
  unclickableoptions();
}

function ansindicator(){
  ans_indicator.innerHTML = '';
  const totques = quiz.length;
  for(let i = 0;i < totques;i++){
    const indicator = document.createElement("div");
    ans_indicator.appendChild(indicator);
  }
}

function updateAnswerIndicator(marktype){
  ans_indicator.children[count - 1].classList.add(marktype);
}

function quizover(){
  quizbox.classList.add("hide");
  resultbox.classList.remove("hide");
  quizresult();
}

function quizresult(){
  resultbox.querySelector(".total_ques").innerHTML = quiz.length;
  resultbox.querySelector(".total_attempt").innerHTML = attempts;
  resultbox.querySelector(".total_corr").innerHTML = correctAns;
  resultbox.querySelector(".total_wrong").innerHTML = attempts - correctAns;
  resultbox.querySelector(".total_percent").innerHTML = ((correctAns/quiz.length)*100).toFixed() + "%";
  resultbox.querySelector(".total_score").innerHTML = correctAns + '/' + quiz.length;
}

function next() {
  if(count === quiz.length)
    quizover();
  else
    getnewques();
}

function tryagainquiz(){
  resultbox.classList.add("hide");
  quizbox.classList.remove("hide");
  count = 0;
  correctAns = 0;
  attempts = 0;
  startquiz();
}

function backtohome(){
  resultbox.classList.add("hide");
  homebox.classList.remove("hide");
  count = 0;
  correctAns = 0;
  attempts = 0;
}

function startquiz() {
  homebox.classList.add("hide");
  quizbox.classList.remove("hide");
  setavailques();
  getnewques();
  ansindicator();
}

window.onload = function(){
  homebox.querySelector(".total_ques").innerHTML = quiz.length;
}