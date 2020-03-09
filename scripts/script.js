const navBar = document.querySelector("#navBar")
const toggler = document.querySelector(".toggler")
let togglerSrc = toggler.getAttribute("src")

function toggleNavBar() {
    navBar.classList.toggle("navlinks-ctn-mobile")
    switch (togglerSrc) {
        case "./images/icon-close.svg":
            toggler.setAttribute("src", "./images/icon-hamburger.svg")
            togglerSrc = "./images/icon-hamburger.svg"
            break;
        case "./images/icon-hamburger.svg":
            toggler.setAttribute("src", "./images/icon-close.svg")
            togglerSrc = "./images/icon-close.svg"
            break;
        default:
            break;
    }
}

toggler.addEventListener("click", toggleNavBar)