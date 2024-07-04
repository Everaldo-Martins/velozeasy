
document.addEventListener("DOMContentLoaded", () => {   
    const h = new Date().getHours();
    const search = document.getElementById("search");
    const menuItems = document.querySelectorAll(".nav > li > span");
    const dropdowns = document.querySelectorAll(".nav-content");

    const closeMenus = () => {
        menuItems.forEach((item, index) => {
            dropdowns[index].classList.remove("show");
            item.classList.remove("act");
        });
    };

    const toggleMenu = (item, index) => {
        closeMenus();
        dropdowns[index].classList.toggle("show");
        item.classList.toggle("act");
    };

    menuItems.forEach((item, index) => {
        item.addEventListener("click", () => toggleMenu(item, index));
        dropdowns[index].addEventListener("mouseleave", closeMenus);
        window.addEventListener("click", (e) => {
            if (!e.target.matches(".nav > li > span")) closeMenus();
        });
    });

    document.querySelectorAll(".menu_se ul li").forEach((item, index) => {
        item.addEventListener("click", () => {
            document.querySelectorAll(".menu_se ul li").forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            search.action = index === 1 ? "https://www.google.com.br/images" :
                index === 2 ? "https://www.youtube.com/results" :
                    "https://www.google.com.br/search";
        });
    });

    document.querySelector(".hello").textContent = h < 12 ? "Olá, seja bem vindo(a)! Tenha um bom dia." :
        h < 18 ? "Olá, seja bem vindo(a)! Tenha uma boa tarde." :
            "Olá, seja bem vindo(a)! Tenha uma boa noite.";

    document.getElementById("copy").textContent = `2022 - ${new Date().getFullYear()}`;

    search.target = "_blank";
    search.addEventListener("submit", () => setTimeout(() => search.reset(), 100));

    document.getElementById("sff").src = "https://stm21.xcast.com.br:10044/musica";
    document.getElementById("rpr").src = "http://cast2.youngtech.radio.br:8160/radio";
    document.getElementById("sf").src = "https://stream.zeno.fm/qcwuy1y3tm0uv";

    document.querySelector(".facebook").addEventListener("click", () => {
        window.open("https://facebook.com/sharer/sharer.php?u=https://everaldo-martins.github.io/velozeasy/", "facebook", "status=no, toolbar=no, location=no, directories=no, resisable=no, scrollbars=no, top=10, left=10, width=500, height=300");
    });
});
