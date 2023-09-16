export const startTheGame = () => {
  const difficulty = parseFloat(document.getElementById("select").value);
  if (difficulty === 1) {
    window.location.href = `../game.html?difficulty=${1500}`;
  } else if (difficulty === 2) {
    window.location.href = `../game.html?difficulty=${1000}`;
  } else if (difficulty === 3) {
    window.location.href = `../game.html?difficulty=${750}`;
  } else {
    alert("selecione a dificuldade");
  }
};
