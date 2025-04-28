document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("register-form");
    
    registerForm?.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Get all form values
        const fullname = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
       
        // Basic validation
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

      
        // Store in localStorage (for demo purposes)
        localStorage.setItem("userFullName", fullname);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("isLoggedIn", "true");
        
        // Show success and redirect
        alert("Account created successfully!");
        window.location.href = "index.html";
    });

    // Add password visibility toggle
    const togglePassword = document.createElement("button");
    togglePassword.type = "button";
    togglePassword.innerHTML = '<i class="fas fa-eye"></i>';
    togglePassword.className = "toggle-password";
    document.getElementById("password").parentNode.appendChild(togglePassword);

    togglePassword.addEventListener("click", function() {
        const passwordInput = document.getElementById("password");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            this.innerHTML = '<i class="fas fa-eye-slash"></i>';
        } else {
            passwordInput.type = "password";
            this.innerHTML = '<i class="fas fa-eye"></i>';
        }
    });
});