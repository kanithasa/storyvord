document.getElementById('login-button').addEventListener('click', function() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];


    const hashedPassword = btoa(password);

    const user = users.find(user => user.email === email && user.password === hashedPassword);

    if (user) {
        alert('Login successful');
        window.location.href = 'frame-13.html';
    } else {
        alert('Invalid credentials');
    }
});
