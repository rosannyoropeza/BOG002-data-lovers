# **_DL JUEGOS OLIMPICOS RIO 2016_**

## Descripción
***DL Juegos Olimpicos Río 2016*** Es una página web donde se muestra información referente a los juegos olimpicos que fueron celebrado en la ciudad de Río de Janeiro, Brasil. 

Y nace de la necesidad de los usuarios de conocer información relevante sobre los atletas olímpicos, como son: sus nombres, países que representaron y especialidades deportivas en las cuales participaron. Además, de conocer  cuales y en cuantos deportes compitieron, con sus respectivas disciplinas.

 Adicionalmente, para nuestros usuarios es importante saber los nombres y la cantidad de medallas ganadas por cada país.  Asimismo,  requieren información sobre quiénes son los atletas que ganaron medallas en diferentes disciplinas y cuantas fueron.Y  por último, es importante para los usuarios conocer cuántos hombres y mujeres participaron en los ***Juegos Olímpicos de Río de Janeiro 2016***.

Para conocer nuestras historias de usuarios pueden visitar el siguiente enlace de Trello, donde encontrarás las cuatro (4) historias que fueron desarrolladas con sus respectivos criterios de aceptación, definidas de acuerdo a las necesidades de los usuario.
[Enlace a Trello](https://trello.com/b/wL31ojza/dl-juegos-olimpicos)


## Diseño de la página web

Para el diseño de la página web, se inició con un ***prototipo de baja  fidelidad***, en el cual se realizo un boceto en papel y lápiz. Como se muestra a continuación. 

![Prototipado inicial](/src/assets/Prototipado_baja_fidelidad.png)

Para esta etapa, se plasmaron las ideas que de acuerdo  a los requerimientos de las historias de usuarios darán solución a los problemas planteados. 

Después de haber obtenido el feedback del prototipo inicial, se pasó a la siguiente etapa ***prototipo de alta fidelidad***, donde representamos la solución de las historias de usuario a través del editor de gráficos vectoriales y creación de prototipos ***Figma***, en esta etapa se eligieron los recursos visuales a usar, el tipo y fuente de letras que se emplearon, los códigos de colores para crear las combinaciones implementadas, se seleccionó la librería de ***Google Charts*** para la creación de las estadísticas y se profundizó en las funcionalidades  para ser más  agradable a la vista la interfaz.

[Enlace a Figma](https://www.figma.com/file/Nz2chBY4YhgOEPnmEMtbAN/JUEGOS-OLIMPICOS--RIO-2016?node-id=277%3A5)

## Tests de usabilidad

Para la realización del ***test de usabilidad*** decidimos presentar nuestro proyecto a tres(03) usuarios y de acuerdo a su interacción con el producto, recogimos las siguientes recomendaciones para mejorar el diseño y la experiencia de usuario.

1.- En el ***módulo deportes de la página web***, indicaron que al realizar una búsqueda referente a un deporte en específico, este mostraba como resultado todos las disciplinas que participaron en los Juegos de Río 2016. 

Lo que imposibilitaba tener una buena experiencia de usuario. Razón por la cual, se decidió hacer un ***select*** donde se guarda de forma automática solo el resultado del deporte consultado. Lo cual permite que al realizar la consulta te dará como resultado solo los ganadores de este evento deportivo.  

2.- En el ***módulo deportes y atletas de la página web***, señalaron que al realizar la búsqueda de la información éste mostraba resultado sólo después de realizar el click en el botón destinado para ello, imposibilitando tener una interacción más dinámica con el producto.

Para solucionar esta experiencia se diseñó un ***buscador con búsqueda inteligente e interactiva***, donde a medida que el usuario va escribiendo automáticamente se muestra en pantalla los resultados.

3.- En el ***módulo de atletas de la página web***, indicaron que al dar click sobre la ficha del atleta este se desplegaba en una nueva ventana para solo mostrar la información referente a: nombre, imagen, bandera, país,medallas y especialidad.

Para solucionar esta experiencia se diseñó ***la tarjeta 3D***, lo cual permite que al colocar el cursor sobre la tarjeta del atleta, ésta pueda girar y mostrar la información de los datos del atleta consultado sin necesidad de hacer click.   

4.- En el ***módulo de estadísticas de la página web***,indicaron que no veían necesario tener un buscador para consultar información de datos referente a las medallas ganadas por países,atletas que ganaron medallas en diferentes disciplinas, y cuántos hombres y mujeres participaron en los ***Juegos Olímpicos de Río de Janeiro 2016***.

Para mejorar esta experiencia de usuario se diseñaron gráficas con ***Google Charts*** y se eliminó el buscador.

# Instalación y configuración del proyecto

1. <a href="https://nodejs.org/es/download/current/">Instalar  Node.js versión v13.11.0</a>
2. Abrir  el editor de texto <a href="https://nodejs.org/es/download/current/">(Visual Studio Code)</a>.
3. Realiza un  ***fork*** en GitHub de este repositorio que contiene el *boilerplate*.
4. Ejecuta en la terminal el comando ***(https://github.com/leysanchezb92/BOG002-data-lovers.git)***.
5. Cierra el editor.
6. Desde la carpeta BOG002-data-lovers realiza un click derecho, abrir con editor de texto (Visual Studio Code).
7. Desde Visual Studio Code abre la terminal ***bash*** para ejecutar el programa. 
8. Usa el comando ***npm start*** para arrancar el servidor web. 
9. Dirígete a http://localhost:5000 en tu navegador, para ver la interfaz del programa en el navegador. 


# Objetivos de aprendizaje

El objetivo principal de este proyecto es que aprendas a diseñar y construir una interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el usuario necesita.

### HTML y CSS

- [x] Uso de HTML semántico.
- [x] Uso de selectores de CSS.
- [x] Construir tu aplicación respetando el diseño realizado (maquetación).
- [x] Uso de flexbox en CSS.
### DOM y Web APIs

- [x] Uso de selectores del DOM.
- [x] Manejo de eventos del DOM.
- [x] Manipulación dinámica del DOM. (appendChild |createElement |      createTextNode| innerHTML | textContent | etc.)
### JavaScript

- [x] Uso de condicionales (if-else | switch | operador ternario)
- [] Uso de bucles (for | for..in | for..of | while)
- [x] Uso de funciones (parámetros | argumentos | valor de retorno)
- [x] Manipular arrays (filter | map | sort | reduce)
- [x] Manipular objects (key | value)
- [x] Uso ES modules (import | export)
- [x] Diferenciar entre expression y statements.
- [x] Diferenciar entre tipos de datos primitivos y no primitivos.
### Testing

- [x] Testeo unitario.
### Estructura del código y guía de estilo

- [x] Organizar y dividir el código en módulos (Modularización)
- [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
- [x] Uso de linter (ESLINT)

### Git y GitHub

- [x] Uso de comandos de git (add | commit | pull | status | push)
- [x] Manejo de repositorios de GitHub (clone | fork | gh-pages)
- [x] Colaboración en Github (branches | pull requests | |tags)

### UX

- [x] Diseñar la aplicación pensando y entendiendo al usuario.
- [x] Crear prototipos para obtener feedback e iterar.
- [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
- [x] Planear y ejecutar tests de usabilidad.

Checklist:
 - [x] Usa VanillaJS.
 - [x] No hace uso de this.
 - [x] Pasa linter (npm run pretest)
 - [x] Pasa tests (npm test)
 - [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y   lines y branches.
 - [x] Incluye Definición del producto clara e informativa en README.md.
 - [x] Incluye historias de usuario en README.md.
 - [x] Incluye sketch de la solución (prototipo de baja fidelidad) en README.md.
 - [x] Incluye Diseño de la Interfaz de Usuario (prototipo de alta fidelidad) en README.md.
 - [x] Incluye link a Figma en README.md.
 - [x] Incluye el listado de problemas que detectaste a través de tests de usabilidad en el README.md.
 - [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
 - [x] UI: Permite ordenar data por uno o más campos (asc y desc).
 - [x] UI: Permite filtrar data en base a una condición.
 - [x] UI: Es responsive.