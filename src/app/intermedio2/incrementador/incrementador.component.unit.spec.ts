import { IncrementadorComponent } from './incrementador.component';
import { exec } from 'child_process';

describe('Ingrementador Component Unit', () => {
  let componente: IncrementadorComponent;
  beforeEach(() => (componente = new IncrementadorComponent()));
  it('No debe de pasar de 100 el progreso', () => {
    componente.progreso = 50;
    componente.cambiarValor(5);

    expect(componente.progreso).toBe(55);
  });
});
