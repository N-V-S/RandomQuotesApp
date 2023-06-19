const API_URL = "https://api.quotable.io/random";
const QUOTES_CONTAINER = document.getElementById("quotes-container");
const QUOTES_CONTAINER_WRAPPER = document.getElementById("quotes-container-wrapper");
const LOAD_BUTTON = document.getElementById("load-button");

function loadQuote() {
    LOAD_BUTTON.setAttribute("disabled", true);
    fetch(API_URL)
    .then((response) => {
        if (!response.ok) {
            console.log(`HTTP error: ${response.error}`);
            alert("Try again later.");
            return;
        }
        return response.json();
    })
    .then((jsonData) => addQuote(jsonData.content, jsonData.author))
    .catch((error) => console.log(error))
    .finally(() => {
        LOAD_BUTTON.toggleAttribute("disabled");
        QUOTES_CONTAINER_WRAPPER.scrollTop = QUOTES_CONTAINER_WRAPPER.scrollHeight;
    });
}

function addQuote(quote, author) {
    const htmlQuote = `<div><p class="quote">${quote}</p><p class="author">(${author})</p></div>`;
    QUOTES_CONTAINER.insertAdjacentHTML("beforeend", htmlQuote);
}
