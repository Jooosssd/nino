document.addEventListener("DOMContentLoaded", function () {
    const signToText = document.querySelector(".sign-to-text-card");
    const textToSign = document.querySelector(".text-to-sign-card");
    const learning = document.querySelector(".learning-card");

    if (signToText) {
        signToText.addEventListener("click", function () {
            console.log("Redirigiendo a signToText.html...");
            window.location.href = "signToText.html";
        });
    } 
    if (textToSign) {
        textToSign.addEventListener("click", function () {
            console.log("Redirigiendo a textToSign.html...");
            window.location.href = "textToSign.html";
        });
    }
    if (learning) {
        learning.addEventListener("click", function () {
            console.log("Redirigiendo a learning.html...");
            window.location.href = "learning/indexLearning.html";
        });
    }
});
