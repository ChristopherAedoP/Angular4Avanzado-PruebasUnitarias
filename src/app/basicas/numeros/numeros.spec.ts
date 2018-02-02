import { incremetar } from './numeros';

describe('Pruebas de numeros', () => {
  it('debe retornar 100, si el numero ingresado es mayor a 100', () => {
    const resp = incremetar(300);

    expect(resp).toBe(100);
  });

  it('debe retornar el numeros ingresado +1, si no es mayor a 100', () => {
    const resp = incremetar(50);

    expect(resp).toBe(51);
  });
});
