import { Component, OnInit } from '@angular/core';

import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-medico',
  templateUrl: './router-medico.component.html',
  styles: []
})
export class RouterMedicoComponent implements OnInit {
  id: string;
  constructor(public _router: Router, public _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  guardarMedico() {
    this._router.navigate(['medico', '123']);
  }
}
