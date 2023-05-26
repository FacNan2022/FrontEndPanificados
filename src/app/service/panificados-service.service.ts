import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/Persona';


@Injectable({
  providedIn: 'root'
})
export class PanificadosServiceService {

  url = "http://localhost:8080/"
  constructor(private http:HttpClient) { }

  public lista():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url + "Panificados/informacion");

  }

  public detalles(id:number):Observable<Persona>{
    return this.http.get<Persona>(this.url + `detalles/${id}`)
  }

  public create(persona: Persona):Observable<any>{
    return this.http.post<any>(this.url + "create", persona);

  }

  public update(id:number, persona: Persona):Observable<any>{
    return this.http.put<any>(this.url + `update/${id}`, persona);
  }
} 
