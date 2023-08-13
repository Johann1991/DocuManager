/*Login Validation Script*/
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/dashboard';
        } else {
            document.querySelector('.error-message').textContent = 'Invalid credentials!';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

/* This function is used for the sidebar*/
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const openArrow = document.querySelector('.open-arrow');
    const closeArrow = document.querySelector('.close-arrow');

    openArrow.addEventListener('click', function() {
        sidebar.classList.add('expanded');
    });

    closeArrow.addEventListener('click', function() {
        sidebar.classList.remove('expanded');
    });
}

document.addEventListener("DOMContentLoaded", toggleSidebar); // Call the function once the DOM is fully loaded