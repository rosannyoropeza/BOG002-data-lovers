import { listaDeportes,filterData,listaEventos, filterEvento,filterAtletas,atletasUnicos,ordenar } from '../src/data.js';

const mockArray=[{sport:'tennis'},{sport:'futbol'},{sport:'basquetbol'},{sport:'taekondo'}]
describe('listaDeportes funcion para filtrar deportes', () => {
  it('Esta funcion retorna un array de deportes', () => {
    const filtro = listaDeportes([],"")
    expect(filtro).toStrictEqual([]);
  });
  it('Probar que filtro segun el valor dado',() => {
    const filtro = listaDeportes(mockArray,"f")
    expect(filtro).toMatchObject(["futbol"])
    const filtro2 = listaDeportes(mockArray,"t")
    expect(filtro2).toMatchObject(["tennis","taekondo"])
  })
  it('Probar cuando no se envia valor a filtrar', () => {
    const filtro = listaDeportes(mockArray)
    expect(filtro).toMatchObject(["tennis","futbol","basquetbol","taekondo"])
  })
  it('Probar si encuentra el valor filtrado', () => {
    const mock = [{sport:'tennis'},{sport:'tennis'},{sport:'basquetbol'},{sport:'taekondo'}]
    const filtro = listaDeportes(mock)
    expect(filtro).toHaveLength(3)
  })
});

describe('filterData funcion para filtrar deportes en el buscador',() =>{
  it('Esta funcion retorna un array con los deportes participantes', () =>{
    const deportes= filterData(mockArray,"T")
    expect(deportes).toHaveLength(2)
  })
  
})

const mockEvento=[{event:"Gymnastics Men's Horse Vault"},{event:"Basketball Men's Basketball"},{event:"Gymnastics Men's Horse Vault"},{event:"Athletics Women's Shot Put"}]
describe('listaEventos funcion para filtrar eventos y crear option del select',()=>{
  it ('Esta funcion retorna un array de eventos',()=>{
    const eventos=listaEventos([])
    expect(eventos).toStrictEqual([])
  })
  it('Probar que el evento no se repita',()=>{
    const eventos=listaEventos(mockEvento)
    expect(eventos).toMatchObject(["Gymnastics Men's Horse Vault","Basketball Men's Basketball","Athletics Women's Shot Put"])
  })
})

describe('filterEvento funcion para traer los atletas participantes en el evento ', () => {
  it('Esta funcion retorna un array de atletas y su deporte', () =>{
    const mockAtletas = [{name:'Rosanny Oropeza', event:'Gymnastics'},{name:'Angie Cortes', event:'Swimming'},{name:'Leidy Sanchez',event:'Soccer'}]
    const atletas= filterEvento(mockAtletas,"Gymnastics")
    expect (atletas).toHaveLength(1)
  })
})

describe('filterAtletas funcion para traer los atletas filtrados', ()=>{
  it('Esta funcion retorna un array de atletas',() =>{
    const mockAtletas = [{name:'Rosanny Oropeza', team:'Venezuela'},{name:'Angie Cortes', team:'Colombia'},{name:'Leidy Sanchez',team:'Uruguay'}]
    const arregloAtleta=filterAtletas(mockAtletas,"r")
    expect (arregloAtleta).toStrictEqual([{'name':'Rosanny Oropeza', 'team':'Venezuela'}])
  })
})

describe('atletasUnicos funcion que trae atletas no repetidos', ()=>{
  it('Esta funcion retorna un array de atletas sin duplicados',()=>{
    const mockAtletasDuplicados = [{name:'Rosanny Oropeza'},{name:'Angie Cortes'},{name:'Leidy Sanchez'},{name:'Rosanny Oropeza'}]
    const arregloAtletaUnico=atletasUnicos(mockAtletasDuplicados)
    expect (arregloAtletaUnico).toMatchObject([{name:'Rosanny Oropeza'},{name:'Angie Cortes'},{name:'Leidy Sanchez'}]) 
  })
})

describe('ordenar funcion que trae la lista de atletas ordenados de la a-z o z-a', () =>{
  const mockOrden= [{name:'Rosanny Oropeza'},{name:'Angie Cortes'},{name:'Leidy Sanchez'}]
  it('Esta funcion retorna un array de atletas ordenados z-a', () =>{
    const ordenarNombres=ordenar(mockOrden,'z-a')
    expect(ordenarNombres).toStrictEqual([{"name": "Rosanny Oropeza"},{'name':'Leidy Sanchez'},{'name':'Angie Cortes'}])
  })
  it('Esta funcion retorna un array de atletas ordenado de la a-z', () =>{
    const ordenarNombres=ordenar(mockOrden,'a-z')
    expect(ordenarNombres).toStrictEqual([{"name": "Angie Cortes"},{'name':'Leidy Sanchez'},{'name':'Rosanny Oropeza'}])
  })
})