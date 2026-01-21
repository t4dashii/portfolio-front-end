/* ===============================
   HEADER SCROLL (SOMBRA)
================================ */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
});


/* ===============================
   MENU ATIVO POR SCROLL
================================ */
const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 180;
        if (window.scrollY >= sectionTop) {
            current = section.id;
        }
    });

    menuLinks.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${current}`
        );
    });
});


/* ===============================
   ANIMAÇÕES (IntersectionObserver)
================================ */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document
    .querySelectorAll("section, .skill-card, .timeline-item")
    .forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });


/* ===============================
   HOVER ELEGANTE
================================ */
document.querySelectorAll(".skill-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});


/* ===============================
   DARK / LIGHT MODE
================================ */
const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");

        const theme = document.body.classList.contains("light")
            ? "light"
            : "dark";

        localStorage.setItem("theme", theme);
        themeBtn.textContent = theme === "light" ? "☀️" : "🌙";
    });

    // carrega tema salvo
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light");
        themeBtn.textContent = "☀️";
    }
}


/* ===============================
   MENU HAMBÚRGUER MOBILE
================================ */
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".menu");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // fecha menu ao clicar no link
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });
}
