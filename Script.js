// const navbar = document.getElementById("navBar");
// const showNavbarButton = document.getElementById("showNavBarIcon");
// const body = document.getElementById("main-sec");

// showNavbarButton.addEventListener("click", function () {
//     if (navbar.style.display === "none") {
//         navbar.style.display = "inline";
//     } else {
//         navbar.style.display = "none";
//         body.style.marginLeft = "0px";
//     }
// });


// const home = document.getElementsByClassName("about")
// const gallery = document.getElementsByName("gallery")
const navbar = document.getElementById("navBar");
const showNavbarButton = document.getElementById("showNavBarIcon");
const body = document.getElementById("main-sec");
const galleryImages = document.getElementsByClassName("img");
const mainSecGallery = document.getElementById("gallery-sec")
const gallerrry1 = document.getElementById("gallery1")
const gallerrry2 = document.getElementById("gallery2")

showNavbarButton.addEventListener("click", function () {
    if (navbar.style.display === "none" || navbar.style.display === "") {
        navbar.style.display = "block"; // Change to "block" to display the navbar
        for (let i = 0; i < galleryImages.length; i++) {
            galleryImages[i].style.width = "24vw";
            mainSecGallery.style.marginLeft = "270px"
            gallerrry1.style.width = "78vw";
            gallerrry2.style.width = "78vw";
        }
    } else {
        navbar.style.display = "none";
        for (let i = 0; i < galleryImages.length; i++) {
            galleryImages[i].style.width = ""; // Reset the width
            galleryImages[i].style.marginLeft = ""; // Reset the margin
            mainSecGallery.style.marginLeft = "0px"
            gallerrry1.style.width = "98vw";
            gallerrry2.style.width = "98vw";
        }
    }
});
