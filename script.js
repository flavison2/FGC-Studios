/* =========================================================
   FGC STUDIOS
   ========================================================= */


/* ================= MENU MOBILE ================= */

const mobileMenu =
    document.getElementById("mobileMenu");

const navigation =
    document.getElementById("navigation");


mobileMenu.addEventListener("click", () => {

    navigation.classList.toggle("open");

});


/* ================= FECHAR MENU ================= */

const navigationLinks =
    document.querySelectorAll(".navigation a");


navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("open");

    });

});


/* ================= LINK ATIVO ================= */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});
