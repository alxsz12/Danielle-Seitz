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
    const gallery = document.querySelector('.image-gallery');
    const thumbnails = gallery.querySelectorAll('img');
    const mainImage = document.getElementById('mainImage');
    const prevBtn = document.querySelector('.gallery-nav.prev');
    const nextBtn = document.querySelector('.gallery-nav.next');
    let currentIndex = 0; // start with the first image

    function setActiveImage(index) {
        if (index < 0 || index >= thumbnails.length) return;
        // Remove active class from current image
        thumbnails[currentIndex].classList.remove('active');
        // Set new index and apply active style
        currentIndex = index;
        thumbnails[currentIndex].classList.add('active');
        // Update the main image to show the active thumbnail's image
        mainImage.src = thumbnails[currentIndex].src;
        // Scroll the active thumbnail into view in the timeline
        thumbnails[currentIndex].scrollIntoView({
            behavior: 'smooth',
            inline: 'center'
        });
    }

    nextBtn.addEventListener('click', function () {
        let newIndex = currentIndex + 1;
        if (newIndex >= thumbnails.length) {
            newIndex = 0; // Loop back to the start
        }
        setActiveImage(newIndex);
    });

    prevBtn.addEventListener('click', function () {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) {
            newIndex = thumbnails.length - 1; // Loop back to the last image
        }
        setActiveImage(newIndex);
    });

    // Optionally, you can add click events to thumbnails to change the main image
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            setActiveImage(index);
        });
    });

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

