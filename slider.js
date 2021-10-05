// Aqui comienza el slider

// Devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.
let slider = document.querySelector("#slider"); 
// Devuelve una NodeList estática (no viva) que representa una lista de elementos del documento que coinciden con el grupo de selectores indicados.
let imagenes = document.querySelectorAll(".slider_section");
let sliderSectionLast = imagenes[imagenes.length -1];
slider.insertAdjacentElement("afterbegin", sliderSectionLast);

// Elementos navegacion
const btnLeft = document.querySelector(".slider_btn_left"); 
const btnRigth = document.querySelector(".slider_btn_right");

// listener funcion flecha
btnLeft.addEventListener('click', btn_left)
btnRigth.addEventListener('click', btn_right)

function next(){//Funcion para ir hacia adelante
    let imagenes=document.querySelectorAll(".slider_section")[0];
    slider.insertAdjacentElement("afterbegin", imagenes);//para analizar la cadena insertAdjacentElement +"Afterbegin" Justo dentro del elemento, antes de su primer elemento hijo.
    slider.style.transition="all 0.8s";
   
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement('beforeend',imagenes);//para analizar la cadena insertAdjacentElement + beforeend Justo dentro del elemento, después de su último elemento hijo.
        slider.style.marginleft="-100%";
    }, 500);
}

function prev(){//Funcion para ir atras
    let imagenes=document.querySelectorAll(".slider_section");
    let sliderSectionLast=imagenes[imagenes.length -1];
    slider.style.marginleft = "0";
    slider.style.transition="all 0.8s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginleft="-100%";
   }, 500);
} 

// TODO FUCTION IS NOT BEING USED
var ciclo = 0;
function btn_right(){
    clearInterval(ini);//Para limpiar el intervalo de tiempo del ciclo
    next();
    if(ciclo)
    clearInterval(ciclo); //Para evitar que el ciclo se repita 
    ciclo = setInterval(function(){//Para llamar a la funcion y que se ejecute de forma infitiva
        next();
    },3000);
    
}

function btn_left(){
    clearInterval(ini); //Para limpiar el intervalo de tiempo del ciclo
        prev();

   if(ciclo) //Para evitar que el ciclo se repita 
   clearInterval(ciclo);
}

var ini = setInterval(function(){//Para llamar a la funcion y que se ejecute de forma infitiva
    next();
},3000);

//Termina funcion slider
