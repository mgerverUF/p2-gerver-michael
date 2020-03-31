// START CODE FOR HOMEPAGE POP-UP
var popUp = document.getElementById('text-window'); 
var overlay = document.getElementById('overlay');
var closeButton = document.getElementById('close-pop-up');

closeButton.addEventListener('click', hidePopUp)
function hidePopUp() {
    popUp.classList.add('hide');
    overlay.classList.add('hide');
};   