function checkPassword() {
    const firstPassword = document.getElementById('updatePassword').value;
    const confirmPassword = document.getElementById('finalPassword').value;
    const feedback = document.getElementById('passwordFeedback');

    // Check if passwords match
    if (firstPassword !== confirmPassword) {
        feedback.textContent = "Passwords do not match.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Passwords match.";
        feedback.style.color = "green";
    }
}