// import { data } from './data.js';

// import data from './data/lol/lol.js';
//import banderas from './data/banderas.json';
// import slider from './slider'
import data from "./data/athletes/atletasImg.js";
import {listaDeportes} from "./data.js";
function principal() {
    pintarDeportes()
}
principal()

function pintarDeportes(){
    let eventos=listaDeportes(data)
    let contenido = "";
    let logosDeportes = document.getElementById("logosDeportes");
    eventos.forEach(function (disciplina) {
        const imagen= document.createElement('img')
        imagen.setAttribute('src',`./assets/depOlimpicos/${disciplina}.svg`)
        const cajaDisciplina= document.createElement('div')
        cajaDisciplina.classList.add('tipoDeporte')
        const titulo=document.createElement('h3')
        titulo.innerHTML=disciplina.replace('_',' ')
        cajaDisciplina.insertAdjacentElement('beforeend',imagen)
        cajaDisciplina.insertAdjacentElement('beforeend',titulo)
        logosDeportes.insertAdjacentElement('beforeend',cajaDisciplina)
    });
}

// boton buscador
let buscarDeporte= document.getElementById('search-btn')
buscarDeporte.addEventListener('click',function(){
    const nombreDeporte = document.getElementById('search').value
    console.log(data.sport)
    data.forEach(function (element){
        if(nombreDeporte===element.sport){
            console.log('soy element tennis',element)
        }
    })

    
    // let lista=listaDeportes(data)
    // console.log('lista',lista)
    // let resultado=lista.filter(word=>word===nombreDeporte)
    // console.log('soy resultado',resultado)
})


// let evento=document.getElementById('search-evento')
// let eventoDeporte=[]
// data.forEach(function(competencia){
//     if(!eventoDeporte.includes(competencia.event)){
//         console.log('evento',eventoDeporte)
//         return
//     }
// })


