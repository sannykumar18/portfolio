// Typing Effect
const text = ["Future Data Scientist", "Programmer"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
    current = text[i];
    
    if (!isDeleting) {
        document.getElementById("typing").innerHTML = current.substring(0, j++);
        if (j > current.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        document.getElementById("typing").innerHTML = current.substring(0, j--);
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }
    setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Scroll Animation
const faders = document.querySelectorAll(".fade");
window.addEventListener("scroll", () => {
    faders.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
            el.classList.add("show");
        }
    });
});

// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}