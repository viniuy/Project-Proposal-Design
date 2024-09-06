document.addEventListener("DOMContentLoaded", function() {

 
    var modalContainer = document.getElementById("modal-container");
    var aboutUsModal = document.querySelector(".about-us-modal");
    var tableModal = document.querySelector(".table-modal");
    var cartModal = document.querySelector(".cart-modal");

    // Function to open modal
    function openModal(modal) {
        modalContainer.style.display = "flex"; 
        aboutUsModal.style.display = "none"; 
        tableModal.style.display = "none";
        cartModal.style.display = "none";
        modal.style.display = "block";   
    }
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
            modalContainer.style.display = "none";  
        };
    });
    modalContainer.onclick = function(event) {
        if (event.target === modalContainer) {
            modalContainer.style.display = "none";
        }
    };
});