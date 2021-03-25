//import { data } from './data.js';

// import data from './data/lol/lol.js';
//import banderas from './data/banderas.json';
// import slider from './slider'
import data from "./data/athletes/atletasImg.js";
console.log("data", data);
function principal() {
    pintarDeportes()
}
principal()
function listaDeportes(){
    let newSport = [];
    data.forEach(function (deporte) {
      if (!newSport.includes(deporte.sport)) {
        newSport.push(deporte.sport);
      }
    });
    return newSport
}
function pintarDeportes(){
    let eventos=listaDeportes()
    let contenido = "";
    let logosDeportes = document.getElementById("logosDeportes");
    eventos.forEach(function (disciplina) {
        console.log(disciplina);
        let imagen = '<img src="./assets/depOlimpicos/' + disciplina + '.svg"/>';
    contenido = contenido + imagen + disciplina;
    });
    logosDeportes.innerHTML = contenido;
}
let buscarDeporte= document.getElementById('search-btn')
buscarDeporte.addEventListener('click',function(){
    const nombreDeporte = document.getElementById('search').value
    let resultado=listaDeportes(nombreDeporte)
    console.log('soy buscar',resultado)
    
})


