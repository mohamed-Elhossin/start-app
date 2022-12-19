import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { Users } from './../../models/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  users = new Users();

  constructor(private serv: UsersService, private route: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.serv.post(this.users).subscribe(data => {
      this.route.navigateByUrl("login");
    })
  }
}
