/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { read } from "@popperjs/core";

window.onload = function() {
  let generateRandomNumber = () => {
    const numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let indexNumber = Math.floor(Math.random() * numbers.length);
    return numbers[indexNumber];
  };

  let generateRandomSuit = () => {
    const suit = ["♦", "♥", "♠", "♣"];
    let indexSuit = Math.floor(Math.random() * suit.length);
    return suit[indexSuit];
  };

  let text = "";

  const newCard = () => {
    let suit = document.querySelectorAll("span.suit");
    text = generateRandomSuit();

    for (let elem of suit) {
      elem.textContent = text;
      if (text === "♥" || text === "♦") {
        elem.style.color = "red";
      } else {
        elem.style.color = "black";
      }
      console.log(text);
    }
    let number = document.querySelector(".number");
    number.innerHTML = generateRandomNumber();
  };
  setInterval(newCard, 10000);

  let btn = document.querySelector("#btn");
  btn.addEventListener("click", newCard);

  let card = document.querySelector(".card");
  let widthSize = document.querySelector(".width");
  let heightSize = document.querySelector(".height");
  let button = document.querySelector(".send");

  const setSize = e => {
    e.preventDefault();
    card.style.height = `${widthSize.value}px`;
    card.style.width = `${heightSize.value}px`;
    card.style.fontSize = `${heightSize.value / 4}px`;
  };

  button.addEventListener("click", setSize);
};
