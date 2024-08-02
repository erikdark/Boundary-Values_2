document.getElementById('advancedBoundaryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let age = document.getElementById('age').value;
    let number = document.getElementById('number').value;
    let valid = true;

    // Username validation
    if (username.length < 5 || username.length > 15) {
        document.getElementById('usernameError').innerText = 'Username must be between 5 and 15 characters.';
        document.getElementById('usernameError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('usernameError').innerText = '';
        document.getElementById('usernameError').style.display = 'none';
    }

    // Age validation
    if (age < 0 || age > 120) {
        document.getElementById('ageError').innerText = 'Age must be between 0 and 120.';
        document.getElementById('ageError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('ageError').innerText = '';
        document.getElementById('ageError').style.display = 'none';
    }

    // Number validation
    if (number < 1 || number > 100) {
        document.getElementById('numberError').innerText = 'Number must be between 1 and 100.';
        document.getElementById('numberError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('numberError').innerText = '';
        document.getElementById('numberError').style.display = 'none';
    }

    if (valid) {
        document.getElementById('result').innerText = 'Form submitted successfully!';
    } else {
        document.getElementById('result').innerText = 'Please correct the errors above.';
    }
});

document.getElementById('number').addEventListener('input', function() {
    let number = document.getElementById('number').value;

    if (number >= 1 && number <= 15) {
        document.getElementById('greenButton').style.backgroundColor = '#28a745';
        document.getElementById('yellowButton').style.backgroundColor = '#6c757d';
        document.getElementById('redButton').style.backgroundColor = '#6c757d';
    } else if (number >= 25 && number <= 35) {
        document.getElementById('greenButton').style.backgroundColor = '#6c757d';
        document.getElementById('yellowButton').style.backgroundColor = '#ffc107';
        document.getElementById('redButton').style.backgroundColor = '#6c757d';
    } else if (number >= 65) {
        document.getElementById('greenButton').style.backgroundColor = '#6c757d';
        document.getElementById('yellowButton').style.backgroundColor = '#6c757d';
        document.getElementById('redButton').style.backgroundColor = '#dc3545';
    } else {
        document.getElementById('greenButton').style.backgroundColor = '#6c757d';
        document.getElementById('yellowButton').style.backgroundColor = '#6c757d';
        document.getElementById('redButton').style.backgroundColor = '#6c757d';
    }
});
