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
// function revealMessage() {
//     document.getElementById("message").classList.remove("hidden");

//     // big celebration
//     confetti({
//         particleCount: 300,
//         spread: 120,
//         origin: { y: 0.6 }
//     });

//     startHearts();
// }
function revealMessage() {
    const message = document.getElementById("message");

    message.classList.remove("hidden");

    confetti({
        particleCount: 250,
        spread: 120
    });

    message.scrollIntoView({
        behavior: "smooth",
        block: "start"
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


// ================= MUSIC =================
const music = document.getElementById("bgMusic");

// ================= START EXPERIENCE =================
// function startExperience() {
//   const music = document.getElementById("bgMusic");

//     music.play().catch(err => {
//         console.log("Music couldn't start:", err);
//     });

//     openGift();
//     document.getElementById("gift").classList.remove("hidden");

//     // try autoplay (browser may block)
//     music.play().catch(() => {
//         console.log("Tap needed for music");
//     });

//   }

  function startExperience() {
    const gift = document.getElementById("gift");
    const music = document.getElementById("bgMusic");

    gift.classList.remove("hidden");

    music.play().catch(() => {
        console.log("User interaction required for music.");
    });

    confetti({
        particleCount: 150,
        spread: 90
    });

    gift.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


// function finalCelebration(){

    function finalCelebration() {

    // Multiple confetti blasts
    const duration = 6000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {

        if (Date.now() > animationEnd) {
            clearInterval(interval);
            return;
        }

        confetti({
            particleCount: 80,
            angle: 60,
            spread: 80,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 80,
            angle: 120,
            spread: 80,
            origin: { x: 1 }
        });

        confetti({
            particleCount: 120,
            spread: 150,
            origin: {
                x: Math.random(),
                y: Math.random() * 0.5
            }
        });

    }, 300);

    createStars();
    createHearts();

    setTimeout(() => {
        document.getElementById("finalMessage").classList.remove("hidden");

        document.getElementById("finalMessage").scrollIntoView({
            behavior: "smooth"
        });
    }, 2500);
}

// }

function createStars(){

    for(let i=0;i<50;i++){

        const star=document.createElement("div");

        star.className="star";

        star.style.left=Math.random()*100+"vw";

        star.style.top=Math.random()*100+"vh";

        star.style.animationDelay=Math.random()*3+"s";

        document.body.appendChild(star);

        setTimeout(()=>{

            star.remove();

        },6000);

    }

}
function createHearts(){

    for(let i=0;i<40;i++){

        const heart=document.createElement("div");

        heart.className="floatingHeart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.animationDelay=Math.random()*3+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },7000);

    }

}

function showBirthdayGift() {
   const gift = document.getElementById("birthdayGift");

    gift.classList.remove("hidden");

    gift.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    confetti({
        particleCount: 300,
        spread: 120
    });
}