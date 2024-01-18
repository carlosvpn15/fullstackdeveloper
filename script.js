// ----------------------------------------------
// TOGGLE MOBILE-NAVBAR-ICON

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu
        .classList
        .toggle('open')
    const isOpen = dropDownMenu
        .classList
        .contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

// ----------------------------------------------
// TO CHANGE THE STYLE OF THE NAVBAR ON SCROL
$(function () {
    const header = $('#navbar');
    $(window).scroll(function () {
        const scroll = $(window).scrollTop();

        if (scroll >= 10) {
            header
                .removeClass('nav-scroll-up')
                .addClass("nav-scroll-down");

        } else {
            header
                .removeClass("nav-scroll-down")
                .addClass('nav-scroll-up');
        }
    });
});

// ----------------------------------------------
// SHOW CONTENT ON SCROLL
const boxes = document.querySelectorAll('.display-content');

window.addEventListener('scroll', checkBoxes);

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box
            .getBoundingClientRect()
            .top

        if (boxTop < triggerBottom) {
            box
                .classList
                .add('show')
        } else {
            box
                .classList
                .remove('show')
        }
    })
}
