import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

fetch("./banderas.json")
  .then(function (response){
    return response.json()
  })
  .then(function(data){
    //traer todas las banderas que tengan paises que inician con A
    var result=data.filter(bandera=> bandera.NOC.startsWith("A"));  
    for (let i = 0; i < result.length; i++) {
        console.log(data[i].PAIS)
    }



    for (let i = 0; i < data.length; i++) {


        let codigo_pais =  data[i].NOC;
        let bandera_url =  data[i].URL;
        let elem  = document.getElementById(codigo_pais)

        if (codigo_pais[0]=='A')
        console.log(codigo_pais)

        var imagen = document.createElement("img");
        imagen.src = bandera_url;
        imagen.width=32;
        imagen.height=32;

        if (elem)
        elem.prepend(imagen);
    }

});;

const slider=document.getElementsByClassName("slider");
let sliderSection=document.getElementsByClassName("slider_section");
let sliderSectionLast=sliderSection[sliderSection.length -1];
const btnLeft=documente.getElementsById("btn_left");
const btnRigth=documente.getElementsById("btn_right");

slider.insertAdjacentElement("afterbegin",sliderSectionLast);

function next(){
    let sliderSectionFirst = document.getElementsByClassName("slider_section")[0];
    slider.style.marginleft="-200%";
    slider.style.transition="all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider.style.marginleft="-100%";
    }, 500);
}

function prev(){
    let sliderSection = document.getElementsByClassName(".slider_section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginleft = "0";
    slider.style.transition="all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginleft="-100%";
    }, 500);
}

btnLeft.addEventListerner("click",function(){
    function next()
});

btnRigth.addEventListerner("click",function(){
    function prev(); 
});

setInterval(function(){
    function next();
}, 5000);
