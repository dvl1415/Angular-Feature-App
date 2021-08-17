import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList : User[] = [];
  constructor(private userService : UserService) {}

  ngOnInit(){
    this.userService.getUsers().subscribe(data => {
      this.userList = data as any
    })
  }

}
