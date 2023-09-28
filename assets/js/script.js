$(document).ready(function () {
    const navbarMenu = document.querySelector(".menu_link");
    const burgerMenu = document.querySelector(".burger");
    const overlayMenu = document.querySelector(".overlay");



    // Show and Hide Navbar Function
    const toggleMenu = () => {
        navbarMenu.classList.toggle("active");
        overlayMenu.classList.toggle("active");
    };
    // Collapsible Mobile Submenu Function
    const collapseSubMenu = () => {
        navbarMenu
            .querySelector(".menu-dropdown.active .submenu")
            .removeAttribute("style");
        navbarMenu.querySelector(".menu-dropdown.active").classList.remove("active");
    };
    // Toggle Mobile Submenu Function
    const toggleSubMenu = (e) => {
        if (e.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
            e.preventDefault();
            const menuDropdown = e.target.parentElement;

            // If Dropdown is Expanded, then Collapse It
            if (menuDropdown.classList.contains("active")) {
                collapseSubMenu();
            } else {
                // Collapse Existing Expanded Dropdown
                if (navbarMenu.querySelector(".menu-dropdown.active")) {
                    collapseSubMenu();
                }

                // Expanded the New Dropdown
                menuDropdown.classList.add("active");
                const subMenu = menuDropdown.querySelector(".submenu");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            }
        }
    };
    // Fixed Resize Window Function
    const resizeWindow = () => {
        if (window.innerWidth > 992) {
            if (navbarMenu.classList.contains("active")) {
                toggleMenu();
            }
            if (navbarMenu.querySelector(".menu-dropdown.active")) {
                collapseSubMenu();
            }
        }
    };
    burgerMenu.addEventListener("click", toggleMenu);
    overlayMenu.addEventListener("click", toggleMenu);
    navbarMenu.addEventListener("click", toggleSubMenu);
    window.addEventListener("resize", resizeWindow);

    $('.services_sliser').owlCarousel({
        loop:true,
        margin:35,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                margin:20,
                items:2
            },
            1000:{
                margin:24,
                items:3
            },
            1200:{
                margin:24,
                items:3.7
            }
        }
    })
})