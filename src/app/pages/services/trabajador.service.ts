import { Injectable } from '@angular/core';
import {Trabajador} from '../models/trabajador';
import{HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, Subscription, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {
 url ='http://157.230.190.228/api-inversiones/';
  constructor(
    private http:HttpClient
  ) {}
  getTrabajadores(): Observable<Trabajador[]>{
    return this.http.get<Trabajador[]>(this.url+'wp-json/api/courses');
  }
}
