document.addEventListener('DOMContentLoaded', () => {
    const scrollArrow = document.getElementById('scrollArrow');
    
    // Make arrow a link only after scrolling
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
        if (window.scrollY > 70) {
            scrollArrow.classList.add('visible');
        } else {
            scrollArrow.classList.remove('visible');
        }
    });
}); 

window.onload = function() {
    const ballerina = document.getElementById('ballerina');

    // After 4 seconds, trigger the fall-over animation
    setTimeout(() => {
        ballerina.classList.add('fall');
    }, 4000); // Start fall after 4 seconds of twirling
}
