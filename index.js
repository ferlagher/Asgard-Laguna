// Animación de index.html

const obsLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fromleft');
        }
    });
});

const obsRight = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fromright');
        }
    });
});

obsLeft.observe(document.querySelector('.nav1'));

obsRight.observe(document.querySelector('.nav2'));

obsLeft.observe(document.querySelector('.nav3'));

obsRight.observe(document.querySelector('.nav4'));