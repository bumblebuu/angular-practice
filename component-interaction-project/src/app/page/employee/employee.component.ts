import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { MockData } from 'src/app/model/mock-data';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  title = "Employees";
  mockData: MockData = new MockData();
  employees: Employee[] = [];

  constructor() {
    this.employees = this.mockData.employee;
   }

  ngOnInit() {
  }

}
