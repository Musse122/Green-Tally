document.addEventListener("DOMContentLoaded", function() {
    const signinForm = document.getElementById("signin-form");
    
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
        updateNavForLoggedInUser();
    }
    
    signinForm?.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        // Simple demo login
        localStorage.setItem("userEmail", email);
        localStorage.setItem("isLoggedIn", "true");
        
        alert("Signed in successfully!");
        window.location.href = "index.html";
    });
    
    // Update navigation when user is logged in
    function updateNavForLoggedInUser() {
        const navLinks = document.querySelector(".nav-links");
        const signInLink = Array.from(navLinks.children).find(li => {
            const a = li.querySelector('a');
            return a && a.getAttribute('href') === "signin.html";
        });
        
        if (signInLink) {
            signInLink.innerHTML = `
                <div class="user-menu">
                    <button onclick="logout()" class="logout-button">Logout</button>
                </div>
            `;
        }
    }
});

// Logout function
function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userFullName");
    window.location.href = "index.html";
}