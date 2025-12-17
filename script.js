/* JAVASCRIPT FOR LUMINA GALLERY */

/* --- PART 1: GALLERY MODAL LOGIC --- */
// We use a check (if modal exists) so this code doesn't crash on pages without a gallery
const modal = document.getElementById("imageModal");

if (modal) {
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");
    const images = document.querySelectorAll(".gallery-img");
    const closeBtn = document.querySelector(".close-btn");

    // Add click event to all gallery images
    images.forEach(function(img) {
        img.addEventListener("click", function() {
            modal.style.display = "flex"; // Show modal
            modalImg.src = this.src; // Set image
            
            // Get title from the h3 tag next to the image
            const title = this.nextElementSibling.querySelector("h3").innerText;
            captionText.innerText = title;
        });
    });

    // Close modal when X is clicked
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

/* --- PART 2: SUBMIT FORM LOGIC --- */
// Check if the form exists on the current page
const artForm = document.getElementById("artForm");

if (artForm) {
    artForm.addEventListener("submit", function(event) {
        // Prevent page refresh
        event.preventDefault();

        // Get artist name
        const name = document.getElementById("artistName").value;

        // Show success message
        alert(`Thank you, ${name}! Your artwork has been submitted for review.`);

        // Clear the form
        artForm.reset();
    });
}