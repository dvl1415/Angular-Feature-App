import { Component, OnInit } from '@angular/core';
import { StudentMongoData } from 'src/app/models/student-mongo-data.model';
import { StudentMongoDataService } from 'src/app/services/student-mongo-data.service';

@Component({
  selector: 'app-student-mongo-data',
  templateUrl: './student-mongo-data.component.html',
  styleUrls: ['./student-mongo-data.component.css']
})
export class StudentMongoDataComponent implements OnInit {
  studentList: StudentMongoData[] =[];
  student: StudentMongoData = {}

  constructor(private studentMongoDataService: StudentMongoDataService) { }

  ngOnInit() {
    this.getStudents()
  }

  getStudents(){
    this.studentMongoDataService.getStudents().subscribe(data => {
      this.studentList = data as any
    })
  }

  addStudent(){
    var body = {
      name : this.student.name,
      email : this.student.email,
      city : this.student.city
    }
    this.studentMongoDataService.addStudent(body).subscribe(data => {
      console.log(data)
      this.clearFields()
      this.getStudents()
    })
  }

  clearFields(){
    this.student.name = ''
    this.student.email = ''
    this.student.city = ''
  }

  editData(id:any){
    this.studentMongoDataService.getStudentById(id).subscribe(data => {
      this.student = data as any
    })
  }
  updateData(){
    this.studentMongoDataService.updateStudent(this.student).subscribe(data => {
      this.clearFields()
      this.getStudents()
    })
  }

  deleteData(id: any){
    this.studentMongoDataService.deleteStudent(id).subscribe(data => {
      this.getStudents()
    })
  }

}