const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// Si on click sur le bouton start
start_btn.onclick = () => {
  info_box.classList.add("activeInfo");
};

// Si on click sur le bouton exit
exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
};

// Si on click sur le bouton continuer
continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.add("activeQuiz");
  showQuetions(0);
  queCounter(1);
  startTimer(15);
  startTimerLine(0);
};

let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// Si on click sur le bouton recommencer
restart_quiz.onclick = () => {
  quiz_box.classList.add("activeQuiz");
  result_box.classList.remove("activeResult");
  timeValue = 15;
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 0;
  showQuetions(que_count);
  queCounter(que_numb);
  clearInterval(counter);
  clearInterval(counterLine);
  startTimer(timeValue);
  startTimerLine(widthValue);
  timeText.textContent = "Time Left";
  next_btn.classList.remove("show");
};

// Si on click sur le bouton quitter
quit_quiz.onclick = () => {
  window.location.reload(); //recharge la page
};

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// Si on click sur le bouton next
next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    que_count++; //increment +1
    que_numb++; //increment +1
    showQuetions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    startTimerLine(widthValue);
    timeText.textContent = "Time Left";
    next_btn.classList.remove("show");
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    showResult();
  }
};

// Les data du tableau
function showQuetions(index) {
  const que_text = document.querySelector(".que_text");

  //creation d'un new span
  let que_tag =
    "<span>" +
    questions[index].numb +
    ". " +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;

  const option = option_list.querySelectorAll(".option");

  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}
// apparations des icones
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//Si on click sur une option
function optionSelected(answer) {
  clearInterval(counter);
  clearInterval(counterLine);
  let userAns = answer.textContent;
  let correcAns = questions[que_count].answer;
  const allOptions = option_list.children.length;

  if (userAns == correcAns) {
    //Si on click sur la bonne réponse
    userScore += 1;
    answer.classList.add("correct"); //Ajoute la couleur verte si on sélectionne la bonne réponse
    answer.insertAdjacentHTML("beforeend", tickIconTag); //Ajout de l'icone valide
    console.log("Correct Answer");
    console.log("Your correct answers = " + userScore);
  } else {
    answer.classList.add("incorrect"); //Ajoute la couleur rouge si on sélectionne la mauvaise réponse
    answer.insertAdjacentHTML("beforeend", crossIconTag); //Ajout de l'icone de la croix
    console.log("Wrong Answer");

    for (i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent == correcAns) {
        //Si les réponses match avec la réponse donnée
        option_list.children[i].setAttribute("class", "option correct");
        option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Auto selected correct answer.");
      }
    }
  }
  for (i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");
  }
  next_btn.classList.add("show"); //montre le bouton next si une option a été sélectioné
}

function showResult() {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.remove("activeQuiz");
  result_box.classList.add("activeResult");
  const scoreText = result_box.querySelector(".score_text");
  if (userScore === 10) {
    // si le player a tout bon
    let scoreTag =
      "<span>Good job!!! 🤗🎉🎉🎉, vous avez <p>" +
      userScore +
      "</p> sur <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else if (userScore > 7) {
    // si le player a plus de 7
    let scoreTag =
      "<span>well done! 🎉, vous avez <p>" +
      userScore +
      "</p> sur <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else if (userScore > 3) {
    // si le player a plus de 3
    let scoreTag =
      "<span>good! 😎, vous avez <p>" +
      userScore +
      "</p> sur <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else if (userScore > 1) {
    // si le player a plus de 1
    let scoreTag =
      "<span>and better 🙂, vous avez <p>" +
      userScore +
      "</p> sur <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else {
    // si le player à moins de 1
    let scoreTag =
      "<span>and sorry 😐, vous avez <p>" +
      userScore +
      "</p> sur <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time;
    time--; //décremente le temps
    if (time < 9) {
      //if timer is less than 9
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero;
    }
    if (time < 0) {
      //Si le temps arrive à zéro
      clearInterval(counter); //clear counter
      timeText.textContent = "Time Off";
      const allOptions = option_list.children.length;
      let correcAns = questions[que_count].answer; //Sélectionne la bonne réponse automatic
      for (i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correcAns) {
          option_list.children[i].setAttribute("class", "option correct");
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
          console.log("Time Off: Auto selected correct answer.");
        }
      }
      for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
      }
      next_btn.classList.add("show");
    }
  }
}

//Ajout de le timeline
function startTimerLine(time) {
  counterLine = setInterval(timer, 29);
  function timer() {
    time += 1;
    time_line.style.width = time + "px";
    if (time > 549) {
      clearInterval(counterLine);
    }
  }
}

function queCounter(index) {
  //creation du tag de fin
  let totalQueCounTag =
    "<span><p>" +
    index +
    "</p> of <p>" +
    questions.length +
    "</p> Questions</span>";
  bottom_ques_counter.innerHTML = totalQueCounTag;
}

//Loader
const loader = document.querySelector(".loader");

function load() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.className += " hidden";
    }, 2500);
  });
}
load();
