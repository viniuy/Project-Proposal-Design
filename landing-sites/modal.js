document.addEventListener("DOMContentLoaded", function() {

 
    var modalContainer = document.getElementById("modal-container");
    var aboutUsModal = document.querySelector(".about-us-modal");
    var tableModal = document.querySelector(".table-modal");
    var cartModal = document.querySelector(".cart-modal");

    // Function to open modal
    function openModal(modal) {
        modalContainer.style.display = "flex";  // Show the modal container
        aboutUsModal.style.display = "none";     // Hide all other modals
        tableModal.style.display = "none";
        cartModal.style.display = "none";
        modal.style.display = "block";            // Show the selected modal
    }
    // Click event listeners for the navigation links
    document.getElementById("trigger").onClick = function() {
        openModal(aboutUsModal);
    };

    document.getElementById("trigger-tableNo").onclick = function() {
        openModal(tableModal);
    };

    document.getElementById("trigger-cart").onclick = function() {
        openModal(cartModal);
    };

    document.querySelectorAll(".close").forEach(function(closeButton) {
        closeButton.onclick = function() {
            modalContainer.style.display = "none";  // Hide the modal container
        };
    });
    // Optional: Close modal when clicking outside of it
    modalContainer.onclick = function(event) {
        if (event.target === modalContainer) {
            modalContainer.style.display = "none";
        }
    };
});