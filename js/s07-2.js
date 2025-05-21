//evitar propagacion de contenido creado//
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

//segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'concierto de rock';
parrafo2.classList.add('titulo');

//tercer parrafo
const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//crear el div

const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

//crear el card
const contenedorCard = document.createElement('div');
contenedorCard.classList.add('contenedorcard');

//asignar la imagen al card
contenedorCard.appendChild(imagen);

//asignar info
contenedorCard.appendChild(info);

//insertar en HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(contenedorCard);
