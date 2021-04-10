// import { data } from './data.js';

// import data from './data/lol/lol.js';
//import banderas from './data/banderas.json';
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
  unSoloAtleta,
  estadisticaHombreMujer,
} from "./data.js";

function principal() {
  pintarDeportes();
  athletcWinner(data);
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
  // let nombreDeporte= document.getElementById('search').value;
  const filtradoPorEvento = filterEvento(data, option);
  const listaDeportistas = document.getElementById("listaDeportistas");
  listaDeportistas.innerHTML = ""; // Vaciamos la lista para reiniciar el contenido y evitar duplicados
  filtradoPorEvento.forEach((nombre) => {
    const lista = document.createElement("p");
    const texto = document.createTextNode(`${nombre.name} - ${nombre.event}`);
    lista.appendChild(texto);
    listaDeportistas.insertAdjacentElement("beforeend", lista);
  });
  listaDeportistas.classList.remove("hide");
}

/***********Aqui comienza la pantalla de Atletas***********/

//Funcion para pintar los Atletas
function athletcWinner(ordenar) {
  let unicos = atletasUnicos(ordenar);
  let searchAtletas = document.getElementById("search_atletas").value;
  if (searchAtletas != "") {
    //para no realizar peticiones si esta vacio
    unicos = filterAtletas(unicos, searchAtletas); //guardame los atletas filtrados
  }

  let listaAtletas = document.getElementById("listaAtletas");
  if (listaAtletas) {
    listaAtletas.innerHTML = "";
    //Para crear la Lista de los atletas
    unicos.forEach(function (deportista) {
      const imagen = imagenDeportista(deportista.image);
     
      const contenedorDeportista = crearContenedorDeportista(deportista,imagen) 

      listaAtletas.insertAdjacentElement("beforeend", contenedorDeportista);
    });
  }
}

function imagenDeportista(img){
    const imagen = document.createElement("img");
    imagen.classList.add("imagenDeportista");
    imagen.setAttribute("src", img);
    imagen.setAttribute(
      "onError",
      'this.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2dq65TmA2UkeniEcWvW_NI-7UqmNSf01xFQ&usqp=CAU"'
    );

    return imagen;
}

function crearContenedorDeportista(deportista,imagen) {
    const contenedorDeportista = document.createElement("div");
    contenedorDeportista.classList.add("deportista");
    contenedorDeportista.setAttribute("id", deportista.name);

    contenedorDeportista.addEventListener("click", function () {
      mostrarFicha(deportista);
    });

    const h3 = document.createElement("h3");
    const texto = document.createTextNode(`${deportista.name}`);
    h3.appendChild(texto);
    const p = document.createElement("p");
    const textoParr = document.createTextNode(
      `${deportista.sport} - ${deportista.noc}`
    );
    p.appendChild(textoParr);
    contenedorDeportista.insertAdjacentElement("beforeend", imagen);
    contenedorDeportista.insertAdjacentElement("beforeend", h3);
    contenedorDeportista.insertAdjacentElement("beforeend", p);

    return contenedorDeportista;
}

//Buscador por Atletas
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

function mostrarFicha(atletaUnico) {
  const tarjetasAtletas = document.querySelector("#tarjetasAtletas");
  console.log("soy atleta unico", atletaUnico);
  if (tarjetasAtletas != "") {
    //para no realizar peticiones si esta vacio
    //console.log("soy nombre", nombre)
    tarjetasAtletas.innerHTML = ""; // Vaciamos la lista para reiniciar el contenido y evitar duplicados
    //atletaUnico.forEach(function(atletaFicha){
    const contenedorFichaAtleta = document.createElement("div");
    contenedorFichaAtleta.classList.add("FichaDeAtleta");
    const imagenAtleta = document.createElement("img");
    imagenAtleta.classList.add("imagenDelAtleta");
    imagenAtleta.setAttribute("src", atletaUnico);
    imagenAtleta.setAttribute(
      "onError",
      'this.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2dq65TmA2UkeniEcWvW_NI-7UqmNSf01xFQ&usqp=CAU"'
    );
    const h3 = document.createElement("h3");
    const nombredelAtleta = document.createTextNode(`${atletaUnico.name}`);
    const p = document.createElement("p");
    const pais = document.createTextNode(`${atletaUnico.team}`);
    const parr = document.createElement("p");
    const medal = document.createTextNode("Medal");
    h3.appendChild(nombredelAtleta);
    p.appendChild(pais);
    parr.appendChild(medal);
    contenedorFichaAtleta.insertAdjacentElement("beforeend", imagenAtleta);
    contenedorFichaAtleta.insertAdjacentElement("beforeend", h3);
    contenedorFichaAtleta.insertAdjacentElement("beforeend", p);
    contenedorFichaAtleta.insertAdjacentElement("beforeend", parr);
    tarjetasAtletas.insertAdjacentElement("beforeend", contenedorFichaAtleta);
  }
}

/******************Aqui comienza la pantalla de Estadistica*************/

const piechart = document.getElementById("piechart");
if (piechart != "") {
  function estadistica() {
    let resultados = estadisticaHombreMujer(data);
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Atletas", "Medallas"],
        ["Mujeres", resultados["Mujeres"]],
        ["Hombres", resultados["Hombres"]],
      ]);

      var options = {
        title:
          "Medallas ganadas por hombres y mujeres que participaron en los juegos de Rio2016.",
        width: "100%",
        height: "500px",
      };

      var chart = new google.visualization.PieChart(
        document.getElementById("piechart")
      );

      chart.draw(data, options);
    }
  }
}
