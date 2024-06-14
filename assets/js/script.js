document.addEventListener("DOMContentLoaded", () => {
    const d = new Date();
    const h = d.getHours();
    const hello = document.querySelector(".hello");
    const search = document.getElementById("search");
    const menuSeItems = document.querySelectorAll(".menu_se ul li");
    const sff = document.getElementById("sff");
    const rpr = document.getElementById("rpr");
    const sf = document.getElementById("sf");
    const menuItems = document.querySelectorAll(".nav > li > span");
    const dropdowns = document.querySelectorAll(".nav-content");
    const facebookButton = document.querySelector(".facebook");

    const closeMenus = () => {
        menuItems.forEach((menuItem, index) => {
            dropdowns[index].classList.remove("show");
            menuItem.classList.remove("act");
        });
    };

    const openMenu = (menuItem, index) => {
        closeMenus();
        dropdowns[index].classList.add("show");
        menuItem.classList.add("act");
    };

    menuItems.forEach((menuItem, index) => {
        menuItem.addEventListener("click", () => {
            dropdowns[index].classList.contains("show") ? closeMenus() : openMenu(menuItem, index);
        });

        dropdowns[index].addEventListener("mouseleave", closeMenus);

        window.addEventListener("click", (e) => {
            if (!e.target.matches(".nav > li > span")) {
                closeMenus();
            }
        });
    });

    const removeActiveClassFromMenuItems = () => {
        menuSeItems.forEach(menuItem => menuItem.classList.remove("active"));
    };

    menuSeItems.forEach((menuItem, index) => {
        menuItem.addEventListener("click", () => {
            removeActiveClassFromMenuItems();
            menuItem.classList.add("active");

            switch (index) {
                case 1:
                    search.action = "https://www.google.com.br/images";
                    break;
                case 2:
                    search.action = "https://www.youtube.com/results";
                    break;
                default:
                    search.action = "https://www.google.com.br/search";
                    break;
            }
        });
    });

    hello.textContent = h >= 0 && h < 12 ? "Olá, seja bem vindo(a)! Tenha um bom dia." :
                        h >= 12 && h < 18 ? "Olá, seja bem vindo(a)! Tenha uma boa tarde." :
                        "Olá, seja bem vindo(a)! Tenha uma boa noite.";

    document.getElementById("copy").textContent = `2022 - ${d.getFullYear()}`;

    search.target = "_blank";

    search.addEventListener("submit", () => {
        setTimeout(() => {
            search.reset();
        }, 100);
    });

    sff.src = "https://stm21.xcast.com.br:10044/musica";
    rpr.src = "http://cast2.youngtech.radio.br:8160/radio";
    sf.src = "https://stream.zeno.fm/qcwuy1y3tm0uv";

    facebookButton.addEventListener("click", () => {
        window.open("https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvelozeasy.blogspot.com/", "facebook", "status=no, toolbar=no, location=no, directories=no, resisable=no, scrollbars=no, top=10, left=10, width=500, height=300");
    });
});