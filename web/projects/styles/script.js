const mainImage = document.getElementById('mainImage');
const galleryImages = document.querySelectorAll('.image-gallery img');
const gallery = document.querySelector('.image-gallery');
const prevBtn = document.querySelector('.gallery-nav.prev');
const nextBtn = document.querySelector('.gallery-nav.next');

let currentImageIndex = 0;
let slideInterval;
const SLIDE_DELAY = 3000; // 3 seconds between slides

function showImage(index) {
    // Handle wrapping around
    if (index >= galleryImages.length) index = 0;
    if (index < 0) index = galleryImages.length - 1;
    
    currentImageIndex = index;
    mainImage.src = galleryImages[index].src;
    galleryImages.forEach(i => i.classList.remove('active'));
    galleryImages[index].classList.add('active');
}

function startSlideshow() {
    stopSlideshow(); // Clear any existing interval
    slideInterval = setInterval(() => {
        showImage(currentImageIndex + 1);
    }, SLIDE_DELAY);
}

function stopSlideshow() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
}

// Event Listeners
galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        showImage(index);
        stopSlideshow(); // Stop auto-sliding when user interacts
    });
});

prevBtn.addEventListener('click', () => {
    gallery.scrollBy({ left: -200, behavior: 'smooth' });
    showImage(currentImageIndex - 1);
    stopSlideshow();
});

nextBtn.addEventListener('click', () => {
    gallery.scrollBy({ left: 200, behavior: 'smooth' });
    showImage(currentImageIndex + 1);
    stopSlideshow();
});

// Start the slideshow when the page loads
startSlideshow();