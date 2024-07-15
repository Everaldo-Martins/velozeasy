
document.addEventListener("DOMContentLoaded", () => {   
    const h = new Date().getHours();
    const menuItems = document.querySelectorAll(".nav > li > span");
    const dropdown = document.querySelectorAll(".nav-content");

    const closeAll = () => {
        menuItems.forEach((item, index) => {
            dropdown[index].classList.remove("show");
            item.classList.remove("act");
        });
    };

    const openMenu = (item, index) => {
        closeAll();
        dropdown[index].classList.add("show");
        item.classList.add("act");
    };

    menuItems.forEach((item, index) => {
        item.addEventListener("click", () => openMenu(item, index));
        dropdown[index].addEventListener("mouseleave", closeAll);
        window.addEventListener("click", (e) => {
            if (!e.target.matches(".nav > li > span")) closeAll();
        });
    });

    document.querySelectorAll(".menu_se ul li").forEach((item, index) => {
        item.addEventListener("click", () => {
            document.querySelectorAll(".menu_se ul li").forEach(i => i.classList.remove("active"));
            item.classList.add("active");
            let search = document.querySelector('.search');

            document.querySelector('.q').name = index === 2 ? "search_query": "q";

            search.action = index === 1 ? "https://www.google.com.br/images" :
                index === 2 ? "https://www.youtube.com/results" :
                    "https://www.google.com.br/search"; 

            search.target = "_blank";
            search.addEventListener("submit", () => setTimeout(() => search.reset(), 100));         
        });
    });

    document.querySelector('.hello').textContent = h < 12 ? "Olá, seja bem vindo(a)! Tenha um bom dia." :
        h < 18 ? "Olá, seja bem vindo(a)! Tenha uma boa tarde." :
            "Olá, seja bem vindo(a)! Tenha uma boa noite.";

    document.getElementById("copy").textContent = `2022 - ${new Date().getFullYear()}`;    

    document.getElementById("sff").src = "https://stm21.xcast.com.br:10044/musica";
    document.getElementById("rpr").src = "http://cast2.youngtech.radio.br:8160/radio";
    document.getElementById("sf").src = "https://stream.zeno.fm/qcwuy1y3tm0uv";

    document.querySelector(".facebook").addEventListener("click", () => {
        window.open("https://facebook.com/sharer/sharer.php?u=https://everaldo-martins.github.io/velozeasy/", "facebook", "status=no, toolbar=no, location=no, directories=no, resisable=no, scrollbars=no, top=10, left=10, width=500, height=300");
    });
});
