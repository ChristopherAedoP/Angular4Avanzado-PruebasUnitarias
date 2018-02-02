import { obtenerRobots } from './arreglos';

xdescribe('Pruebas de arreglos', () => {
  it('Debe retornar almenos 3 robots', () => {
    const res = obtenerRobots();

    expect(res.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe debe de existir megaman y ultron', () => {
    const res = obtenerRobots();

    expect(res).toContain('MegaMan');
    expect(res).toContain('Ultron');
  });
});
