document.addEventListener('DOMContentLoaded', () => {
    // Handle social button clicks
    document.querySelectorAll('.social-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // If this button is already active, deactivate it
            if (button.classList.contains('active')) {
                button.classList.remove('active');
                return;
            }
            
            // Remove active class from all buttons
            document.querySelectorAll('.social-button').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            button.classList.add('active');
        });
    });

    // Close form when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.social-button')) {
            document.querySelectorAll('.social-button').forEach(btn => {
                btn.classList.remove('active');
            });
        }
    });
});

// Add this to check if the script is running
console.log('Social script loaded');
