document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let valid = true;
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const pincode = document.getElementById("pincode").value;
    const password = document.getElementById("password").value;
    clearErrors();
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        valid = false;
        document.getElementById("nameError").textContent = "Name should only contain alphabets and spaces.";
        document.getElementById("nameError").style.display = "block";
    }

 
    if (age < 18 || age > 60 || isNaN(age)) {
        valid = false;
        document.getElementById("ageError").textContent = "Age must be between 18 and 60.";
        document.getElementById("ageError").style.display = "block";
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        valid = false;
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        document.getElementById("emailError").style.display = "block";
    }

    if (!/^\d{6}$/.test(pincode)) {
        valid = false;
        document.getElementById("pincodeError").textContent = "PIN code should be exactly 6 digits.";
        document.getElementById("pincodeError").style.display = "block";
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        valid = false;
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters, include one lowercase letter, one uppercase letter, one digit, and one special character.";
        document.getElementById("passwordError").style.display = "block";
    }

    if (valid) {
        alert("Form submitted successfully!");
        document.getElementById("registrationForm").reset(); 
    }
});

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        error.textContent = '';
        error.style.display = 'none';
    });
}
