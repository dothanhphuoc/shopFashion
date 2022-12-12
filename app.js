const navbar = document.getElementById('navbar');
const menuBar = document.getElementById('menuBar');
const closeBar = document.getElementById('close');

menuBar.onclick = function(){
    navbar.classList.add('active');
}

closeBar.onclick = function(){
    navbar.classList.remove('active');
}

window.onscroll = function(){
    navbar.classList.remove('active');
}
