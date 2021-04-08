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

function pintarDeportes(deporte=''){
    let eventos=listaDeportes(data, deporte)
    let logosDeportes = document.getElementById("logosDeportes");
    logosDeportes.innerHTML='';
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

    pintarDeportes(nombreDeporte)

    // console.log('aqui estoy',texto)
    // lista.appendChild(texto)
    // Filtrado de datos
    
})

let search= document.getElementById('search')
search.addEventListener('keyup',function(){
    //filterData(data,search.value)
    // console.log(search.value)
    buscarDeporte.click();
})


//boton select eventos (Para desplegar los ganadores de los eventos)
const selectEventos= document.getElementById('select-eventos')
selectEventos.addEventListener('change',function(){
    pintarAtletas(selectEventos.value)
})

function pintarAtletas(option){
    // let nombreDeporte= document.getElementById('search').value;
    const filtradoPorEvento= filterEvento(data,option)
    const listaDeportistas=document.getElementById('listaDeportistas');
    listaDeportistas.innerHTML='';// Vaciamos la lista para reiniciar el contenido y evitar duplicados
    filtradoPorEvento.forEach((nombre)=> {
        const lista=document.createElement('p')
        const texto=document.createTextNode(`${nombre.name} - ${nombre.event}`)
        lista.appendChild(texto)
        listaDeportistas.insertAdjacentElement('beforeend',lista)
    })
    listaDeportistas.classList.remove('hide')
}

// Funcion para grafico paises




