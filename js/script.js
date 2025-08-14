// escape HTML to prevent injection when adding topics dynamically
function escapeHTML(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

// Dynamically populate sidebar from topics.js
function loadSidebar() {
    const sidebar = document.getElementById("topicList");
    sidebar.innerHTML = ""; // clear in case of reload
    Object.keys(topics).forEach(key => {
        const li = document.createElement("li");
        li.textContent = topics[key].title;
        li.dataset.topic = key;
        sidebar.appendChild(li);
    });
}

// Display topic content in main area
function displayTopic(topicKey) {
    const topic = topics[topicKey];
    const contentArea = document.getElementById("contentArea");

    if (!topic) {
        contentArea.innerHTML = `<h1>Topic Not Found</h1><p>Please select a valid topic.</p>`;
        return;
    }

    contentArea.innerHTML = `
        <h1>${escapeHTML(topic.title)}</h1>
        <p>${escapeHTML(topic.description)}</p>
        <pre><code class="language-java">${escapeHTML(topic.code)}</code></pre>
    `;
    Prism.highlightAll();
}

// Event delegation for topic clicks
document.getElementById("topicList").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        displayTopic(e.target.dataset.topic);
    }
});

// load sidebar on page load
document.addEventListener("DOMContentLoaded", loadSidebar);
