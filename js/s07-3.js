// coger pixeles con evento scroll

/*window.addEventListener('scroll', ( ) =>{
    const scrollpx = window.scrollY;
    console.log(scrollpx);
}*/

//ver la ubicacion con el evento scroll de un elemento de la pagina

/*window.addEventListener('scroll', ( ) =>{
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    console.log(ubicacion);
})*/

window.addEventListener('scroll', ( ) =>{
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if(ubicacion.top < 100){
        console.log('El elemento esta visible');
    }else{
        console.log('Aun no esta visible, da mas scroll');
    }
})

// event bubbling- propagacion busrbuja

const carDriv = document.querySelector('.card');
const 