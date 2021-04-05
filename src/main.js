// import { data } from './data.js';

// import data from './data/lol/lol.js';
//import banderas from './data/banderas.json';
// import slider from './slider'
import data from "./data/athletes/atletasImg.js";
import {listaDeportes,filterData,listaEventos, filterEvento} from "./data.js";

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
    console.log("click search-btn")
    const nombreDeporte = document.getElementById('search').value
    //Esconder iconos DE LOGOS
    const logosDeportes = document.getElementById("logosDeportes")
    const eliminarDeportistas = document.getElementById("listaDeportistas")

    logosDeportes.classList.add('hide')
    eliminarDeportistas.classList.remove('hide')

    //Para crear los options del select 
    const eventosFiltrados=filterData(data,nombreDeporte)
    // console.log("soy evento",eventosFiltrados)
    let arrayEventos = listaEventos (eventosFiltrados)
    const selectorEventos=document.getElementById("select-eventos")
    selectorEventos.innerHTML='';// Vaciamos la lista para reiniciar el contenido y evitar duplicados
    const opciones=document.createElement('option')
    const eventos = document.createTextNode('Buscar por evento')
    opciones.appendChild(eventos)
    selectorEventos.insertAdjacentElement('beforeend',opciones)
    arrayEventos.forEach((superFiltrado)=>{
        const opciones=document.createElement('option')
        const eventos=document.createTextNode(`${superFiltrado}`)

        opciones.appendChild(eventos)
        selectorEventos.insertAdjacentElement('beforeend',opciones)
    })
    // console.log('aqui estoy',texto)
    // lista.appendChild(texto)
    // Filtrado de datos
    
})


//boton select eventos (Para desplegar los ganadores de los eventos)
const selectEventos= document.getElementById('select-eventos')
selectEventos.addEventListener('change',function(){
    console.log("change selectEventos")
    pintarAtletas()
})

function pintarAtletas(){
    let nombreDeporte= document.getElementById('search').value;
    const filtradoPorEvento= filterEvento(data,)
    console.log("soy deportistas",filtradoPorEvento)
    const listaDeportistas=document.getElementById('listaDeportistas');
    listaDeportistas.innerHTML='';// Vaciamos la lista para reiniciar el contenido y evitar duplicados
    deporteFiltrado.forEach((nombre)=> {
        const lista=document.createElement('p')
        const texto=document.createTextNode(`${nombre.name} - ${nombre.event}`)
        lista.appendChild(texto)
        listaDeportistas.insertAdjacentElement('beforeend',lista)
    })

}


