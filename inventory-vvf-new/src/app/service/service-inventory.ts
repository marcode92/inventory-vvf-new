import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria, Model, Sottocategoria } from '../yaml/inventory-yaml';

@Injectable({
  providedIn: 'root',
})
export class ServiceInventory {

  private baseUrl = 'http://localhost:3000' /* '/api/inventories' */
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
    return this.http.post<Model>(`${this.baseUrl}/modello/${id}`,body)
  }

/************CRUD CATEGORY**********************/
getCategoryList(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.baseUrl}/categoria`)
}
getSottoCategoryList(id?:string): Observable<Sottocategoria[]>{
    return this.http.get<Sottocategoria[]>(`${this.baseUrl}/sottocategoria/${id}`)
}
createCategoryList(body: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(`${this.baseUrl}/categoria`,body)
}

createSottoCategoryList(body: Categoria): Observable<Sottocategoria>{
    return this.http.post<Sottocategoria>(`${this.baseUrl}/sottocategoria`,body)
}
}