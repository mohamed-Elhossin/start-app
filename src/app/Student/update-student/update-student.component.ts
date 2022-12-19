import { Student } from './../../models/Student';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiFunctionsService } from 'src/app/services/api-functions.service';
import { StudentApiService } from 'src/app/services/student-api.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  id;
  student: Student
  constructor(private serv: StudentApiService, private activeRoute: ActivatedRoute
    ,
    private route: Router) {
    this.id = this.activeRoute.snapshot.paramMap.get("id");
    this.serv.getbyId(this.id).subscribe(data => {
      this.student = data;
    })
  }

  ngOnInit(): void {
  }
  edit() {
    this.serv.put(this.student, this.id).subscribe(data => {
      this.route.navigateByUrl("listStudent");
    })
  }
}
