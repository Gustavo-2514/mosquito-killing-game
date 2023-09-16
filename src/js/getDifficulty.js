export const difficulty = () => {
  const secondsToGenerateMosquito = new URLSearchParams(
    window.location.search
  ).get("difficulty");
  return parseInt(secondsToGenerateMosquito);
};
