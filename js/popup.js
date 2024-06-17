document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var closeBtn = document.getElementById("close-btn");

    // Show the popup when the page loads
    popup.style.display = "flex";

    // Close the popup when the close button is clicked
    closeBtn.onclick = function() {
        popup.style.display = "none";
    };
});
