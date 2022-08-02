// Project cards

const projects = [{
    title: 'Plaza 22 de Julio',
    subtitle: 'Tranqueras 2016',
    alt: 'Molinos',
    img: '../images/mill.jpg',
    link: 'https://www.diarionorte.com.uy/sociedad/inauguran-las-esculturas-de-cinetica-y-viento-en-la-plaza-22-de-julio-de-tranqueras-37731.html',
}, {
    title: 'Paseo de los Inmigrantes',
    subtitle: 'Tranqueras 2017',
    alt: 'Parque',
    img: '../images/park.jpg',
    link: 'https://www.diarionorte.com.uy/sociedad/entregan-obras-del-rincon-infantil-de-plaza-paseo-de-los-inmigrantes-en-tranqueras-42916.html',
}, {
    title: 'Plaza Insausti',
    subtitle: 'Rivera 2018',
    alt: 'Dragones',
    img: '../images/dragons.jpg',
    link: 'https://www.diarionorte.com.uy/sociedad/no-es-una-plaza-mas-es-una-plaza-que-tiene-una-personalidad-muy-fuerte-46327.html',
}, {
    title: '150º Aniversario Villa Juanicó',
    subtitle: 'Villa Juanicó 2022',
    alt: 'Vid',
    img: '../images/grapes.jpg',
    link: 'https://www.diarionorte.com.uy/cultura/esculturas-gigantes-del-tranquerense-guillermo-laguna-en-los-150-anos-de-juanico-63428.html',
}];

const addToProjects = projects => {
    let cards = '';
    for (i = 0; i < projects.length; i++) {
        cards += `<div id="pj${i + 1}" class="px-3">
                <div class="card bg-dark h-100 p-0 shadow">
                    <img src=${projects[i].img} class="card-img-top project" alt=${projects[i].alt}>
                    <div class="card-body d-flex flex-wrap justify-content-between">
                        <div>
                            <h2>${projects[i].title}</h2>
                            <span>${projects[i].subtitle}</span>
                        </div>
                        <a class="btn custom-button ms-auto" href=${projects[i].link} target="_blank">
                            <span>Leer artículo</span>
                        </a>
                    </div>
                </div>
            </div>`
    };
    return cards;
}

document.getElementById('projects').innerHTML = addToProjects(projects);

//Projects animation

const obsGallery = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadein');
            return;
        }
        entry.target.classList.remove('fadein');
    });
});

for (let i = 1; i <= projects.length; i++) {
    obsGallery.observe(document.getElementById('pj' + i));
}