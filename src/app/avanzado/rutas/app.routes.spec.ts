import { MedicoComponent } from '../../intermedio2/medico/medico.component';
import { RUTAS } from './app.router';

describe('Rutas Principales', () => {
  it('debe de existir la ruta /medico/id', () => {
    expect(RUTAS).toContain({
      path: 'medico/:id',
      component: MedicoComponent
    });
  });
});
