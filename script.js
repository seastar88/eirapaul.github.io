const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");
const statusMessage = document.getElementById("form-status");

form.addEventListener("submit", function (event) {
    if (form.action.includes("YOUR_FORM_ID")) {
        event.preventDefault();
        statusMessage.textContent =
            "The contact form still needs a Formspree form ID. See README.txt for setup instructions.";
    }
});
