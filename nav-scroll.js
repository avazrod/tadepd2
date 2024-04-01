document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.fixed-top');
    const scrollHideThreshold = 150;

    window.addEventListener("scroll", function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop && currentScroll > scrollHideThreshold) {
            navbar.style.top = "-150px";
            navbar.style.transition = "top 0.5s";
        } else {
            navbar.style.top = "0";
            navbar.style.transition = "top 0.5s";
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, false);
});


