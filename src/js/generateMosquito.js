import { checkScreenHeight, checkScreenWidth } from "./checkScreenSize.js";
import { timerToGenerateMosquito } from "./timerToGenerateMosquito.js";
import { timer } from "./timer.js";
import { checkDefeatOrVictory } from "./checkDefeatOrVictory.js";

export const generateSizeOfMosquito = () => {
  const sizeOfMosquito = Math.floor(Math.random() * 3);
  if (sizeOfMosquito === 0) {
    return "mosquito0";
  } else if (sizeOfMosquito === 1) {
    return "mosquito1";
  } else {
    return "mosquito2";
  }
};

export const changeSide = () => {
  const side = Math.floor(Math.random() * 2);
  if (side === 0) {
    return "sideA";
  } else {
    return "sideB";
  }
};

let cont = 1;
export const generateMosquito = () => {
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();

    if (cont < 3) {
      const heart = document.querySelector(`.heart${cont}`);
      heart.src = "../imgs/emptyHeart.png";
      cont++;
    } else {
      const heart = document.querySelector(`.heart${cont}`);
      heart.src = "../imgs/emptyHeart.png";

      // inserir ação de derrota
      clearInterval(timerToGenerateMosquito);
      clearInterval(timer);
      checkDefeatOrVictory(1);
    }
  } else {
    // get screen size
    const screenWidth = checkScreenWidth();
    const screenHeight = checkScreenHeight();

    //generate a aleatory number
    let renderWidth = Math.floor(Math.random() * screenWidth) - 90;
    let renderHeight = Math.floor(Math.random() * screenHeight) - 90;

    renderWidth = renderWidth < 0 ? 0 : renderWidth;
    renderHeight = renderHeight < 0 ? 0 : renderHeight;

    // generate mosquito
    const mosquitoImg = document.createElement("img");
    mosquitoImg.id = "mosquito";
    mosquitoImg.src = "../imgs/mosquito.png";
    mosquitoImg.classList.add(generateSizeOfMosquito(), changeSide());
    mosquitoImg.style.position = "absolute";
    mosquitoImg.style.right = `${renderWidth}px`;
    mosquitoImg.style.top = `${renderHeight}px`;
    mosquitoImg.addEventListener("click", (ev) => {
      ev.target.remove();
    });

    document.body.appendChild(mosquitoImg);
  }
};
