window.addEventListener('DOMContentLoaded', fetchData);
const adviceId = document.querySelector("#advice-id");
const adviceBody = document.querySelector("#advice-body");
const dice = document.querySelector("#dices")

async function fetchData () {
    const response = await fetch("https://api.adviceslip.com/advice");
    const json = await response.json();
    console.log(json);

    adviceId.innerHTML = `A D V I C E #${json.slip.id}`;
    adviceBody.innerHTML = `"${json.slip.advice}"`;
}

dice.addEventListener("click", fetchData)