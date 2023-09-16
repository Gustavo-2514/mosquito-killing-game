import { checkDefeatOrVictory } from "./checkDefeatOrVictory";
import { timerToGenerateMosquito } from "./timerToGenerateMosquito";

let sec = 15;
export const timer = setInterval(() => {
  const timerr = document.querySelector(".timer");
  if (sec > 0) {
    timerr.textContent = sec;

    sec--;
  } else {
    timerr.textContent = sec;
    if (document.getElementById("mosquito")) {
      document.getElementById("mosquito").remove();
    }
    clearInterval(timer);
    clearInterval(timerToGenerateMosquito);
    checkDefeatOrVictory(0);
  }
}, 1000);
