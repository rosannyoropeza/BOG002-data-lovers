import { listaDeportes,filterData,listaEventos } from '../src/data.js';

describe('listaDeportes funcion para filtrar deportes', () => {
  it('Esta funcion retorna un array de deportes', () => {
    const filtro = listaDeportes([],"")
    expect(filtro).toStrictEqual([]);
  });
  const mockArray=[{sport:'tennis'},{sport:'futbol'},{sport:'basquetbol'},{sport:'taekondo'}]
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
});

describe('filterData funcion para filtrar deportes en el buscador',() =>{
  it('Esta funcion retorna un array con los deportes participantes', () =>{
    const deportes= filterData([],"")
    expect(deportes).toStrictEqual([])
  })
})

describe('listaEventos funcion para filtrar eventos y crear option del select',()=>{
  it ('Esta funcion retorna un array de eventos',()=>{
    const eventos=listaEventos([])
    expect(eventos).toStrictEqual([])
  })
  const mockEvento=[{event:"Gymnastics Men's Horse Vault"},{event:"Basketball Men's Basketball"},{event:"Gymnastics Men's Horse Vault"},{event:"Athletics Women's Shot Put"}]
  it('Probar que el evento no se repita',()=>{
    const eventos=listaEventos(mockEvento)
    expect(eventos).toMatchObject(["Gymnastics Men's Horse Vault","Basketball Men's Basketball","Athletics Women's Shot Put"])
  })
})