document.addEventListener("DOMContentLoaded", function() {
    console.log("Document loaded and ready!");

    // Mobile menu toggle
    const mobileMenu = document.getElementById("mobileMenu");
    const navLinks = document.getElementById("navLinks");

    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        mobileMenu.classList.toggle("active");

        // Animate the mobile menu icon
        mobileMenu.querySelector("i").classList.toggle("fa-times");
    });

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));

            // Scroll to the target section
            target.scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    });

    // SMS form validation and submission
    const smsForm = document.getElementById("smsForm");
    smsForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const senderName = document.getElementById("senderName").value;
        const smsMessage = document.getElementById("smsMessage").value;

        if (senderName.trim() === "" || smsMessage.trim() === "") {
            alert("Please fill in both fields.");
            return;
        }

        alert(`Message sent from ${senderName}: ${smsMessage}`);
        smsForm.reset(); // Reset the form
    });
});
