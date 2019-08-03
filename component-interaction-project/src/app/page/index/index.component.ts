import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { MockData } from 'src/app/model/mock-data';
import { Bill } from 'src/app/model/bill';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  modalCounter: number = 0;
  mockData: MockData = new MockData();
  employees: Employee[] = [];
  bills: Bill[] = [];

  constructor() {
    this.employees = this.mockData.employee;
    this.bills = this.mockData.bills;
  }

  ngOnInit() {
  }

  showModal(): void {
    this.modalCounter++;
  }

}
