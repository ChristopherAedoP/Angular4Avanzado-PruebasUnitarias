import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Incremendator Component', () => {
  let componente: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    componente = fixture.componentInstance;
  });

  it('- Debe de mostrar la leyenda', () => {
    componente.leyenda = 'Progreso de carga';
    fixture.detectChanges(); // activar la deteccion de cambios.
    const elem: HTMLElement = fixture.debugElement.query(By.css('h3'))
      .nativeElement;

    expect(elem.innerHTML).toContain('Progreso de carga');
  });

  it('- Debe de Mostrar en el input el valor del progreso', () => {
    componente.cambiarValor(5);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input'));
      const elem = input.nativeElement;

      // console.log(elem);
      expect(elem.value).toBe('55');
    });
  });

  it('- Debe incrementar/decrementar en 5, con un click en el boton', () => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

    botones[0].triggerEventHandler('click', null);

    expect(componente.progreso).toBe(45);

    botones[1].triggerEventHandler('click', null);

    expect(componente.progreso).toBe(50);
    // console.log(botones);
  });

  it('en el titulo del componentes debe mostrar el progreso', () => {
    const elem: HTMLElement = fixture.debugElement.query(By.css('h3'))
      .nativeElement;
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

    botones[0].triggerEventHandler('click', null);
    fixture.detectChanges(); // activar la deteccion de cambios.

    expect(elem.innerHTML).toContain('45');
  });
});
