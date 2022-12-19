import { TeacherApiService } from './../../services/teacher-api.service';
import { Teacher } from './../../models/teacher';
import { Component, OnInit } from '@angular/core';
import { StudentApiService } from 'src/app/services/student-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {

  teacher: Teacher = new Teacher();

  constructor(private serv: TeacherApiService, private rotuer: Router
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.serv.post(this.teacher).subscribe(data => {
      this.rotuer.navigateByUrl("listTeacher");


    });
  }
}
