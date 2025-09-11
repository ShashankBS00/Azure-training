document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const skillLevel = document.getElementById('skillLevel');
    const skillOutput = document.querySelector('output[for="skillLevel"]');

    // Update skill level output
    skillLevel.addEventListener('input', function(e) {
        skillOutput.textContent = e.target.value;
    });

    // Form validation
    form.addEventListener('submit', function(e) {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            e.preventDefault();
            alert('Passwords do not match!');
            return false;
        }
    });
});