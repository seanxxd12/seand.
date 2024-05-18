document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'group7' && password === 'group7') {
        document.getElementById('message').textContent = 'Login successful!';
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password. Please try again.';
    }
});
