const loginToggle = document.getElementById('loginToggle');
const signupToggle = document.getElementById('signupToggle');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginMessage = document.getElementById('loginMessage');
const signupMessage = document.getElementById('signupMessage');

function setActiveForm(type) {
    const loginActive = type === 'login';
    loginToggle.classList.toggle('active', loginActive);
    signupToggle.classList.toggle('active', !loginActive);
    loginForm.classList.toggle('active', loginActive);
    signupForm.classList.toggle('active', !loginActive);
    loginMessage.textContent = '';
    signupMessage.textContent = '';
}

loginToggle.addEventListener('click', () => setActiveForm('login'));
signupToggle.addEventListener('click', () => setActiveForm('signup'));

function showMessage(element, text, type = 'error') {
    element.textContent = text;
    element.classList.remove('error', 'success');
    element.classList.add(type);
}

function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

loginForm.addEventListener('submit', event => {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (!email || !password) {
        showMessage(loginMessage, 'Please fill in both email and password.');
        return;
    }

    if (!validateEmail(email)) {
        showMessage(loginMessage, 'Please enter a valid email address.');
        return;
    }

    if (password.length < 6) {
        showMessage(loginMessage, 'Password must be at least 6 characters long.');
        return;
    }

    showMessage(loginMessage, 'Login successful. Redirecting...', 'success');
    setTimeout(() => {
        window.location.href = '../LandingPage/home.html';
    }, 1000);
});

signupForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();

    if (!name || !email || !password) {
        showMessage(signupMessage, 'Please complete all fields.');
        return;
    }

    if (!validateEmail(email)) {
        showMessage(signupMessage, 'Please enter a valid email address.');
        return;
    }

    if (password.length < 6) {
        showMessage(signupMessage, 'Create a password with at least 6 characters.');
        return;
    }

    showMessage(signupMessage, 'Account created successfully.', 'success');
    signupForm.reset();
    setTimeout(() => setActiveForm('login'), 1200);
});

setActiveForm('login');
