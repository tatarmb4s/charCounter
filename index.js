const textareaEl = document.getElementById("textarea");
const totalCharacterEl = document.getElementById("total-container");
const remainingCharacterEl = document.getElementById("remaining-container");
const limitInputEl = document.getElementById("limit-input");

updateCounter();

textareaEl.addEventListener("keyup", () => {
    updateCounter();
});

textareaEl.addEventListener("input", () => {
    updateCounter();
});

limitInputEl.addEventListener("input", () => {
    updateCounter();
});

function updateCounter(){
    const currentLength = textareaEl.value.length;
    const limit = parseInt(limitInputEl.value) || 270;
    
    // Update the textarea maxlength attribute
    textareaEl.setAttribute("maxlength", limit);
    
    totalCharacterEl.innerText = currentLength;
    remainingCharacterEl.innerText = limit - currentLength;
}