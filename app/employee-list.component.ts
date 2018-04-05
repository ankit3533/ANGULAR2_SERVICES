import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'employee-list',
  template: `<h2>Employee List</h2>
              <h3>{{errorMessage}}</h3>
              <ul *ngFor="let employee of employees">
              <li>{{employee.name}}</li>
              </ul>
              `
})
export class EmployeeListComponent implements OnInit {

  employees=[];
  errorMessage:string;

constructor(private _employeeService:EmployeeService){}

ngOnInit(){
  this._employeeService.getEmployeeList().subscribe(resEmpData=>this.employees=resEmpData, 
                                                    resEmpError=>this.errorMessage=resEmpError);
}



}
