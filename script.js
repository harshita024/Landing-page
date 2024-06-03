document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Lightbox effect for gallery images
    const gallery = document.querySelectorAll('.gallery img');
    const lightbox = document.createElement('div');
    const lightboxImage = document.createElement('img');
    
    lightbox.id = 'lightbox';
    lightbox.appendChild(lightboxImage);
    document.body.appendChild(lightbox);
    
    gallery.forEach(image => {
        image.addEventListener('click', e => {
            lightboxImage.src = image.src;
            lightbox.style.display = 'block';
        });
    });
    
    lightbox.addEventListener('click', e => {
        if (e.target !== lightboxImage) {
            lightbox.style.display = 'none';
        }
    });
});
