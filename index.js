window.addEventListener('DOMContentLoaded', fetchData);
const adviceId = document.querySelector("#advice-id");
const adviceBody = document.querySelector("#advice-body");
const dice = document.querySelector("#dices")

async function fetchData () {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data);
    adviceId.innerHTML = `A D V I C E #${data.slip.id}`;
    adviceBody.innerHTML = `"${data.slip.advice}"`;
}


dice.addEventListener("click", fetchData)