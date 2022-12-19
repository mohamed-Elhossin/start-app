import { HttpClient } from '@angular/common/http';
import { Teacher } from './../models/teacher';
import { ApiFunctionsService } from 'src/app/services/api-functions.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherApiService extends ApiFunctionsService<Teacher> {

  constructor(http : HttpClient) {
    super(http,"http://localhost:3000/teacher");
   }
}
