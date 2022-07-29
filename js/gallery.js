// Gallery pictures

const images = [{
    id: 'armor',
    alt: 'Armadura',
    imgCrop: '../images/armor.jpg',
    imgFull: 'https://i.imgur.com/txvTW1R.jpg',
}, {
    id: 'horse',
    alt: 'Caballo',
    imgCrop: '../images/horse.jpg',
    imgFull: 'https://i.imgur.com/5vztuh9.jpg',
}, {
    id: 'falcon',
    alt: 'Halcón',
    imgCrop: '../images/falcon.jpg',
    imgFull: 'https://i.imgur.com/zRPYDya.jpg',
}, {
    id: 'surfer',
    alt: 'Surfista',
    imgCrop: '../images/surfer.jpg',
    imgFull: 'https://i.imgur.com/mjlGez7.jpg',
}, {
    id: 'dragon',
    alt: 'Dragón',
    imgCrop: '../images/dragon.jpg',
    imgFull: 'https://i.imgur.com/MgjCMQu.jpg',
}, {
    id: 'reaper',
    alt: 'Parca',
    imgCrop: '../images/reaper.jpg',
    imgFull: 'https://i.imgur.com/1UeAcgB.jpg',
}, {
    id: 'geode',
    alt: 'Geoda',
    imgCrop: '../images/geode.jpg',
    imgFull: 'https://i.imgur.com/VtCFYgq.jpg',
}, {
    id: 'frame',
    alt: 'Marco',
    imgCrop: '../images/frame.jpg',
    imgFull: 'https://i.imgur.com/X2KmUWc.jpg',
}, {
    id: 'fish',
    alt: 'Pez',
    imgCrop: '../images/fish.jpg',
    imgFull: 'https://i.imgur.com/pA5ZCYy.jpg',
}];

const addToGallery = images => {
    let gallery = '';
    for (let i = 0; i < images.length; i++) {
        gallery += `<div id="img1" class="col mb-4 gallery-container">
                <div class="card bg-dark" data-bs-toggle="modal" data-bs-target="#${images[i].id}">
                    <img class="card-img gallery-img" src=${images[i].imgCrop} alt=${images[i].alt}>
                </div>
                <div class="modal fade" id="${images[i].id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-fullscreen">
                        <div class="modal-content bg-dark">
                            <div class="modal-header border-0">
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body bg-dark d-flex justify-content-center align-items-center">
                                <img class="img-fluid mh-100 shadow" src=${images[i].imgFull} alt=${images[i].alt}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    };
    return gallery;
}

document.getElementById('gallery').innerHTML = addToGallery(images);

//Gallery animation

const obsGallery = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadein');
        }
    });
});

for (let i = 1; i < 10; i++) {
    obsGallery.observe(document.getElementById('img' + i));
}