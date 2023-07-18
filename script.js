let tabLink = document.querySelectorAll(".tab-links");
let tabLinkArray = Array.from(tabLink);
let tabContents = document.querySelectorAll(".tab-contents");
let tabContentsArray = Array.from(tabContents);

tabLinkArray.forEach ((ele) => {
    ele.addEventListener ("click", (e) => {
        tabLinkArray.forEach ( (ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        tabContents.forEach ( (tab) => {
            tab.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.showlink).style.display = "block";
    });
});
let openMenu = document.querySelector(".fa-bars");
let closeMenu = document.querySelector(".fa-times");
let navLinks = document.querySelector("#header nav ul");

openMenu.onclick = function() {
    navLinks.style.right = "0";
}
closeMenu.onclick = function () {
    navLinks.style.right = "-200px";
}
let scrollBtn = document.getElementById("scroll");
window.addEventListener("scroll", () => {
    if (window.scrollY >= 500) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
})
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})