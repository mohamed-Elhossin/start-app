import { Student } from './../../models/Student';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiFunctionsService } from 'src/app/services/api-functions.service';
import { StudentApiService } from 'src/app/services/student-api.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  allData: Student[];
  empty = false;

  constructor(private serv: StudentApiService) {
    this.serv.get().subscribe((data: any) => {
      if (data.length > 0) {
        this.allData = data;
        this.empty = true;
      } else {
        this.empty = false;
      }
    })

  }


  ngOnInit(): void {
  }

  onDelete(id) {
    if(confirm()){
      this.serv.delete(id).subscribe(data => {
        location.reload();
      })
    }else{

    }

  }



}
