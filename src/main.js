// import { data } from './data.js';

// import data from './data/lol/lol.js';
//import banderas from './data/banderas.json';
// import slider from './slider'
import data from "./data/athletes/atletasImg.js";
import {listaDeportes,filterData} from "./data.js";

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
    //Esconder iconos DE LOGOS
    const logosDeportes = document.getElementById("logosDeportes")
    const eliminarDeportistas = document.getElementById("listaDeportistas")

    logosDeportes.classList.add('hide')
    eliminarDeportistas.classList.remove('hide')
    // Filtrado de datos
    const deporteFiltrado= filterData(data,nombreDeporte)
    const listaDeportistas=document.getElementById('listaDeportistas');
    deporteFiltrado.forEach((nombre)=> {
        const lista=document.createElement('p')
        const texto=document.createTextNode(`${nombre.name} - ${nombre.event}`)
        lista.appendChild(texto)
        listaDeportistas.insertAdjacentElement('beforeend',lista)
    })

    //funcion para traer eventos y crear option del select

    const eventosFiltrados=filterData(data,nombreDeporte)
    const selectorEventos=document.getElementById("select-eventos")
    let arrayEventos=[]
    eventosFiltrados.forEach((evento)=>{
        if(!arrayEventos.includes(evento.event)){
            arrayEventos.push(evento.event)
        
        }
        
    })
    console.log(arrayEventos)
    arrayEventos.forEach((superFiltrado)=>{
        const opciones=document.createElement('option')
        const eventos=document.createTextNode(`${superFiltrado}`)

        opciones.appendChild(eventos)
        selectorEventos.insertAdjacentElement('beforeend',opciones)
    })
    // console.log('aqui estoy',texto)
    // lista.appendChild(texto)
})


// let evento=document.getElementById('search-evento')
// let eventoDeporte=[]
// data.forEach(function(competencia){
//     if(!eventoDeporte.includes(competencia.event)){
//         console.log('evento',eventoDeporte)
//         return
//     }
// })


