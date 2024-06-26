import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../modules/todo.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getTodo():Observable<Data[]>{
    return this.http.get<Data[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
