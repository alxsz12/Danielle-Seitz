document.addEventListener('DOMContentLoaded', () => {
    const scrollArrow = document.getElementById('scrollArrow');
    
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
}); 