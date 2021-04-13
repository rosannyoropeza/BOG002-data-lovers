import banderas from './data/banderas.js';
import data from "./data/athletes/atletasImg.js";
import {
  listaDeportes,
  filterData,
  listaEventos,
  filterEvento,
  filterAtletas,
  ordenar,
  atletasUnicos,
//   banderaPais,
} from "./data.js";

function principal() {
  pintarDeportes();
  athleticsWinner(data);
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

function pintarAtletas(option) {
  let tablaEvento=document.getElementById("tablaEvento2")
  const filtradoPorEvento = filterEvento(data, option);
  const listaDeportistas = document.getElementById("listaDeportistas");
 
    filtradoPorEvento.forEach((evento,i) => {
      if (evento.medal ==="Gold"){
        filtradoPorEvento[i].posicion=1
      }
      if (evento.medal ==="Silver"){
        filtradoPorEvento[i].posicion=2
      }
      if (evento.medal ==="Bronze"){
        filtradoPorEvento[i].posicion=3
      }
    })
  
    filtradoPorEvento.sort((a,b)=> a.posicion > b.posicion ? 1 : -1);

  filtradoPorEvento.forEach((evento) => {
    const contenedorAtleta = crearContenedorAtleta(evento);
    tablaEvento.insertAdjacentHTML('beforeend', contenedorAtleta);
  })
  listaDeportistas.classList.remove("hide");
  return listaDeportistas
}

function crearContenedorAtleta(evento) {
  const tabla = ` 
    <tr>
        <td>${evento.posicion}</td>
        <td>${evento.name}</td>
        <td>${evento.medal}</td>
    </tr>    
    `;
  return tabla;
} 

/***********Aqui comienza la pantalla de Atletas***********/

//Funcion para pintar los Atletas
function athleticsWinner(ordenar) {
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
  let bandera=banderaPorPais(banderas,deportista.team)
    const card = `
    <div class="tarjetaDeporte">
      <div class="tarjetaDeporteInner">
        <div class="tarjetaDeporteFrontal">
          <img class="imagenDeportista" src="${deportista.image}" onerror="this.onerror=null;this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2dq65TmA2UkeniEcWvW_NI-7UqmNSf01xFQ&usqp=CAU';">
          <h3>${deportista.name}</h3>
          <p>${deportista.sport} - ${deportista.noc}</p>
        </div>

        <div class="tarjetaDeporteReverso">
          <div id="nombreAtleta"><h4>${deportista.name}</h4></div>
          <img class="banderaPais" src=${bandera}>
          <p class="team">${deportista.team}</p> 
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
    </div>
    `;

  return card;
}

function banderaPorPais(dataBandera,pais) {
  let bandera=""
  dataBandera.forEach(function(objBandera) {
      if (objBandera.team===pais){
        bandera=objBandera.url
      }
  });
  return bandera
}

// banderaPorPais(banderas,"Italy")

// //Buscador por Atletas
const searchButtonAthletes = document.getElementById("search-btn-atletas");
if (searchButtonAthletes) {
  searchButtonAthletes.addEventListener("click", function () {
    //console.log(event.target.id)
    athleticsWinner(data);
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
    athleticsWinner(ordenar(data, filtroAz.value));
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
if (document.getElementById('regions_div')) {
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
