// Selects the modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

// Function to open the modal
function openModal(img) {
    modal.showModal(); // Opens the modal
    modalImg.src = img.src; // Sets the image in the modal
    captionText.innerHTML = img.alt; // Sets the caption text
}

// Function to attach click events to images
function attachImageClickEvents() {
    const images = document.querySelectorAll(".accordion-content img");
    images.forEach((img) => {
        img.removeEventListener("click", handleImageClick); // Removes duplicate event listeners
        img.addEventListener("click", handleImageClick);
    });
}

// Function to handle image click
function handleImageClick(event) {
    openModal(event.target);
}

// Closes the modal when the close button is clicked
closeBtn.addEventListener("click", () => {
    modal.close(); // Closes the modal
});

// Closes the modal when clicking outside the image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.close();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Select all accordion buttons
    const accordionToggles = document.querySelectorAll(".accordion-toggle");

    // Check if any accordion buttons exist
    if (accordionToggles.length === 0) {
        console.error("No accordion buttons found. Ensure the HTML structure is correct.");
        return;
    }

    accordionToggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            // Get the associated content section
            const contentId = toggle.getAttribute("aria-controls");
            const content = document.getElementById(contentId);

            // Check if the content exists
            if (!content) {
                console.error(`No content found with id: ${contentId}`);
                return;
            }

            // Toggle the expanded state
            const isExpanded = toggle.getAttribute("aria-expanded") === "true";
            toggle.setAttribute("aria-expanded", !isExpanded);
            content.hidden = isExpanded;
        });
    });
});

// Initializes click events for images
attachImageClickEvents();