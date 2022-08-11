const button = document.querySelector("#button");
const id = document.querySelector("#id");
const advice = document.querySelector("#advice");

const getRandomAdvice = async () => {
  const RandomId = Math.floor(Math.random() * 200);
  const response = await fetch(`https://api.adviceslip.com/advice/${RandomId}`);
  const data = await response.json();
  id.innerHTML = `Advice #${data.slip.id}`;
  advice.innerHTML = `"${data.slip.advice}"`;
};

getRandomAdvice();

button.addEventListener("click", getRandomAdvice);
