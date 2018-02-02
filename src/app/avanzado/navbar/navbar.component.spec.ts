import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [NavbarComponent],
        imports: [RouterTestingModule.withRoutes([])]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de tener un link a pa pagina de medicos', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    const elementos = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref)
    );

    console.log(elementos);

    let existe = false;

    for (const elemento of elementos) {
      if (elemento.attributes['routerLink'] === '/medico') {
        existe = true;
        break;
      }
    }

    expect(existe).toBeTruthy();
  });
});
