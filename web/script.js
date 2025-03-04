document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation functionality
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', () => {
            mobileNavToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks && navLinks.classList.contains('active') && 
            !e.target.closest('.nav-links') && 
            !e.target.closest('.mobile-nav-toggle')) {
            mobileNavToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('nav-open');
        }
    });

    // Close mobile menu when clicking on a link
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNavToggle) {
                mobileNavToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        });
    });

    // Image Gallery Navigation
    const galleryContainer = document.querySelector('.image-gallery-container');
    if (galleryContainer) {
        const mainImage = document.getElementById('mainImage');
        const gallery = galleryContainer.querySelector('.image-gallery');
        const prevBtn = galleryContainer.querySelector('.prev');
        const nextBtn = galleryContainer.querySelector('.next');
        const images = gallery.querySelectorAll('img');
        let currentIndex = 0;

        // Function to update the main image and thumbnail states
        const updateGallery = (newIndex) => {
            images.forEach(img => img.classList.remove('active'));
            images[newIndex].classList.add('active');
            if (mainImage) {
                mainImage.src = images[newIndex].src;
                mainImage.alt = images[newIndex].alt;
            }
        };

        // Previous button click handler
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateGallery(currentIndex);
        });

        // Next button click handler
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateGallery(currentIndex);
        });

        // Thumbnail click handlers
        images.forEach((img, index) => {
            img.addEventListener('click', () => {
                currentIndex = index;
                updateGallery(currentIndex);
            });
        });
    }

    // Scroll arrow functionality (only on home page)
    const scrollArrow = document.getElementById('scrollArrow');
    if (scrollArrow) {
        scrollArrow.addEventListener('click', (e) => {
            if (!scrollArrow.classList.contains('visible')) {
                e.preventDefault();
                window.scrollBy({
                    top: 80,
                    behavior: 'smooth'
                });
            }
        });
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                scrollArrow.classList.add('visible');
            } else {
                scrollArrow.classList.remove('visible');
            }
        });
    }
}); 

