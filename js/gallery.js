//Animación de gallery.html

const obsGallery = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadein');
        }
    });
});

for (let i = 1; i < 10; i++) {
    obsGallery.observe(document.querySelector('.img' + i));
}