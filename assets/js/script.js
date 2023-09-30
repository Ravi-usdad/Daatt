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
        loop: true,
        margin: 35,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                margin: 20,
                items: 2
            },
            1000: {
                margin: 24,
                items: 3
            },
            1300: {
                margin: 24,
                items: 3.7
            }
        }
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.header').addClass('sticky')
        } else {
            $('.header').removeClass('sticky')
        } if ($(this).scrollTop() > 150) {
            $('.header').addClass('sticky')
        } else {
            $('.header').removeClass('sticky')
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.message_box').addClass('sticky')
        } else {
            $('.message_box').removeClass('sticky')
        } if ($(this).scrollTop() > 150) {
            $('.message_box').addClass('sticky')
        } else {
            $('.message_box').removeClass('sticky')
        }
    });
})


function filterSidebar() {
    var element = document.getElementById("collection-list");
    element.classList.toggle("filter-open");
 }


var swiper = new Swiper(".thumb-slider", {
    freeMode: true,
    speed: 1000,
    navigation: false,
    watchSlidesProgress: true,
    breakpoints: {       
        0: {
            slidesPerView: 3,
            spaceBetween: 15,        
        },
        640: {
            spaceBetween: 30,        
            slidesPerView: 4,
        },
        991: {
            spaceBetween: 30,        
            slidesPerView: 4,
            direction: "vertical",
        },        
      },

});

var swiper2 = new Swiper(".product-slider", {
    spaceBetween: 20,
    slidesPerView: 1,
    speed: 1000,
    navigation: false,
    thumbs: {
        swiper: swiper,
    },
});


var swiper3 = new Swiper(".thumb-slider-popup", {
    freeMode: true,
    speed: 1000,
    navigation: false,
    watchSlidesProgress: true,
    breakpoints: {       
        0: {
            spaceBetween: 5,        
            slidesPerView: 3,
        },
        640: {
            spaceBetween: 15,        
            slidesPerView: 3,
        },
        991: {
            spaceBetween: 30,        
            slidesPerView: 3,
        },        
      },
});
 
var swiper4 = new Swiper(".popup-product-slider", {
    spaceBetween: 20,
    slidesPerView: 1,
    speed: 1000,
    navigation: false,
    thumbs: {
        swiper: swiper3,
    },
});