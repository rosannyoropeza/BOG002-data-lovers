//estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};*/

export const banderas = fetch("./data/banderas.json")
  .then(function (response){
    console.log(response);
  return response.json()
})
.then(function(data){
  //traer todas las banderas que tengan paises que inician con A
  var result=data.filter(bandera=> bandera.NOC.startsWith("A"));  
  for (let i = 0; i < result.length; i++) {
      console.log(data[i].PAIS)
  }

  for (let i = 0; i < data.length; i++) {


      let codigo_pais =  data[i].NOC;
      let bandera_url =  data[i].URL;
      let elem  = document.getElementById(codigo_pais)

      if (codigo_pais[0]=='A')
      console.log(codigo_pais)

      var imagen = document.createElement("img");
      imagen.src = bandera_url;
      imagen.width=32;
      imagen.height=32;

      if (elem)
      elem.prepend(imagen);
  }

});;

