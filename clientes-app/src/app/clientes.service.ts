import { Injectable } from '@angular/core';
import { Cliente } from './clientes/clientes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiUrlBase + '/api/clientes'

  constructor
    (private http: HttpClient) {

  }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiURL, cliente)
  }

  putCliente(cliente: Cliente) : Observable<any> {
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente)
  }  

  getCliente() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiURL)
  }

  getClienteById(id: number) : Observable<Cliente> {
    return this.http.get<any>(`${this.apiURL}/${id}`)
  }
  
  deleteCliente(cliente: Cliente) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`)
  }  
}
