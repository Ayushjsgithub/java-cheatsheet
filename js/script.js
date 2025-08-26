const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".sidebar a");

function updateActiveLink() {
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const id = section.id;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            links.forEach((link) => {
                link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
            });
        }
    });
}

document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
    updateActiveLink();
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const headers = document.querySelectorAll("section h1, section h2");

headers.forEach(header => {
    header.style.cursor = "pointer";
    header.addEventListener("click", () => {
        header.parentElement.classList.toggle("collapsed");
    });
});

document.addEventListener("DOMContentLoaded", updateActiveLink);
