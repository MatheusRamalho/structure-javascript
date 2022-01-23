
// ELEMENTS...
const main = document.querySelector('.main__');
const sidebar = document.querySelector('.sidebar__');
const sidebarAction = document.querySelector('.sidebar__action');
const sidebarItem = document.querySelectorAll('.sidebar__menu a[href^="#"]');
const backFromTop = document.getElementById('back__to__top');

// EVENTS...
backFromTop.addEventListener('click', scrollTop);
sidebarAction.addEventListener('click', sidebarToggle);
sidebarItem.forEach(item => {
    item.addEventListener("click", scrollClick);
});

// FUNCTIONS...
function sidebarToggle(event) {
    event.preventDefault();

    if (sidebar.style.width == "21.875rem") {
        sidebar.style.width = "0";
        main.style.width = "100%";
        sidebarAction.style.left = "0";

    } else {
        sidebar.style.width = "21.875rem";
        main.style.width = "calc(100% - 21.875rem)";
        sidebarAction.style.left = "21.875rem";
    }
}

function scrollTop(event) {
    event.preventDefault();

    window.scroll({
        top: 0,
        behavior: "smooth",
    });
}

function scrollSmooth(to) {
    window.scroll({
        top: to,
        behavior: "smooth",
    });
}

function scrollClick() {
    var to = function (element) {
        let id = element.getAttribute('href');
        return document.querySelector(id).offsetTop; // Distancia do href do topo
    }

    scrollSmooth(to);
}