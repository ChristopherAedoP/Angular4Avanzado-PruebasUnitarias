import { Jugador } from './clase';

describe('Pruebas de Clase', () => {
  // const jugador = new Jugador();

  // beforeAll();
  // beforeEach();

  // afterAll();
  // afterEach();

  it('debe retornar 80 de hp, si recibe 20 de daño.', () => {
    const jugador = new Jugador();

    const resp = jugador.recibeDanio(20);

    expect(resp).toBe(80);
  });
  it('debe retornar 50 de hp, si recibe 50 de daño.', () => {
    const jugador = new Jugador();

    const resp = jugador.recibeDanio(50);

    expect(resp).toBe(50);
  });
  it('debe retornar 0 de hp, si recibe  100 o mas de daño.', () => {
    const jugador = new Jugador();

    const resp = jugador.recibeDanio(100);

    expect(resp).toBe(0);
  });
});
