import './searchbar.ts';

let menu = document.querySelector(".menu");
let spanTop = document.querySelector("#top");
let spanMiddle = document.querySelector("#middle");
let spanBottom = document.querySelector("#bottom");
let links = document.querySelector(".links");


menu.addEventListener("click", menuburger);


function menuburger(){

    if(menu.classList[1] != "open"){
        
        menu.classList.add("open");
        spanMiddle.style.display = "none";
        spanBottom.style.marginTop = "-5px";
        spanBottom.style.transform = "rotate(45deg)";
        spanTop.style.transform = "rotate(-45deg)";
        links.style.top = "70px";

    }else{
        spanMiddle.style.display = "block";
        spanBottom.style.marginTop = "5px";
        spanBottom.style.transform = "rotate(0deg)";
        spanTop.style.transform = "rotate(0deg)";
        links.style.top = "-300px";
        menu.classList.remove("open");
    }
}

console.log('coucou')

fetch('/api/products')
.then(resp => resp.json())
.then(json => console.log(json))