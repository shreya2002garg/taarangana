const navbar = document.getElementById("navBar");
const showNavbarButton = document.getElementById("showNavBarIcon");
const body = document.getElementById("main-sec");

showNavbarButton.addEventListener("click", function () {
    if (navbar.style.display === "none") {
        navbar.style.display = "inline";
    } else {
        navbar.style.display = "none";
        body.style.marginLeft = "0px";
    }
});


const home = document.getElementsByClassName("about")
const gallery = document.getElementsByName("gallery")
