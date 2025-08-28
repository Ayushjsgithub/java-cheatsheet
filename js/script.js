//elements
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".sidebar a");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const headers = document.querySelectorAll("section h1, section h2");

// highlight the active sidebar link
function updateActiveLink() {
    let current = "";

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            current = section.id;
        }
    });

    links.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
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
    header.addEventListener("click", () => {
        const section = header.parentElement;
        const isCollapsed = section.classList.toggle("collapsed");

        if (!isCollapsed) {
            section.style.maxHeight = section.scrollHeight + "px";
        } else {
            section.style.maxHeight = "45px";
        }
    });
});


// Run active link highlight on page load
document.addEventListener("DOMContentLoaded", updateActiveLink);
