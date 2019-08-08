import { Component, OnInit } from '@angular/core';
import { DepartmentCrudService } from '../department-crud.service';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {

  departments:any;

  constructor(private crud : DepartmentCrudService) { }
getAllDepartments = async () =>{
 await  this.crud.getAllDepartments().subscribe(
    data =>{
      this.departments = data;
      console.log(data);
    }
  );
}
  ngOnInit() {
   this.getAllDepartments();
  }

}
