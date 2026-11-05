import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../yaml/model';

@Injectable({
  providedIn: 'root',
})
export class ServiceInventory {

  private baseUrl = /* 'http://localhost:3000/api/inventories' */ '/api/inventories'
  constructor(private http:HttpClient){

  }
/************CRUD MODELS**********************/
getModel(id:string): Observable<Model>{
      return this.http.get<Model>(`${this.baseUrl}/modello?id=${id}`)
  }
getModelList(): Observable<Model[]>{
    return this.http.get<Model[]>(`${this.baseUrl}/modello`)
  }
createModel(body:Model): Observable<Model>{
    return this.http.post<Model>(`${this.baseUrl}/modello`,body)
  }
updateModel(id:string, body:Model): Observable<Model>{
    return this.http.post<Model>(`${this.baseUrl}/modello/:${id}`,body)
  }
}