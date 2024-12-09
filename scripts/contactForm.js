document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior.
        alert('Submission sent! Thank you for reaching out.'); // Show the alert.
        contactForm.reset(); // Reset the form fields.
    });
});
