/* ==========================================================
   Jacques McDermid Heyns Portfolio Website
   script.js

   Note: Template used and adapted, so all functionality not
   necessarily working. Can be updated and refined going
   forward.
   ========================================================== */

const titles = [
  "Writing Centre Manager",
  "Academic Integrity Specialist",
  "AI Governance Specialist",
  "Technological Literacy Specialist"
];

let currentTitle = 0;
const typingElement = document.getElementById("typing-text");

if (typingElement) {
  setInterval(function () {
    currentTitle++;
    if (currentTitle >= titles.length) {
      currentTitle = 0;
    }
    typingElement.textContent = titles[currentTitle];
  }, 2500);
}

const topButton = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

if (topButton) {
  topButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const target = Number(counter.getAttribute("data-target"));
  let count = 0;
  const increment = target / 100;

  const updateCounter = () => {
    if (count < target) {
      count += increment;
      counter.textContent = Math.ceil(count);
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target + "+";
    }
  };

  updateCounter();
});

const themeButton = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

if (themeButton) {
  themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

console.log("Portfolio Website Loaded Successfully.");
