document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const siteHeader = document.querySelector(".site-header");
    const copyright = document.getElementById("copyright");

    function closeMenu() {
        if (!menuToggle || !navLinks) return;

        navLinks.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
        menuToggle.textContent = "☰";
    }

    function openMenu() {
        if (!menuToggle || !navLinks) return;

        navLinks.classList.add("is-open");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute(
            "aria-label",
            "Close navigation menu"
        );
        menuToggle.textContent = "✕";
    }

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            const isOpen = navLinks.classList.contains("is-open");

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        const navigationLinks = navLinks.querySelectorAll("a");

        navigationLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                closeMenu();
            });
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeMenu();
            }
        });

        document.addEventListener("click", function (event) {
            if (
                siteHeader &&
                !siteHeader.contains(event.target)
            ) {
                closeMenu();
            }
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 850) {
                closeMenu();
            }
        });
    }

    if (copyright) {
        copyright.textContent =
            "© " +
            new Date().getFullYear() +
            " Joseph Adirimor. All Rights Reserved.";
    }
});
