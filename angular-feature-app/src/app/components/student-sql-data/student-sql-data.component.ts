import { Component, OnInit } from '@angular/core';
import { StudentSqlData } from 'src/app/models/student-sql-data';
import { StudentSqlDataService } from 'src/app/services/student-sql-data.service';

@Component({
  selector: 'app-student-sql-data',
  templateUrl: './student-sql-data.component.html',
  styleUrls: ['./student-sql-data.component.css']
})
export class StudentSqlDataComponent implements OnInit {
  studentList: StudentSqlData[] =[];
  student: StudentSqlData = {}

  constructor(private studentSqlDataService: StudentSqlDataService) { }

  ngOnInit() {
    this.getStudents()
  }

  getStudents(){
    this.studentSqlDataService.getStudents().subscribe(data => {
      console.log(data)
      this.studentList = data as any
    })
  }

  addStudent(){
    var body = {
      name : this.student.name,
      email : this.student.email,
      city : this.student.city
    }
    this.studentSqlDataService.addStudent(body).subscribe(data => {
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
    this.studentSqlDataService.getStudentById(id).subscribe(data => {
      let studentData = data as any
      this.student = studentData[0]
    })
  }
  updateData(){
    this.studentSqlDataService.updateStudent(this.student).subscribe(data => {
      this.clearFields()
      this.getStudents()
    })
  }

  deleteData(id: any){
    this.studentSqlDataService.deleteStudent(id).subscribe(data => {
      this.getStudents()
    })
  }

}