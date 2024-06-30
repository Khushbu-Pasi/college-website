document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simulate a successful login
        if (username === 'admin' && password === 'admin') {
            alert('Login successful!');
            window.location.href = 'home.html';
        } else {
            alert('Invalid username or password');
        }
    });
});
