import { mensaje } from './string';

describe('Pruebas de strings', () => {
  it('Debe de regresar un string', () => {
    const resp = mensaje('Christopher');

    expect(typeof resp).toBe('string');
  });

  it('Debe de regresar un saludo con el nombre enviado', () => {
    const nombre = 'juan';
    const resp = mensaje(nombre);

    expect(resp).toContain(nombre);
  });
});
