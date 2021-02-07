$(function() {
    let link = $(".m-menu-link");
    let close = $(".close-menu");
    let menu = $(".m-menu");

    // durring clicking open adaptive menu
    link.on("click", function(e) {
        e.preventDefault();
        menu.toggleClass("m-menu__active");
    });

    // durring clicking close adaptive menu
    close.on("click", function(e) {
        e.preventDefault();
        menu.toggleClass("m-menu__active");
    })

    // Close m-menu during clicking
    let adaptive_menu = $(".adaptive_menu");
    let m_menu = $(".m-menu");
    adaptive_menu.on("click", function() {
        m_menu.removeClass("m-menu__active");
    })
})

// Scrolling
window.onscroll = () => {
    let showBtn = document.querySelector(".isShowBtn");

    // Appearance the Arrow Up
    if(window.scrollY > 400) {
        showBtn.classList.remove("isHideBtn");
    }
    // Disappearance the Arrow Up
    else {
        showBtn.classList.add("isHideBtn");
    }

    // Clicking the Arrow Up
    const btn = document.getElementById("scrollTop");
    btn.addEventListener("click", () => window.scrollTo({
        top:0,
        behavior: 'smooth',
    }));


    // Fixed header
    let header = document.querySelector(".header_main_menu");

    if(window.pageYOffset > 200) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }

}


// scrolling to sections
const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}


