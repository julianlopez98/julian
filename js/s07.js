const nav = document.querySelector(".navegacion")

nav.addEventListener("mouseenter", () =>{
    nav.style.backgroundColor = "#da595e";
})

nav.addEventListener("mouseout", () =>{
    nav.style.backgroundColor = "green";
})

const search = document.querySelector(".busqueda");
search.addEventListener("keydown", () =>(
    console.log("escribiendo...")
))