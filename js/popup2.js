document.addEventListener("DOMContentLoaded", function() {
    var popup2 = document.getElementById("popup2");
    var popupImg2 = document.getElementById("popup2-img");
    var closeBtn2 = document.getElementById("close-btn2");
    var prevBtn = document.getElementById("prev-btn");
    var nextBtn = document.getElementById("next-btn");
    var images = document.querySelectorAll(".single-prd-item img");
    var currentIndex = 0;

    function showPopup(index) {
        currentIndex = index;
        popupImg2.src = images[currentIndex].src;
        popup2.style.display = "flex";
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        popupImg2.src = images[currentIndex].src;
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        popupImg2.src = images[currentIndex].src;
    }

    images.forEach(function(img, index) {
        img.addEventListener("click", function() {
            showPopup(index);
        });
    });

    closeBtn2.addEventListener("click", function() {
        popup2.style.display = "none";
    });

    nextBtn.addEventListener("click", function() {
        showNextImage();
    });

    prevBtn.addEventListener("click", function() {
        showPrevImage();
    });

    // Close the popup when clicking outside of the popup content
    window.addEventListener("click", function(event) {
        if (event.target == popup2) {
            popup2.style.display = "none";
        }
    });
});



  

