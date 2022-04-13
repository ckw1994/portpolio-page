$(function () {
    let menuToggle = document.querySelector('.menuToggle');
    let naviation = document.querySelector('.naviation');
    menuToggle.onclick = function(){
        naviation.classList.toggle('active')
    }
    });