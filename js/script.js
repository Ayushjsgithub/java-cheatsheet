function updateActiveLink() {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".sidebar a");

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionId = section.id;

        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            links.forEach((link) => {
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        }
    });
}

window.addEventListener("scroll", updateActiveLink);

document.addEventListener("DOMContentLoaded", updateActiveLink);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

window.onscroll = function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

document.getElementById("scrollTopBtn").onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

const sectionTitles = document.querySelectorAll("section h1");

sectionTitles.forEach(title => {
    title.addEventListener("click", function () {
        const section = this.parentElement;
        section.classList.toggle("collapsed");
    });
});
