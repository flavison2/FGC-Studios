const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");


// Abrir e fechar menu no celular
menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

});


// Fechar menu quando clicar em algum link
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});
