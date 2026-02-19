/* https://www.youtube.com/watch?v=zUcc4vW-jsI*/
/*Nali*/


const button = document.getElementById("getJoke");
const jokeSetup = document.getElementById("jokeSetup"); 
const jokePunch = document.getElementById("jokePunch")

async function getData() {
  const response = await fetch('https://official-joke-api.appspot.com/random_joke');
  const data = await response.json();

  jokeSetup.textContent = `${data.setup} -`;
  jokePunch.textContent = `- ${data.punchline}`
}


button.addEventListener("click", getData);


/*Nuppu tekst muutub */

button.addEventListener('click', function(){
   button.textContent =  "New joke"
})