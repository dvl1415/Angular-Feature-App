import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { People } from '../models/people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  url:string = "http://localhost:3000/people"

  constructor(private http: HttpClient) { }

 getPeople(){
  return this.http.get(this.url)
 }

 addPeople(data:any){
   var headers = {'content-type' : 'application/json'}
   var body = JSON.stringify(data)
   return this.http.post(this.url,body,{headers : headers})
 }

 editPeople(data:any){
   var headers = {'content-type' : 'application/json'}
   var body = JSON.stringify(data)
   return this.http.post(`${this.url}/${6}`,body,{headers : headers})
 }

 deletePeople(id : number){
  return this.http.delete(`${this.url}/${id}`)
 }
 
}
