import { listaDeportes } from '../src/data.js';

describe('listaDeportes funcion para filtrar deportes', () => {
  const mockArray=[{sport:'tennis'},{sport:'futbol'},{sport:'basquetbol'},{sport:'taekondo'}]
  it('Esa funcion retorna un array de deportes', () => {
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
});
