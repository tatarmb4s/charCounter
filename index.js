const textareaEl = document.getElementById("textarea");
const totalCharacterEl = document.getElementById("total-container");
const remainingCharacterEl = document.getElementById("remaining-container");

updateCounter();

textareaEl.addEventListener("keyup", () => {
    updateCounter();
});

function updateCounter(){
    totalCharacterEl.innerText = textareaEl.value.length;
    remainingCharacterEl.innerText = 50 - textareaEl.value.length
}






