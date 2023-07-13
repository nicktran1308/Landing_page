// Select all the control buttons and sections.
const controls = document.querySelectorAll('.control');
const sections = document.querySelectorAll('.section');
const mainImage = document.querySelector('.main-image');

// Create a function to remove the 'active' class from all sections and controls.
function clearActiveClasses() {
    controls.forEach(control => control.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));
}

// Add click event listeners to all the control buttons.
controls.forEach(control => {
    control.addEventListener('click', function() {
        // Get the id from the clicked control's data-id attribute.
        const id = this.dataset.id;

        // Use the id to select the corresponding section.
        const section = document.querySelector(`.${id}`);

        // Remove the 'active' class from the currently active controls and sections.
        clearActiveClasses();

        // Add the 'active' class to the clicked control and corresponding section.
        this.classList.add('active');
        section.classList.add('active');

        // Make the main image opaque and static.
        mainImage.style.opacity = '1';
        mainImage.style.position = 'static';
    });
});


