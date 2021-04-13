// import { data } from './data.js';

// import data from './data/lol/lol.js';
import banderas from './data/banderas.js';
// import slider from './slider'
import data from "./data/athletes/atletasImg.js";
import {
  listaDeportes,
  filterData,
  listaEventos,
  filterEvento,
  filterAtletas,
  ordenar,
  atletasUnicos,
  estadisticaHombreMujer,
//   banderaPais,
} from "./data.js";

function principal() {
  pintarDeportes();
  athletcWinner(data)
}
principal();

/***********Aqui comienza la pantalla de Deportes***********/

// Funcion para pintar los deportes
function pintarDeportes(deporte = "") {
  let eventos = listaDeportes(data, deporte);
  let logosDeportes = document.getElementById("logosDeportes");
  if (logosDeportes) {
    logosDeportes.innerHTML = "";
    eventos.forEach(function (disciplina) {
      const imagen = document.createElement("img");
      imagen.setAttribute("src", `./assets/depOlimpicos/${disciplina}.svg`);
      const cajaDisciplina = document.createElement("div");
      cajaDisciplina.classList.add("tipoDeporte");
      const titulo = document.createElement("h3");
      titulo.innerHTML = disciplina.replace("_", " ");
      cajaDisciplina.insertAdjacentElement("beforeend", imagen);
      cajaDisciplina.insertAdjacentElement("beforeend", titulo);
      logosDeportes.insertAdjacentElement("beforeend", cajaDisciplina);
    });
  }
}

// boton buscador
let buscarDeporte = document.getElementById("search-btn");
if (buscarDeporte) {
  buscarDeporte.addEventListener("click", function () {
    const nombreDeporte = document.getElementById("search").value;
    //Para crear los options del select
    const eventosFiltrados = filterData(data, nombreDeporte);
    // console.log("soy evento",eventosFiltrados)
    let arrayEventos = listaEventos(eventosFiltrados);
    const selectorEventos = document.getElementById("select-eventos");
    selectorEventos.innerHTML = ""; // Vaciamos la lista para reiniciar el contenido y evitar duplicados
    const opciones = document.createElement("option");
    const eventos = document.createTextNode("Buscar por evento");
    opciones.appendChild(eventos);
    selectorEventos.insertAdjacentElement("beforeend", opciones);
    arrayEventos.forEach((superFiltrado) => {
      const opciones = document.createElement("option");
      const eventos = document.createTextNode(`${superFiltrado}`);

      opciones.appendChild(eventos);
      selectorEventos.insertAdjacentElement("beforeend", opciones);
    });

    pintarDeportes(nombreDeporte);
  });
}

// //Para crear el crear el evento al logo del deporte
// const buscarPorElLogoDeporte= document.getElementsByClassName("tipoDeporte")
// buscarPorElLogoDeporte.addEventListener("click", function () {
//     let buscarDeportePorLogo=""
//     for (var i = 0; i < tipoDeporte.length; i++) {
//         console.log(i)
       
//      }
   
    // const eventos = filterData(data,valor);
    // let arrayEventos = listaEventos(eventosFiltrados);
    // const selectorEventos = document.getElementById("select-eventos");
    // selectorEventos.innerHTML = ""; // Vaciamos la lista para reiniciar el contenido y evitar duplicados
    // const opciones = document.createElement("option");
    // const eventos = document.createTextNode("Buscar por evento");
    // opciones.appendChild(eventos);
    // selectorEventos.insertAdjacentElement("beforeend", opciones);
    // arrayEventos.forEach((superFiltrado) => {
    //   const opciones = document.createElement("option");
    //   const eventos = document.createTextNode(`${superFiltrado}`);

    //   opciones.appendChild(eventos);
    //   selectorEventos.insertAdjacentElement("beforeend", opciones);
//   });


//Para crear el evento de busqueda cada vez que presiono una tecla
let search = document.getElementById("search");
if (search) {
  search.addEventListener("keyup", function () {
    buscarDeporte.click();
  });
}

//Para crear el select eventos (Para desplegar los ganadores de los eventos)
const selectEventos = document.getElementById("select-eventos");
if (selectEventos) {
  selectEventos.addEventListener("change", function () {
    pintarAtletas(selectEventos.value);
  });
}

// function cintaVerde(data,nombreDelDeporte) {
//     let deportes = listaDeportes(data, nombreDelDeporte);
//     deportes.forEach(function (deporteAcrear) {
//        const cintaVerdeDiv=`
//              <div class = "cintaVerde">
//                 <span class="icono"><img src=./assets/depOlimpicos/${deporteAcrear}.svg></span>
//                 <span class="nombre"><p>${deporteAcrear}<p> </span>	
//             </div>
//         `
//     });
//     console.log(deportes)
//     return deportes
// }

// cintaVerde(data,"boxing")

function pintarAtletas(option) {
  let nombreDeporte= document.getElementById('search').value;
  const deporteCintaVerde=document.getElementsByClassName("deporteCintaVerde");
  const filtradoPorEvento = filterEvento(data, option);
  const listaDeportistas = document.getElementById("listaDeportistas");
  listaDeportistas.innerHTML = ""; // Vaciamos la lista para reiniciar el contenido y evitar duplicados
  filtradoPorEvento.forEach((nombre) => {
    let tabla   = document.createElement("table");
    let tblBody = document.createElement("tbody");
    let hilera = document.createElement("tr")
    let celda = document.createElement("td");
    let textoCelda = document.createTextNode(`${nombre.name} - ${nombre.event}`);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);
    tblBody.appendChild(hilera);
    tabla.appendChild(tblBody);
    listaDeportistas.appendChild(tabla);
    // tabla.setAttribute("border", "2");
    })
    //  const lista = document.createElement("p");
    //  const texto = document.createTextNode(`${nombre.name} - ${nombre.event}`);
    //  lista.appendChild(texto);
    // //  deporteCintaVerde.insertAdjacentElement('beforeend', divCintaVerde);
    //  listaDeportistas.insertAdjacentElement("beforeend", tabla);
    // });
    // listaDeportistas.classList.remove("hide");
    return listaDeportistas
}

