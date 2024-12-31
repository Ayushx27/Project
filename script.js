// JavaScript for Interactive Features

document.addEventListener("DOMContentLoaded", () => {
    // Welcome Alert on Load
    alert("Welcome to BidMaster! Discover amazing deals and start bidding today.");

    // Handle auction bid buttons
    const bidButtons = document.querySelectorAll(".auction-item .btn");
    bidButtons.forEach(button => {
        button.addEventListener("click", () => {
            const itemName = button.parentElement.querySelector("h3").textContent;
            const userBid = prompt(`Enter your bid amount for ${itemName}:`);

            if (userBid && !isNaN(userBid)) {
                alert(`Thank you! Your bid of $${userBid} has been placed for ${itemName}.`);
            } else {
                alert("Invalid bid amount. Please try again.");
            }
        });
    });

    // Contact Form Validation
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", event => {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                event.preventDefault();
                alert("Please fill out all fields before submitting.");
            } else {
                alert("Thank you for contacting us! We'll get back to you soon.");
            }
        });
    }

    // Interactive Navigation Highlight
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            navLinks.forEach(nav => nav.classList.remove("active"));
            event.target.classList.add("active");
        });
    });
});
