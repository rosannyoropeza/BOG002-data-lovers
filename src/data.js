/**
 * 
 * @param {Array} dataOriginal 
 * @returns {Array}
 */
export function listaDeportes(dataOriginal){
  let newSport = [];
  dataOriginal.forEach(function (deporte) {
    if (!newSport.includes(deporte.sport)) {
      newSport.push(deporte.sport);
    }
  });
  return newSport
}

/**
 * 
 * @param {Array} data 
 * @param {String} valor 
 * @returns {Array}
 */
export function filterData(data,valor){
  return data.filter((deporte)=>deporte.sport===valor)
}


// funcion para filtrar deporte.
// export function filtradoDeportistas(dataOriginal){
//   const deporteFiltrado= dataOriginal.filter(function(word){
//     if(word.sport===nombreDeporte){
    
//       console.log(word.name, word.team)
         
//     } 
//   })
//   return deporteFiltrado
// }


// export const data = {
//   deporte:(nombreDeporte) => {
//     let resultado = listaDeportes().filter(word => word === nombreDeporte)
//     console.log('vengo de data', resultado)
//   }
// }
// import data  from './data/athletes/atletasImg.js';


// export const data= {
//   deportes:function(sport){
//     return fetch("./data/athletes/atletasImg.json")
//       .then(function(response){
//         return response.json()
//       })
//       .then(function(data){
//         let newSport=[]
//         data.forEach(function(deporte){
//           newSport.push(deporte.sport)
//         })
//         const dataArr= new Set(newSport)
//         let result= [...dataArr]
//         return result
//       })
//   },
// }

// export const banderas = fetch("./data/banderas.json")
//   .then(function (response){
//     console.log(response);
//   return response.json()
// })
// .then(function(data){
//   //traer todas las banderas que tengan paises que inician con A
//   var result=data.filter(bandera=> bandera.NOC.startsWith("A"));  
//   for (let i = 0; i < result.length; i++) {
//       console.log(data[i].PAIS)
//   }

//   for (let i = 0; i < data.length; i++) {


//       let codigo_pais =  data[i].NOC;
//       let bandera_url =  data[i].URL;
//       let elem  = document.getElementById(codigo_pais)

//       if (codigo_pais[0]=='A')
//       console.log(codigo_pais)

//       var imagen = document.createElement("img");
//       imagen.src = bandera_url;
//       imagen.width=32;
//       imagen.height=32;

//       if (elem)
//       elem.prepend(imagen);
//   }

// });;

