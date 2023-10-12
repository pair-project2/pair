        function verifyPassword() {
        var password = document.getElementById("password").value;

        if (password.length === 0) {
            alert("Please enter a password.");
        } else if (password.length < 8) {
            alert("Password is too short. It must be at least 8 characters long.");
        } else {
            alert("Login successful!");

            // Redirect to anothor html page
            window.location.href = "http://127.0.0.1:5500/shop/index.html"
        }
    }

    