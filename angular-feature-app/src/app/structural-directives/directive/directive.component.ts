import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  students = ["Dhaval", "Patidar", "Krinu", "Patel"]

  movies = [
    {title: 'The Avengers', Director:'Joss Whedon', cast:'Robert Downey Jr.', date:'May 4, 2012'},
    {title: 'Dangal', Director:'Nitesh Tiwari', cast:'Aamir Khan', date:'December 21, 2016'},
    {title: '3 Idiots', Director:'Rajkumar Hirani', cast:'Aamir Khan', date:'December 23, 2009'},
    {title: 'Love Ni Bhavai', Director:'Sandeep Patel', cast:'Aarohi Patel', date:'November 17, 2017'},
  ]

  products = ["Laptop", "Mobile", "Desktop", "iPad"]

  employees = [
    {
      name:"Dhaval",
      email:'dvl@me.com',
      skills: [
        {
          skill: 'Scrum Master',
          Exp:'10 Years'
        }
      ]
    },
    {
      name:"Shivam",
      email:'cvm@me.com',
      skills: [
        {
          skill: 'Power Engineer',
          Exp:'8 Years'
        }
      ]
    },
    {
      name:"Rushi",
      email:'Rushi@me.com',
      skills: [
        {
          skill: 'Technician',
          Exp:'7 Years'
        }
      ]
    },
    {
      name:"Chintan",
      email:'chint@me.com',
      skills: [
        {
          skill: 'Tech Lead',
          Exp:'8.5 Years'
        }
      ]
    }
  ]
}
