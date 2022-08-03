document.getElementById("btn_menu").addEventListener("click", mostrarMenu);

document.getElementById("back_menu").addEventListener("click", ocultarMenu);

nav = document.getElementById("nav");
bgMenu = document.getElementById("back_menu");
btn = document.getElementById("btn_menu");

function mostrarMenu(){
    nav.style.right = "0px";
    bgMenu.style.display = "block";
    btn.style.display = "none";
}

function ocultarMenu(){
    nav.style.right = "-250px";
    bgMenu.style.display = "none";
    btn.style.display = "flex";
}