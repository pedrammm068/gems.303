const imagesAddress = ['imges/large_cb8024b6-2830-4a2c-aac9-ade9395d47b2.webp','imges/large_aecce3ea-d89e-4006-89a6-2b29d3271b6f.webp',
    'imges/large_017a4268-c872-43dd-910e-6c2e8caa0300.webp', 'imges/large_7d095156-68ed-437b-80ed-2a90b689724c.webp' ,
    'imges/large_b12e80ef-b4c3-48c6-aa71-a0c547f5ea8e.webp' ,
]


function imgrandom(){
    const rndImage = Math.floor(Math.random() * imagesAddress.length )


    document.body.style = `background-image: url(${imagesAddress[rndImage]}) ; background-size :cover ; background-repeat :no-repeat ; `


};
imgrandom()
