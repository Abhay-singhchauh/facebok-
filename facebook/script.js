document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Login successful!');
        // You can add further actions like sending data to the server
    } else {
        alert('Please enter both username and password.');
    }
});
