
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    /* =========================
       MOBILE NAVIGATION
    ========================= */

    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");

    if (navbar && navLinks) {
        const menuButton = document.createElement("button");

        menuButton.type = "button";
        menuButton.className = "mobile-menu-toggle";
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-controls", "landing-navigation");

        navLinks.id = "landing-navigation";
        navbar.appendChild(menuButton);

        function closeMenu() {
            navLinks.classList.remove("is-open");
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-label", "Open navigation menu");
            menuButton.setAttribute("aria-expanded", "false");
        }

        menuButton.addEventListener("click", function () {
            const isOpen = navLinks.classList.toggle("is-open");

            menuButton.textContent = isOpen ? "✕" : "☰";
            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );
            menuButton.setAttribute("aria-expanded", String(isOpen));
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeMenu();
            }
        });

        document.addEventListener("click", function (event) {
            if (!navbar.contains(event.target)) {
                closeMenu();
            }
        });
    }

    /* =========================
       CURRENT COPYRIGHT YEAR
    ========================= */

    const footer = document.querySelector("footer");

    if (footer) {
        const footerParagraphs = footer.querySelectorAll("p");

        footerParagraphs.forEach(function (paragraph) {
            if (paragraph.textContent.includes("All Rights Reserved")) {
                paragraph.textContent =
                    "© " + new Date().getFullYear() +
                    " Joseph Adirimor. All Rights Reserved.";
            }
        });
    }

    /* =========================
       CONTACT LINK VALIDATION
    ========================= */

    document.querySelectorAll('a[href^="mailto:"]').forEach(function (link) {
        link.setAttribute("aria-label", "Send Joseph an email");
    });

    document.querySelectorAll('a[href^="https://wa.me/"]').forEach(function (link) {
        link.setAttribute("aria-label", "Contact Joseph on WhatsApp");
    });
});
          
