// import { data } from './data.js';

// import data from './data/lol/lol.js';
//import banderas from './data/banderas.json';
// import slider from './slider'
import data from "./data/athletes/atletasImg.js";
import {listaDeportes,filterData,listaEventos, filterEvento,filterAtletas,ordenar,atletasUnicos} from "./data.js";

function principal() {
    pintarDeportes()
    athletcWinner(data)
}
principal()

function pintarDeportes(deporte=''){
    let eventos=listaDeportes(data, deporte)
    let logosDeportes = document.getElementById("logosDeportes");
    if (logosDeportes) {
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
}

function athletcWinner(ordenar){
    let unicos=atletasUnicos(ordenar)
    let searchAtletas = document.getElementById("search_atletas").value;
        if(searchAtletas!=""){//para no realizar peticiones si esta vacio
            unicos=filterAtletas(unicos,searchAtletas)//guardame los atletas filtrados
        }    
        
        let listaAtletas = document.getElementById("listaAtletas");
                if (listaAtletas){
                listaAtletas.innerHTML='';
                //Para crear la Lista de los atletas
                unicos.forEach(function(deportistas){
                    const contenedorDeportista= document.createElement('div')   
                    contenedorDeportista.classList.add('deportista')
                    contenedorDeportista.setAttribute('id',deportistas.name)
                    const imagen= document.createElement('img')
                    imagen.classList.add('imagenDeportista')
                    imagen.setAttribute('src',deportistas.image)
                    imagen.setAttribute('onError','this.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2dq65TmA2UkeniEcWvW_NI-7UqmNSf01xFQ&usqp=CAU"')
                    
                    contenedorDeportista.addEventListener("click",function(){
                        mostrarFicha(deportistas.name)
                    })
                    
                    const h3=document.createElement('h3')
                    const texto=document.createTextNode(`${deportistas.name} ${deportistas.sport} - ${deportistas.noc}`)
                    h3.appendChild(texto)
                    contenedorDeportista.insertAdjacentElement('beforeend',imagen)
                    contenedorDeportista.insertAdjacentElement('beforeend',h3)
                    listaAtletas.insertAdjacentElement('beforeend',contenedorDeportista)
                });
            }
        
}

// boton buscador
let buscarDeporte= document.getElementById('search-btn')
if ( buscarDeporte) {
    buscarDeporte.addEventListener('click',function(){
        const nombreDeporte = document.getElementById('search').value
        //Esconder iconos DE LOGOS
        //const logosDeportes = document.getElementById("logosDeportes")
        //const eliminarDeportistas = document.getElementById("listaDeportistas")
        // logosDeportes.classList.add('hide')
        // eliminarDeportistas.classList.remove('hide')
    
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
    })
}

//Para crear el evento de busqueda cada vez que presiono una tecla
let search= document.getElementById('search')
if (search){
    search.addEventListener('keyup',function(){
        buscarDeporte.click();
    })
}

//Para crear el select eventos (Para desplegar los ganadores de los eventos)
const selectEventos= document.getElementById('select-eventos')
if (search){
    selectEventos.addEventListener('change',function(){
        pintarAtletas(selectEventos.value)
    })
}

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

//Buscador por Atletas
const searchButtonAthletes = document.getElementById("search-btn-atletas");
if (searchButtonAthletes){
    searchButtonAthletes.addEventListener("click",function(){
        //console.log(event.target.id)
        athletcWinner(data)
    })    
}

//Para buscar atletas cada vez que presiono una tecla en el Search
const searchAthletes = document.getElementById("search_atletas");
if (searchAthletes){
    searchAthletes.addEventListener('keyup',function(){
        searchButtonAthletes.click();
    })  
}

//Para realizar mediante el Select ordenar A-Z & Z-A
const filtroAz = document.getElementById('filtroAz');
if (filtroAz){
    filtroAz.addEventListener('change', () => {
        athletcWinner(ordenar(data,filtroAz.value))
})
}

function mostrarFicha(nombre){
    console.log("soy nombre", nombre)
}

 
//     buttonAthletes.addEventListener("click",function(event){
//            console.log("s6y y6",event.target.id)
//          let nombreAtleta = event.target.id
//          //let banderasParticipantes=filtradoBanderas(banderas,idAtletas)
//  //             const atletaUnico=filterAtletas(data,nombreAtleta)
// //             console.log(atletaUnico)
//           pintarAtletasGanadores()
// //          })
 

// function pintarAtletasGanadores(){
//     const tarjetasAtletas=document.querySelector("tarjetasAtletas")
//     const atletaUnico=filterAtletas(data,"Mariana")
//     console.log(atletaUnico)
// //     const banderaPais=filterBanderas(banderas,"colombia")
// //     console.log(banderaPais)
//             atletaUnico.forEach(function(deportistas){
//             const contenedorAtletaUnico= document.createElement('div')   
//             contenedorAtletaUnico.classList.add('atletaFicha')
//             const imagen= document.createElement('img')
//             imagen.classList.add('imagenDeportista')
//             imagen.setAttribute('src',deportistas.image)
//             imagen.setAttribute('onError','this.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2dq65TmA2UkeniEcWvW_NI-7UqmNSf01xFQ&usqp=CAU"')
//             const h3=document.createElement('h3')
//             const texto=document.createTextNode(`${deportistas.name}`)
//             h3.appendChild(texto)
//             contenedorAtletaUnico.insertAdjacentElement('beforeend',imagen)
//             contenedorAtletaUnico.insertAdjacentElement('beforeend',h3)
//             tarjetasAtletas.insertAdjacentElement('beforeend',contenedorAtletaUnico)
//             });
        
// }



//Funcion para grafica de paises ganadores


// function medalleroPaises(){
//     const paisesGanadores =document.getElementById('regions_div')
//     let paisesFiltrado=data.map((country)=>{
//         console.log(paisesFiltrado)
//         return country.team;
//     });
// } 
// medalleroPaises()