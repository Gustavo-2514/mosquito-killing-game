import { generateMosquito } from "./generateMosquito";
import { difficulty } from "./getDifficulty";

export const timerToGenerateMosquito = setInterval(() => {
  generateMosquito();
}, difficulty());
