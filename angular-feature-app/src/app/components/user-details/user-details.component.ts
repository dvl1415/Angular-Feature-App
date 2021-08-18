import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
            private activatedRoute : ActivatedRoute,
            private _router: Router) { }

  ngOnInit() {
   // this.userService.getUserById()
   console.log (this.activatedRoute.snapshot.params)
   this.id = this.activatedRoute.snapshot.params.id

   this.activatedRoute.paramMap.subscribe(data=>{
     console.log(data.get('id'))
     console.log(data.get('name'))
   })
   this.userService.getUserById(this.id).subscribe(data => { 
    this.user = data as any
   })
  }

  goBack(){
    this._router.navigate(['users'])
  }
  goHome(){
    this._router.navigateByUrl('home')
  }
}
