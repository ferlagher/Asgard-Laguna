const observerleft = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('fromleft');
    }
    });
});

const observerright = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('fromright');
    }
    });
});

observerleft.observe(document.querySelector('.nav1'));

observerright.observe(document.querySelector('.nav2'));

observerleft.observe(document.querySelector('.nav3'));

<<<<<<< HEAD
observerright.observe(document.querySelector('.nav4'));
=======
observerright.observe(document.querySelector('.nav4'));
>>>>>>> javascript
