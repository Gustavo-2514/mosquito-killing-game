import "../scss/index.scss";
import "../imgs/background.jpg";
import "../imgs/mosquito.png";
import "../imgs/fullHeart.png";
import "../imgs/emptyHeart.png";
import "../imgs/game.png";
import "../imgs/victory.png";
import "../imgs/gameOver.png";
import { setImages } from "./setImages";
import { startTheGame } from "./startTheGame";
setImages();

document.querySelector("button").addEventListener("click", startTheGame);
