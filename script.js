// Make the "No" button run away
document.getElementById("no-btn").addEventListener("mouseover", function() {
    this.style.top = Math.random() * window.innerHeight + "px";
    this.style.left = Math.random() * window.innerWidth + "px";
});

// Redirect to activities page when clicking "Yes"
document.getElementById("yes-btn").addEventListener("click", function() {
    window.location.href = "activities.html";
});

