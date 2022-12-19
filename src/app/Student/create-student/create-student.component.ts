import { Student } from './../../models/Student';
import { Component, Input, OnInit } from '@angular/core';
import { ApiFunctionsService } from 'src/app/services/api-functions.service';
import { Router } from '@angular/router';
import { StudentApiService } from 'src/app/services/student-api.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student;

  constructor(private serv: StudentApiService, private rotuer: Router
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.serv.post(this.student).subscribe(data => {
      this.rotuer.navigateByUrl("listStudent");
    });
  }
}
