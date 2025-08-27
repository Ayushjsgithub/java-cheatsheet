//elements
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".sidebar a");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const headers = document.querySelectorAll("section h1, section h2");

// highlight the active sidebar link
function updateActiveLink() {
    sections.forEach(section => {
        const sectionTop = section.offsetTop;      // Distance from top
        const sectionHeight = section.offsetHeight; // Height of section
        const id = section.id;                      // Section ID

        // Check if we're currently viewing this section
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            links.forEach(link => {
                link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
            });
        }
    });
}

// Smooth scrolling when clicking sidebar links
links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); // Stop default jump
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Show or hide "Back to Top" button + update active link
window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
    updateActiveLink();
});

// Smooth scroll to top when clicking the button
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Toggle collapse when clicking section headers
headers.forEach(header => {
    header.style.cursor = "pointer";
    header.addEventListener("click", () => {
        header.parentElement.classList.toggle("collapsed");
    });
});

// Run active link highlight on page load
document.addEventListener("DOMContentLoaded", updateActiveLink);
