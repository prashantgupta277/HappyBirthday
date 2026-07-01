// ================= LOADER =================
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.display = "none";
    }, 1500);
});

// ================= OPEN GIFT =================
function openGift() {
    document.getElementById("gift").classList.remove("hidden");

    // confetti burst
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });
}

// ================= REVEAL MESSAGE =================
function revealMessage() {
    document.getElementById("message").classList.remove("hidden");

    // big celebration
    confetti({
        particleCount: 300,
        spread: 120,
        origin: { y: 0.6 }
    });

    startHearts();
}

// ================= CELEBRATE =================
function celebrate() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 }
            });
        }, i * 300);
    }
}

// ================= FLOATING HEARTS =================
function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-20px";
        heart.style.fontSize = Math.random() * 20 + 10 + "px";
        heart.style.animation = "floatUp 5s linear forwards";
        heart.style.zIndex = "999";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}

// ================= EXTRA ANIMATION CSS =================
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(-100vh); opacity: 0; }
}
`;
document.head.appendChild(style);