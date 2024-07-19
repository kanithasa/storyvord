document.addEventListener('DOMContentLoaded', function() {

    const nameInput = document.querySelector('.signup-page-child[type="text"]');
    const emailInput = document.querySelector('.signup-page-child[type="email"]');
    const passwordInput = document.querySelector('.signup-page-child[type="password"]');
    const confirmPasswordInput = document.querySelector('.signup-page-inner[type="password"]');
    const signupButton = document.querySelector('.sign-up5');


    signupButton.addEventListener('click', function(event) {
        event.preventDefault(); 

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;


        if (!name || !email || !password || !confirmPassword) {
            alert('All fields are required');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(user => user.email === email);

        if (existingUser) {
            alert('User already exists');
            return;
        }

        const hashedPassword = btoa(password);
        users.push({ name, email, password: hashedPassword });
        localStorage.setItem('users', JSON.stringify(users));

        alert('Signup successful');
        window.location.href = 'loginn.html'; 
    });
});
