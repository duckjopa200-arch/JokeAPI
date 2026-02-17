/* https://www.youtube.com/watch?v=zUcc4vW-jsI*/

const button = document.getElementById("getJoke");
const jokeText = document.getElementById("joke"); 


async function getData() {
  const response = await fetch('https://official-joke-api.appspot.com/random_joke');
  const data = await response.json();
  console.log(data)

  jokeText.textContent = `${data.setup} — ${data.punchline}`;
}


button.addEventListener("click", getData);
