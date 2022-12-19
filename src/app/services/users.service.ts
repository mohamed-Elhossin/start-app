import { Users } from './../models/users';
import { HttpClient } from '@angular/common/http';
import { ApiFunctionsService } from 'src/app/services/api-functions.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiFunctionsService<Users> {

  constructor(http: HttpClient) {
    super(http, "http://localhost:3000/users");
  }
}
