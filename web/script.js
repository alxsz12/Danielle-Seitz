document.addEventListener('DOMContentLoaded', () => {
    const scrollArrow = document.getElementById('scrollArrow');
    
    // Make arrow a link only after scrolling
    scrollArrow.addEventListener('click', (e) => {
        if (!scrollArrow.classList.contains('visible')) {
            e.preventDefault();
            window.scrollBy({
                top: 100,
                behavior: 'smooth'
            });
        }
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollArrow.classList.add('visible');
        } else {
            scrollArrow.classList.remove('visible');
        }
    });
}); 