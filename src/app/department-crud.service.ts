import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class DepartmentCrudService {

  private url = "http://localhost:5000/";

  constructor(private _http : HttpClient) { }

  getAllDepartments = () =>{
    return  this._http.get(this.url+'api/getDepartments');
  }
}
