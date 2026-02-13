document.addEventListener("DOMContentLoaded", () => {

    const messages = [
        "I’ve been planning something...",
        "Something a little special...",
        "Something just for you...",
        "Okay fine… I can’t keep it in anymore 💚"
    ];

    let i = 0;

    const msg = document.getElementById("message");
    const nextBtn = document.getElementById("nextBtn");
    const question = document.getElementById("questionSection");
    const music = document.getElementById("bgMusic");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const btnRow = document.querySelector(".btnRow");

    nextBtn.addEventListener("click", () => {
        if (i < messages.length - 1) {
            i++;
            msg.textContent = messages[i];
        } else {
            msg.classList.add("hidden");
            nextBtn.classList.add("hidden");
            question.classList.remove("hidden");
            music.play();
        }
    });

    // YES BUTTON WORKS 100% NOW
    yesBtn.addEventListener("click", () => {
        window.location.href = "hooray.html";
    });

    // NO BUTTON RUNS AWAY
    noBtn.addEventListener("mouseenter", () => {
        const rect = btnRow.getBoundingClientRect();
        const x = Math.random() * (rect.width - 80);
        const y = Math.random() * (rect.height - 40);
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    });

});
