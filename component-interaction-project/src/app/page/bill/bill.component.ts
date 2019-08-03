import { Component, OnInit, Input } from '@angular/core';
import { Bill } from 'src/app/model/bill';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  @Input() bills: Bill[];
  constructor() { }

  ngOnInit() {
  }

}
