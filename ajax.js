function checkUsernameAvailability() {
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('usernameFeedback');

	 if (email.trim() === '') {
        feedback.textContent = "Email cannot be empty.";
        return;
    }
 const xhr = new XMLHttpRequest();
    xhr.open("GET", `check_username.php?username=${encodeURIComponent(email)}`, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            if (xhr.responseText === 'available') {
                feedback.textContent = "Email is available.";
                feedback.style.color = "green";
            } else {
                feedback.textContent = "Username is already taken.";
                feedback.style.color = "red";
            }
        }
    };
xhr.send(null);
}