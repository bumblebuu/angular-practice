import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { OrderService } from 'src/app/service/order.service';
import { Order } from 'src/app/model/order';
=======
import { OrderService } from '../../service/order.service';
import { Order } from '../../model/order';
>>>>>>> 8c53cdeae1bbb2d4a0a0bff324a453d3c632d8cc
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.css']
})
export class OrderAdminComponent implements OnInit {

<<<<<<< HEAD
  orderList: Order[] = [];
  orderList$: Observable<any> = this.orderService.getAll();
=======
  list: Order[] = [];
  list$: Observable<any> = this.orderService.getAll();
>>>>>>> 8c53cdeae1bbb2d4a0a0bff324a453d3c632d8cc

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
<<<<<<< HEAD
    // this.orderService.getAll().subscribe(
    //   orders => this.orderList = orders,
    //   err => console.error(err)
    // );
  }



=======
    /* this.orderService.getAll().subscribe(
      orders => this.list = orders,
      err => console.error(err)
    ); */
  }

>>>>>>> 8c53cdeae1bbb2d4a0a0bff324a453d3c632d8cc
}
