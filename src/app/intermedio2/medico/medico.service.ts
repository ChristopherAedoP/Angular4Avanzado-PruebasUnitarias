import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MedicoService {
  constructor(public _http: HttpClient) {}

  getMedicos() {
    return this._http.get('......');
  }
}
