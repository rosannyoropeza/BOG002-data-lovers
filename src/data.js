/**
 * //Filtro para deportes participantes y crear select
 * @param {Array} dataOriginal
 * @param {String} filterDeporte
 * @returns {Array}
 */
export function listaDeportes(dataOriginal, filterDeporte = ''){
  let newSport = [];
  dataOriginal.forEach(function (deporte) {
    
    if (filterDeporte.length>0){
      if (!newSport.includes(deporte.sport) && deporte.sport.toUpperCase().startsWith(filterDeporte.toUpperCase())) {
        newSport.push(deporte.sport);
      }
    } else {
      if (!newSport.includes(deporte.sport)) {
        newSport.push(deporte.sport);
      }
    }
  });
  return newSport
}

/**
 * //filtro de string para el buscador
 * @param {Array} data 
 * @param {String} valor 
 * @returns {Array}
 */
export function filterData(data,valor){
  return data.filter((deporte)=>deporte.sport.toUpperCase().startsWith(valor.toUpperCase()))
}

/**
 * // Filtro para eventos participantes segun deporte 
 * * 
 * @param {Array} eventosFiltrados//Recibe un array de eventos filtrados por deportes
 * @returns {Array}
 */
//funcion para traer eventos y crear option del select
export function listaEventos(eventosFiltrados){
  let arrayEventos=[]
  eventosFiltrados.forEach((evento)=>{
  if(!arrayEventos.includes(evento.event)){
      arrayEventos.push(evento.event)
      }
  })
  return arrayEventos
}

/**
 * // filtro para traer los atletas participantes en el evento
 * @param {Array} data 
 * @param {String} valor 
 * @returns {Array}
 */
 export function filterEvento(data,valor){
  return data.filter((evento)=>evento.event===valor)
}

/** Para obtener los atletas y crear su ficha
 * 
 * @param {Array} data 
 * @param {String} nombreAtleta
 * @returns {Array}
 */
 export function filterAtletas(data,nombreAtleta){
  return  data.filter((atletas)=> atletas.name.toUpperCase().startsWith(nombreAtleta.toUpperCase()) || atletas.team.toUpperCase().startsWith(nombreAtleta.toUpperCase()))
}


/** Para obtener los atletas no duplicado
 * 
 * @param {Array} data 
 * @param {String} valor 
 * @returns {Array}
 */
 export function atletasUnicos(data){
  let deportistasNoDuplicados=[]
  //quitamos duplicados colocando como indice el mismo nombre para que se reemplace
  data.forEach((deportista)=>{
    deportistasNoDuplicados[deportista.name] = deportista;
  })
  deportistasNoDuplicados =  Object.values(deportistasNoDuplicados); // re-conversión indices del Array sin duplicados
  //console.log(deportistasNoDuplicados)
  return deportistasNoDuplicados;
}

/** Para obtener ordenar los atletas de la A-Z
 * 
 * @param {Array} data 
 * @param {String} valor 
 * @returns {Array}
 */
 export function ordenar (data,select){
  let ordenarAtletas= data.sort((a,b)=> a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
  if (select === 'z-a') {
    ordenarAtletas= ordenarAtletas.reverse()
    //console.log("orden",ordenarAtletas)
  } 
  return ordenarAtletas;
}

// /** Para obtener un solo atleta
//  * 
//  * @param {Array} data 
//  * @param {String} valor 
//  * @returns {Array}
//  */
//  export function unSoloAtleta (data,valor){
//   return data.reduce((acc,val)=>{
//     const nombreAtleta=val.name
//     if (nombreAtleta === valor) {
//         console.log("soy acumulador",val)
//       return val;
//     }
//   })
// }

// /** Para obtener estadisticas de mujeres y hombres que ganaron medallas en participantes en rio2016
//   * 
//   * @param {Array} data 
//   * @returns {Array}
//   */
//   export function estadisticaHombreMujer(data){
//   const dataMujer=data.map(genero=>{
//       if(genero.gender=='F'){
//         genero.gender=1
//         return genero
//       } 
//       else(genero.gender=='M')
//         genero.gender=0
//         return genero
      
        
//   }); console.log(dataMujer)
  
//   const mujer=dataMujer.reduce((acc,cur)=>{
//       return acc+=cur.gender
//     }, 0);
//     console.log("soy mujer", mujer)
//     return mujer 
// } 


/** Para obtener estadisticas de mujeres y hombres que ganaron medallas en participantes en rio2016
  * 
  * @param {Array} data 
  * @returns {Array}
  */
 export function estadisticaHombreMujer(data){
    const conteoDegenero=[]
    //conteoDegenero['Atletas']='Medallas';
    let mujer=0;
    let hombre=0;

    data.forEach((genero)=>{
      switch (genero.gender) {
        case 'F':
          conteoDegenero['Mujeres']=mujer+=1     
          break;
      
        case 'M':
          conteoDegenero['Hombres']=hombre+=1    
          break;
        default:
          break;
      }
    })

    return conteoDegenero
}



// export function banderaPais(banderas,pais){
//   //traer todas las banderas que coincidan con el pais
//   var result=banderas.filter(banderaPais=> banderaPais.team==pais);  
//    for (let i = 0; i < result.length; i++) {
//        console.log(bandera[i].PAIS)
//   }

//  for (let i = 0; i < banderas.length; i++) {
//        let codigo_pais =  banderas[i].noc;
//        let bandera_url =  banderas[i].url;
//        let elem  = document.getElementById(codigo_pais)

//        if (codigo_pais[0]==pais){
//         console.log(codigo_pais)
//        }
//    }   

// };



