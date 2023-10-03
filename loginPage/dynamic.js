function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    document.querySelector('.login-btn').classList.add('selected');
    document.querySelector('.signup-btn').classList.remove('selected');
}

function showSignupForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
    document.querySelector('.signup-btn').classList.add('selected');
    document.querySelector('.login-btn').classList.remove('selected');
}

document.querySelector('.login-btn').addEventListener('click', showLoginForm);
document.querySelector('.signup-btn').addEventListener('click', showSignupForm);
