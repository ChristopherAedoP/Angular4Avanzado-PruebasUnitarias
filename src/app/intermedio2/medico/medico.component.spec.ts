import { MedicoService } from './medico.service';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { HttpClientModule } from '@angular/common/http';

describe('Medico Component', () => {
  let componente: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [MedicoService],
      imports: [HttpClientModule]
    });

    fixture = TestBed.createComponent(MedicoComponent);

    componente = fixture.componentInstance;
  });

  it('Debe de crearse el componente', () => {
    expect(componente).toBeTruthy();
  });

  it('Debe de retorna el nombre del medico', () => {
    const nombre = 'Mario';
    const res = componente.saludarMedico(nombre);
    expect(res).toContain(nombre);
  });
});
