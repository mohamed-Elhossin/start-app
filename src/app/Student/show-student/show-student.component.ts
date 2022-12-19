import { ActivatedRoute } from '@angular/router';
import { Student } from './../../models/Student';
import { Component, OnInit } from '@angular/core';
import { ApiFunctionsService } from 'src/app/services/api-functions.service';
import { StudentApiService } from 'src/app/services/student-api.service';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {

  student: Student;
  id;
  constructor(private serv: StudentApiService, private activeRoute: ActivatedRoute) {

    this.id = this.activeRoute.snapshot.paramMap.get("id");

    this.serv.getbyId(this.id).subscribe(data => {
      this.student = data
      console.log(this.student);

    })
  }

  ngOnInit(): void {
  }

}
