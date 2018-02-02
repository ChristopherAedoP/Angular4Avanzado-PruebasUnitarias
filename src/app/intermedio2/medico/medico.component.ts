import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../intermedio2/medico/medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {
  medicos: any[] = [];
  constructor(public _ms: MedicoService) {}

  ngOnInit() {}

  saludarMedico(nombre: string) {
    return `Hola ${nombre}, Buen dia!`;
  }

  obtenerMedicos() {
    this._ms.getMedicos().subscribe((medicos: any[]) => (this.medicos = medicos));
  }
}
