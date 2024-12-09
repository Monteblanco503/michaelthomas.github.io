document.getElementById('newsletterSignup').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = this.querySelector('input').value;
    console.log(`Email submitted: ${email}`);
    alert('Thank you for signing up for our newsletter!');
});
