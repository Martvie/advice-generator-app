const title = document.getElementById('advice-title');
const text = document.getElementById('advice-text');

async function getAdvice(){
    const advice = await fetch("https://api.adviceslip.com/advice");
    const adviceJson = await advice.json();

    title.innerHTML = `ADVICE ${adviceJson.slip.id}`;
    text.innerHTML = `${adviceJson.slip.advice}`;
}