import { Student } from './../models/Student';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiFunctionsService } from './api-functions.service';

@Injectable({
  providedIn: 'root'
})
export class StudentApiService extends ApiFunctionsService<Student> {

  constructor(http: HttpClient) {
    super(http, "http://localhost:3000/student")
  }
}
