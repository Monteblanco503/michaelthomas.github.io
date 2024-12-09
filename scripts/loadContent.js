// loadContent.js

function loadHeader() {
    fetch('/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}

function loadFooter() {
    fetch('/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Call the functions to load header and footer
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});
