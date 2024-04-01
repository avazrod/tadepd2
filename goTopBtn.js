let goTopBtn = document.getElementById("goTopBtn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
        goTopBtn.classList.add("show");
    } else {
        goTopBtn.classList.remove("show");        
    }
}

