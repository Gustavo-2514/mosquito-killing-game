import "../scss/index.scss";
import * as bootstrap from "bootstrap";

import { checkScreenHeight, checkScreenWidth } from "./checkScreenSize.js";
import { setImages } from "./setImages.js";
import { timerToGenerateMosquito } from "./timerToGenerateMosquito.js";
import { timer } from "./timer.js";
setImages();
timer;
timerToGenerateMosquito;

window.addEventListener("resize", checkScreenWidth);
window.addEventListener("resize", checkScreenHeight);
