window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const banner = document.querySelector(".banner");
 
    if (!navbar) return;
 
    if (window.scrollY > 50) {
        navbar.classList.add("shrink");
 
        if (banner) {
            banner.classList.add("shrink-banner");
        }
    } else {
        navbar.classList.remove("shrink");
 
        if (banner) {
            banner.classList.remove("shrink-banner");
        }
    }
});