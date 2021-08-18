import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/people.model';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people : People[] = [];
  constructor(private peopleService : PeopleService) { }

  ngOnInit() {
   
  }

  getPeople(){
    this.peopleService.getPeople().subscribe(data => {
      this.people = data as any
      })
  }
  
  addPeople(){
    let data = {"id" : 6, "name" : "scott"}
        data = {"id" : 8, "name" : "Rushi Vyas"}
    this.peopleService.addPeople(data).subscribe(data=>{
      console.log(data)
      this.getPeople()
    })
  }

  editPeople(){
    let data = {"id" : 6, "name" : "Adam"}
    this.peopleService.editPeople(data).subscribe(data=>{
      console.log(data)
      this.getPeople()
    })
  }

  deletePeople(){
    this.peopleService.deletePeople(8).subscribe(data=>{
      console.log(data)
      this.getPeople()
    })
  }
}
