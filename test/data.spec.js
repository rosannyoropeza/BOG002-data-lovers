import { listaDeportes,filterData,listaEventos, filterEvento } from '../src/data.js';

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