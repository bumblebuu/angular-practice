<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { MockData } from 'src/app/model/mock-data';
import { Bill } from 'src/app/model/bill';
=======
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MockData } from '../../model/mock-data';
import { Employee } from 'src/app/model/employee';
import { Subscription } from 'rxjs';
>>>>>>> 430a4fb7e7405d31f72e95d991e233475870703d

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
<<<<<<< HEAD
export class IndexComponent implements OnInit {
  modalCounter: number = 0;
  mockData: MockData = new MockData();
  employees: Employee[] = [];
  bills: Bill[] = [];

  constructor() {
    this.employees = this.mockData.employee;
    this.bills = this.mockData.bills;
  }
=======
export class IndexComponent implements OnInit, OnDestroy {

  modalCounter: number = 0;
  employeeList: Employee[];
  subscription: Subscription;

  constructor(
    private mock: MockData
  ) { }
>>>>>>> 430a4fb7e7405d31f72e95d991e233475870703d

  ngOnInit() {
    this.subscription = this.mock.employee$.subscribe(
      employees => this.employeeList = employees,
      err => console.error(err),
      () => console.log('complete')
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  showModal(): void {
    this.modalCounter++;
  }

}