/***********Aqui comienza la pantalla de Atletas***********/

//Funcion para pintar los Atletas
function athletcWinner(ordenar) {
  let unicos = atletasUnicos(ordenar);
  let searchAtletas = document.getElementById("search_atletas");
  if (searchAtletas !=null) {
    //para no realizar peticiones si esta vacio
    unicos = filterAtletas(unicos, searchAtletas.value); //guardame los atletas filtrados
  }

  let listaAtletas = document.getElementById("listaAtletas");
  if (listaAtletas) {
    listaAtletas.innerHTML = "";
    unicos.forEach(function (deportista) {//Para crear la Lista de los atletas
      const contenedorDeportista = crearContenedorDeportista(deportista) 
      listaAtletas.insertAdjacentHTML('beforeend', contenedorDeportista);
    });
  }
}

function crearContenedorDeportista(deportista) {
    
    const card = `
    <div class="tarjetaDeporte">
      <div class="tarjetaDeporteInner">
        
      <div class="tarjetaDeporteFrontal">
      <img class="imagenDeportista" src=${deportista.image} onError="src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2dq65TmA2UkeniEcWvW_NI-7UqmNSf01xFQ&usqp=CAU'">
            <h3>${deportista.name}</h3>
            <p>${deportista.sport} - ${deportista.noc}</p>
        </div>

        <div class="tarjetaDeporteReverso">
            <div id="nombreAtleta"><h4 >${deportista.name}</h4></div>
          <img class="imagenDeportistaReverso" src=${deportista.image} onError="src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2dq65TmA2UkeniEcWvW_NI-7UqmNSf01xFQ&usqp=CAU'">
          <img class="banderaPais" src="./assets/logos/logo-rio-2016.png">
          <p class="team">${deportista.team}<p> 
          <p class="sport"> ${deportista.sport}</p>
          <p class="medalla">Medal</p>
          <div class="resultadoMedallero" style="display: flex;justify-content:space-between;margin: 0px 28px 0px 28px">
            <span class="rMedallaOro" style="width:100px">${deportista.medal} ${deportista.medal} ${deportista.medal}</span> 
          </div>
          <div class="medallero" >
            <img class="medallaOro" src="./assets/logos/gold-medal.png">
            <img class="medallaPlata" src="./assets/logos/silver-medal.png">
            <img class="medallaBronce" src="./assets/logos/bronze-medal.png">
          </div>
      
        </div>
    </div>
    `;

    return card;
}

function banderaPorPais(dataBandera,pais) {
     dataBandera.forEach(function(valor,i) {
          console.log(dataBandera[i])
           if (valor[i].noc===pais){
           return valor[i] 
         }
      });
  }

// banderaPorPais(banderas,"Italy")

// //Buscador por Atletas
const searchButtonAthletes = document.getElementById("search-btn-atletas");
if (searchButtonAthletes) {
  searchButtonAthletes.addEventListener("click", function () {
    //console.log(event.target.id)
    athletcWinner(data);
  });
}

//Para buscar atletas cada vez que presiono una tecla en el Search
const searchAthletes = document.getElementById("search_atletas");
if (searchAthletes) {
  searchAthletes.addEventListener("keyup", function () {
    searchButtonAthletes.click();
  });
}

//Para realizar mediante el Select ordenar A-Z & Z-A
const filtroAz = document.getElementById("filtroAz");
if (filtroAz) {
  filtroAz.addEventListener("change", () => {
    athletcWinner(ordenar(data, filtroAz.value));
  });
}

/******************Aqui comienza la pantalla de Estadistica*************/

// Realizar grafica de mapamundi
const objPaises={}

data.forEach((pais) => {
    const team = pais.team.split('-')

    if(objPaises[team[0]]){
        objPaises[team[0]] += 1
    } else { /// si el pais no existe 
        objPaises[team[0]] = 1
    }
})
const paisesMedallas = Object.entries(objPaises)

paisesMedallas.unshift(['Pais', 'Medallas'])


// grafica de geoChart
if (typeof google !== 'undefined') {
    
    google.charts.load('current', {
      'packages':['geochart'],
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {

      var data = google.visualization.arrayToDataTable(paisesMedallas);

      var options = {};

      var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

      chart.draw(data, options);
  }
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
// function medallas(data,valor){
//     let result = [];
//     const elementExist = (data, nombre) => {
//         let i = 0;
//         while (i < data.length) {
//           if (data[i].name == nombre) return i;
//           i++;
//         }
//         return false;
//       }
      
//       data.forEach((e) => {
//         let i = elementExist(result, e.name);
//         if (i === false) {
//           // Si no existe, creo agrego un nuevo objeto.
//           result.push({
//             "name": e.name,
//             "medal": [e.medal]
//           });
//         } else {
//           // Si el ya existe agrego el nuevo elemento a el array valor.
//           result[i].medal.push(e.medal);
//         }
//       });
//       //console.log(result);
//       return result


// }

// medallas(data,"Sebastian Brendel")


