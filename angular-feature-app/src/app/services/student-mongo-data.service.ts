import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentMongoData } from '../models/student-mongo-data.model';

@Injectable({
  providedIn: 'root'
})
export class StudentMongoDataService {

  apiEndPoint = "http://localhost:1234/api/student"

  constructor(private http: HttpClient) { }

  getStudents(){
    return this.http.get(this.apiEndPoint)
  }

  getStudentById(id:any){
    return this.http.get(`${this.apiEndPoint}/${id}`)
  }

  addStudent(data:any){
    var headers = {'content-type' : 'application/json'}
    var body = JSON.stringify(data)
    return this.http.post(this.apiEndPoint, body, {headers: headers})
  }

  updateStudent(data:any){
    console.log(data)
    var headers = {'content-type' : 'application/json'}
    var body = JSON.stringify(data)
    return this.http.put(`${this.apiEndPoint}/${data._id}`, body, {headers: headers})
  }

  deleteStudent(id:any){
    return this.http.delete(`${this.apiEndPoint}/${id}`)
  }
}