const navToggle=document.querySelector(".nav-toggle");
const navMenu=document.querySelector(".nav-menu");

navToggle.addEventListener("click", ()=>{ //añade un evento de escucha, cuando se hace click sobre navToggle
    //se ejecuta una función que añade una clase si no está o la elimina si está.
    navMenu.classList.toggle("nav-menu-visible");
    if(navMenu.classList.contains("nav-menu-visible")){
        navToggle.setAttribute("aria-label", "Cerrar menú");
    }else{
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});