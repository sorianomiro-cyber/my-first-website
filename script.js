// Copy email button
const copyBtn = document.getElementById("copy-btn");
const status = document.getElementById("status");

copyBtn.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(copyBtn.dataset.email);
        status.textContent = "Email copied to clipboard.";
    } catch (e) {
        status.textContent = `Copy failed. My email is ${copyBtn.dataset.email}`;
    }
});

// Light / dark theme, remembered between visits
const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");

function setTheme(theme) {
    root.dataset.theme = theme;
    toggle.textContent = theme === "dark" ? "☀️" : "🌙";
    toggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
    try { localStorage.setItem("theme", theme); } catch (e) {}
}

let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
setTheme(saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
toggle.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));

document.getElementById("year").textContent = new Date().getFullYear();