// 1. Event Handling

// Button click
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

// Hover effects
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => hoverBox.style.backgroundColor = "lightgreen");
hoverBox.addEventListener("mouseout", () => hoverBox.style.backgroundColor = "lightgray");

// Keypress detection
document.addEventListener("keypress", (e) => {
  document.getElementById("keyPressOutput").textContent = `Key pressed: ${e.key}`;
});

// Double-click secret action
document.getElementById("secretBox").addEventListener("dblclick", () => {
  alert("Secret double-click activated!");
});

// 2. Interactive Elements

// Button that changes text and color
const magicBtn = document.getElementById("magicBtn");
magicBtn.addEventListener("click", () => {
  magicBtn.textContent = "Changed!";
  magicBtn.style.backgroundColor = "crimson";
});

// Image slideshow
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
function showSlide() {
  slides.forEach(slide => slide.style.display = "none");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].style.display = "block";
}
setInterval(showSlide, 2000); // Change every 2s

// Tabs or accordion
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabContents.forEach(content => content.style.display = "none");
    document.getElementById(btn.dataset.target).style.display = "block";
  });
});

// Animation using JS
const animatedBox = document.getElementById("animatedBox");
document.getElementById("animateBtn").addEventListener("click", () => {
  animatedBox.style.transform = "translateX(200px)";
  animatedBox.style.transition = "transform 0.5s ease-in-out";
});

// 3. Form Validation

const form = document.getElementById("myForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  // Required field
  if (!emailInput.value || !passwordInput.value) {
    alert("All fields are required.");
    isValid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    alert("Please enter a valid email.");
    isValid = false;
  }

  // Password rules
  if (passwordInput.value.length < 8) {
    alert("Password must be at least 8 characters.");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }
});

// Real-time feedback
passwordInput.addEventListener("input", () => {
  const feedback = document.getElementById("passwordFeedback");
  feedback.textContent = passwordInput.value.length < 8
    ? "Password too short"
    : "Looks good!";
});
