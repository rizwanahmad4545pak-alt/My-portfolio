document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");
    const navLinkItems = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    function handleScroll() {
        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        let current = "";

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinkItems.forEach(function (link) {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    if (menuBtn) {
        menuBtn.addEventListener("click", function () {
            navLinks.classList.toggle("show");
        });
    }

    navLinkItems.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show");
        });
    });

    document.addEventListener("click", function (event) {
        if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
            navLinks.classList.remove("show");
        }
    });

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();

            formMessage.textContent =
                "Thanks " + name + "! Your message has been received.";

            formMessage.classList.add("success");

            contactForm.reset();

            setTimeout(function () {
                formMessage.textContent = "";
                formMessage.classList.remove("success");
            }, 5000);
        });
    }
});
