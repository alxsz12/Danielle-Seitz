document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.getElementById('contact-button');
    const contactForm = document.getElementById('contact-form');
    const closeButton = document.querySelector('.close-button');
    const emailForm = document.getElementById('email-form');

    contactButton.addEventListener('click', (e) => {
        e.preventDefault();
        contactForm.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
        });
    });

    closeButton.addEventListener('click', () => {
        contactForm.style.display = 'none';
    });

    emailForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(emailForm);
        
        try {
            const response = await fetch('https://formsubmit.co/danielleseitz8@gmail.com', {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                // Close the popup
                contactForm.style.display = 'none';
                // Optional: Show a success message
                alert('Message sent successfully!');
                // Reset the form
                emailForm.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message. Please try again.');
        }
    });
});