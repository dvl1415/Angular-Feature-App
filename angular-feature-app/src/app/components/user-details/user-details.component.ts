import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id ?: number
  user : User = {}
  constructor(private userService : UserService, 
            private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
   // this.userService.getUserById()
  // console.log (this.activatedRoute.snapshot.params)
   this.id = this.activatedRoute.snapshot.params.id
   this.userService.getUserById(this.id).subscribe(data => { 
    this.user = data as any
   })
  }
}
