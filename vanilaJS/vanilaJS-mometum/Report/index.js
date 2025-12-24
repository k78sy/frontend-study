import "./styles.css";

const casinoForm = document.querySelector("#casino-form");
//const gernerateNum = casino.querySelector(".gernerate input");
const guessNum = casinoForm.querySelector(".guess input");
//const casinoSubmit = casino.querySelector("button");

//const randomNum = Math.random();

function onClickPlay(e) {
  e.preventDefault();
  console.log(guessNum.value);
  console.log(gernerateNum.value);
}

casinoForm.addEventListener("submit", onClickPlay);
