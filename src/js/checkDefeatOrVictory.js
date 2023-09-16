export const checkDefeatOrVictory = (number) => {
  if (number === 0) {
    const container = document.createElement("div");
    container.classList.add("container", "victory");

    const img = document.createElement("img");
    img.src = "../imgs/victory.png";
    img.classList.add("img-fluid");

    const playAgain = document.createElement("button");
    playAgain.textContent = "Jogar Novamente";
    playAgain.classList.add("btn", "btn-dark");
    playAgain.addEventListener("click", () => {
      const repeat = window.location.href;
      window.location.href = repeat;
    });

    const homeScreen = document.createElement("button");
    homeScreen.textContent = "Voltar a tela inicial";
    homeScreen.classList.add("btn", "btn-dark");
    homeScreen.addEventListener("click", () => {
      window.location.href = "../index.html";
    });

    container.append(img, playAgain, homeScreen);
    document.querySelector(".matchResult").appendChild(container);
  } else {
    const container = document.createElement("div");
    container.classList.add("container", "defeat");

    const img = document.createElement("img");
    img.src = "../imgs/gameOver.png";
    img.classList.add("img-fluid");

    const playAgain = document.createElement("button");
    playAgain.textContent = "Jogar Novamente";
    playAgain.classList.add("btn", "btn-dark");
    playAgain.addEventListener("click", () => {
      const repeat = window.location.href;
      window.location.href = repeat;
    });

    const homeScreen = document.createElement("button");
    homeScreen.textContent = "Voltar a tela inicial";
    homeScreen.classList.add("btn", "btn-dark");
    homeScreen.addEventListener("click", () => {
      window.location.href = "../index.html";
    });

    container.append(img, playAgain, homeScreen);
    document.querySelector(".matchResult").appendChild(container);
  }
};

{
  /*<div class="container victory">
       <img class="img-fluid" src="imgs/victory.png" alt="">
       <button class="btn btn-dark">Jogar Novamente</button> 
       <button class="btn btn-dark">Voltar a tela inicial</button> 
    </div> */
}
