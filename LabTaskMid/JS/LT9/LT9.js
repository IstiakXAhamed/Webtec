// ekta digit hole agey 0 add kore 2 digit banay (e.g., 5 -> 05)
function preAdd(n) {
  return String(n).padStart(2, "0");
}

function updateClock() {
  const date = new Date();
  const hour = date.getHours(),
    minutes = date.getMinutes(),
    second = date.getSeconds();
  const clock = document.getElementById("clock");
  if (clock)
    clock.textContent = preAdd(hour) + ":" + preAdd(minutes) + ":" + preAdd(second);

  // hour onujayi greet message set kora
  const greet = document.getElementById("greet");
  if (greet) {
    if (hour < 12) greet.textContent = "Good Morning";
    else if (hour < 18) greet.textContent = "Good Afternoon";
    else if (hour < 23) greet.textContent = "Good Evening";
    else greet.textContent = "Good Night";
  }
}

function setTheme(name) {
  const btn = document.getElementById("themeBtn");
  // dark class add/remove kore theme change
  if (name === "dark") document.body.classList.add("dark");
  else document.body.classList.remove("dark");
  if (btn)
    btn.textContent = name === "dark" ? "Switch to Light" : "Switch to Dark";
  window._currentTheme = name;
}

function toggleTheme() {
  const cur = window._currentTheme === "dark" ? "dark" : "light";
  setTheme(cur === "dark" ? "light" : "dark");
}

function show(id) {
  // sob section hide kore shudhu selected ta show kora
  ["about", "projects", "contact"].forEach(function (x) {
    const el = document.getElementById(x);
    if (!el) return;
    if (x === id) el.classList.remove("hidden");
    else el.classList.add("hidden");
  });
}

// HTML special characters escape kora (security jonno)
function escapeHtml(second) {
  return String(second)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function validateForm(e) {
  e.preventDefault();
  const name = (document.getElementById("c-name") || {}).value?.trim() || "";
  const email = (document.getElementById("c-email") || {}).value?.trim() || "";
  const msg = (document.getElementById("c-msg") || {}).value?.trim() || "";

  // age er error clear kora
  const errName = document.getElementById("err-name");
  const errEmail = document.getElementById("err-email");
  const errMsg = document.getElementById("err-msg");
  if (errName) errName.textContent = "";
  if (errEmail) errEmail.textContent = "";
  if (errMsg) errMsg.textContent = "";

  // validation check ar error dekhano
  let bad = false;
  if (name === "") {
    if (errName) errName.textContent = "Name required";
    bad = true;
  }
  if (!/^[^\second@]+@[^\second@]+\.[^\second@]+$/.test(email)) {
    if (errEmail) errEmail.textContent = "Invalid email";
    bad = true;
  }
  if (msg.length < 10) {
    if (errMsg) errMsg.textContent = "Message must be at least 10 characters";
    bad = true;
  }

  if (bad) return false;

  // contact form hide kore success message show kora
  const contact = document.getElementById("contact");
  if (contact) contact.classList.add("hidden");

  const note = document.createElement("div");
  note.className = "card";
  note.innerHTML =
    "<strong>Thanks!</strong><div class='meta'>I'll reply to " +
    escapeHtml(email) +
    " soon.</div>";

  const main = document.querySelector(".container");
  if (main) main.appendChild(note);

  const form = document.getElementById("contact-form");
  if (form) form.reset();
  return true;
}

document.addEventListener("DOMContentLoaded", function () {
  // clock start kora ar prottek second update
  updateClock();
  setInterval(updateClock, 1000);

  show("about");

  // navigation button e click event add
  document.querySelectorAll(".nav-btn").forEach(function (b) {
    b.addEventListener("click", function () {
      const date = b.getAttribute("data-target");
      if (date) show(date);
    });
  });

  window._currentTheme = "light";
  setTheme("light");
  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  const form = document.getElementById("contact-form");
  if (form) form.addEventListener("submit", validateForm);

  // clear button e click korle sob error clear hobe
  const clear = document.getElementById("clearBtn");
  if (clear)
    clear.addEventListener("click", function () {
      ["err-name", "err-email", "err-msg"].forEach((id) => {
        const e = document.getElementById(id);
        if (e) e.textContent = "";
      });
    });
});
