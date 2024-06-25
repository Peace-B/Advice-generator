window.addEventListener('DOMContentLoaded', fetchData);
const adviceId = document.querySelector("#advice-id");
const adviceBody = document.querySelector("#advice-body");
const dice = document.querySelector("#dices")

async function fetchData () {
    try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data);
    adviceId.innerHTML = `ADVICE #${data.slip.id}`;
    adviceBody.innerHTML = `"${data.slip.advice}"`;
    } catch(error) {
        console.log('Error fetching advice', error);
    }
};



dice.addEventListener("click", fetchData)