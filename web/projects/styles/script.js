const mainImage = document.getElementById('mainImage');
        const galleryImages = document.querySelectorAll('.image-gallery img');
        const gallery = document.querySelector('.image-gallery');
        const prevBtn = document.querySelector('.gallery-nav.prev');
        const nextBtn = document.querySelector('.gallery-nav.next');

        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                mainImage.src = img.src;
                galleryImages.forEach(i => i.classList.remove('active'));
                img.classList.add('active');
            });
        });

        prevBtn.addEventListener('click', () => {
            gallery.scrollBy({ left: -200, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            gallery.scrollBy({ left: 200, behavior: 'smooth' });
        });