$(document).ready(function () {
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".burger");
    let overlayBtn = document.querySelector(".overlay");

    // Function to add the 'active' class
    function addActiveClass() {
        sidebar.classList.add("active");
        overlayBtn.classList.add("active");
    }

    // Function to remove the 'active' class
    function removeActiveClass() {
        sidebar.classList.remove("active");
        overlayBtn.classList.remove("active");
    }

    // Attach the functions to the button click event
    sidebarBtn.addEventListener("click", addActiveClass);
    overlayBtn.addEventListener("click", removeActiveClass);

    $(".search_button").click(function() {
        $(".search_box").toggleClass("active");
    });
})