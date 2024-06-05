var d = new Date, h = d.getHours(), 
    hello = document.querySelector(".hello"),
    search = document.getElementById("search"),    
    menu_se = document.querySelectorAll(".menu_se ul li"),
    sff = document.getElementById("sff"),
    rpr = document.getElementById("rpr"),
    sf = document.getElementById("sf"),
    menu = document.querySelectorAll(".nav > li > span"),
    ddw = document.querySelectorAll(".nav-content");

function closed() {
    menu.forEach((e, o) => {
        ddw[o].classList.remove("show"), e.removeAttribute("class", "act");
    })
}

function opened(e, o) {
    closed(), ddw[o].classList.add("show"), e.setAttribute("class", "act");
}

menu.forEach((e, o) => {
    e.onclick = () => {
        ddw[o].classList.contains("show") ? closed() : opened(e, o);
    }, ddw[o].onmouseleave = () => {
        closed();
    }, window.onclick = e => {
        e.target.matches(".nav > li > span") || closed();
    }
});

function km(){
    menu_se.forEach((m) =>{
        m.classList.remove("active");
    });
};
menu_se.forEach((e, i) =>{    
    e.onclick = () => {
        km(),
        e.classList.add("active");
        switch (i) {
            case 1: search.action = "https://www.google.com.br/images"; break;
            case 2: search.action = "https://www.youtube.com/results"; break;
            default: search.action = "https://www.google.com.br/search"; break;
        }    
    }
}); 

hello.innerHTML = h >= 0 && h < 12 ? "Olá, seja bem vindo(a)! Tenha um bom dia." : h >= 12 && h < 18 ? "Olá, seja bem vindo(a)! Tenha uma boa tarde." : "Olá, seja bem vindo(a)! Tenha uma boa noite.";

document.getElementById("copy").innerHTML = "2022 - " + d.getFullYear(); 

search.target = "_blank", search.autocomplete = "off";

search.onsubmit = () => {
    setTimeout(() => {
        search.reset();
    }, "100")
};

window.onload = () => {
    sff.src = "https://stm21.xcast.com.br:10044/musica", 
    rpr.src = "http://cast2.youngtech.radio.br:8160/radio", 
    sf.src = "https://stream.zeno.fm/qcwuy1y3tm0uv";
};

document.querySelector(".facebook").onclick = () => {
    window.open("https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvelozeasy.blogspot.com/", "facebook", "status=no, toolbar=no, location=no, directories=no, resisable=no, scrollbars=no, top=10, left=10, width=500, height=300");       
};