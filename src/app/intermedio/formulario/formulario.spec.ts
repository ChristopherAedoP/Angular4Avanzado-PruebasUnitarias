import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';

describe('Formularios', () => {
  let componente: FormularioRegister;

  beforeEach(() => {
    componente = new FormularioRegister(new FormBuilder());
  });

  it('- Debe crear un formulario con dos campos, email y password', () => {
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
  });

  it('- El email de ser obligatorio', () => {
    const control = componente.form.get('email');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });

  it('- El email de ser un correo valido', () => {
    const control = componente.form.get('email');

    control.setValue('correo@correo.com');

    expect(control.valid).toBeTruthy();
  });
});
