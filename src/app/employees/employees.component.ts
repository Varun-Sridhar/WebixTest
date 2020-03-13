import { EmployeesService } from './employees.service';
import { Component, OnInit } from '@angular/core';
import { IEmployees } from './employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeesService]
})
export class EmployeesComponent implements OnInit {

  employees : IEmployees[];
  constructor(private employee : EmployeesService) { }

  ngOnInit(): void {
    this.employee.getEmployeesObservable().subscribe((data) => this.employees = data);
    console.log(this.employees);

    //this.employee.getEmployeesPromise().then((data) => this.employees=data);
  }

}
