/**
 * NexGen Core - Main JavaScript Implementation
 * Features: Sticky Header, Typed.js Animation, Dynamic Pricing Switcher
 */

// 1. Header Scroll Logic
// Adds a 'scrolled' class to the navbar when the user scrolls down
window.onscroll = function () {
    const nav = document.querySelector('.navbar');
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
};

// 2. Main Initialization on Window Load
// Ensures all DOM elements and libraries are ready before execution
window.onload = function () {

    // --- Hero Section: Typing Animation ---
    const typedElement = document.querySelector('#typed-text');
    if (typedElement) {
        new Typed('#typed-text', {
            strings: ['Intelligence', 'The Future', 'Innovation', 'Neural Cores'],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true,
            cursorChar: '_',
        });
    }

    // --- Pricing Section: Dynamic Switcher ---
    const switcher = document.getElementById('pricing-switcher');
    if (switcher) {
        switcher.addEventListener('change', function () {
            const isYearly = this.checked;

            // Logic for Price Points (Monthly vs. Yearly)
            const basic = isYearly ? 279 : 29;
            const pro = isYearly ? 759 : 79;
            const enterprise = isYearly ? 1910 : 199;
            const periodLabel = isYearly ? '/yr' : '/mo';

            // Selecting Price Elements
            const basicPriceEl = document.getElementById('basic-price');
            const proPriceEl = document.getElementById('pro-price');
            const entPriceEl = document.getElementById('enterprise-price');

            // Updating Price Text
            if (basicPriceEl) basicPriceEl.innerText = basic;
            if (proPriceEl) proPriceEl.innerText = pro;
            if (entPriceEl) entPriceEl.innerText = enterprise;

            // Updating all instances of '/mo' or '/yr'
            document.querySelectorAll('.period').forEach(el => {
                el.innerText = periodLabel;
            });
        });
    }

    // --- Mobile Navigation: Auto-Close ---
    // Closes the mobile menu automatically when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');

    // Only apply if Bootstrap's Collapse is available
    if (menuToggle && window.bootstrap) {
        const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992) {
                    bsCollapse.hide();
                }
            });
        });
    }
};// Add this to your window.onload or as a separate function
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".docs-menu a[href*=" + sectionId + "]")?.classList.add("active");
        } else {
            document.querySelector(".docs-menu a[href*=" + sectionId + "]")?.classList.remove("active");
        }
    });
});