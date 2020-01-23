import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Convert } from '../model/convert';
import { Update } from '../model/update';
import { Response } from '../model/response';

@Injectable({
  providedIn: 'root'
})
export class TipocambioService {

  url = "http://localhost:8080/tipocambio";

  constructor(private http: HttpClient) { }

  convert(request: Convert) {
    return this.http.post<Response>(`${this.url}/convert`, request);
  }

  update(request: Update) {
    return this.http.post<Response>(`${this.url}/update`, request);
  }

}
