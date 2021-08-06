import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http : HttpClient) { }
  getToDos(){
   return this.http.get("https://jsonplaceholder.typicode.com/todos")
  }
}
