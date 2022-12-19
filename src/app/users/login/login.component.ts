import { Router } from '@angular/router';
import { Users } from './../../models/users';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // allData: Users[];
  name;
  password;
  ErrorLogin = "";
  constructor(private serv: UsersService, private routeer: Router) {

  }

  ngOnInit(): void {
  }
  login() {
    this.serv.get().subscribe((data: any) => {

      let user = data.find(allData => {
        return allData.name == this.name && allData.password == this.password;
      })

      if (user) {
        this.routeer.navigateByUrl(`home/${this.name}`)
      } else {
        this.ErrorLogin = "Try agien";
      }

    })
  }
}
