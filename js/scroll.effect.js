window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    var navLinks = document.querySelectorAll(".nav-link");

    nav.classList.toggle("sticky", window.scrollY);

    navLinks.forEach(function(link) {
        link.classList.toggle("text-light", window.scrollY);
    });
});
