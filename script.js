// Typing Effect
const typedText = document.querySelector(".typed-text");
const phrases = ["Data Analyst  ", "SQL & Excel Expert  ", "Insights-Driven Professional  "];

let i = 0, j = 0, isDeleting = false, currentPhrase = "";

function type() {
  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase = phrases[i].substring(0, j++);
    }
    if (isDeleting && j >= 0) {
      currentPhrase = phrases[i].substring(0, j--);
    }
    typedText.textContent = currentPhrase;
    if (j === phrases[i].length && !isDeleting) {
      isDeleting = true;
      setTimeout(type, 1500);
      return;
    } else if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

type();

// Scroll Reveal (AOS)
AOS.init({
  duration: 1000
});

// Back to Top Button
const topBtn = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

// Dark Mode Toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});