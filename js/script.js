var typed = new Typed(".typing", {
    strings:["Junior fejlesztő", "Web Designer", "Web Developer", "Software Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});