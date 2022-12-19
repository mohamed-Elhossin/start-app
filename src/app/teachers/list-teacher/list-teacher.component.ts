import { TeacherApiService } from './../../services/teacher-api.service';
import { Teacher } from './../../models/teacher';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent implements OnInit {


  allData: Teacher[];
  empty = false;

  constructor(private serv: TeacherApiService) {
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
