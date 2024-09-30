import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../../order-service.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {

  constructor(
    private orderService: OrderServiceService
  ) { }
  items: any;
  ngOnInit() {
    this.orderService.getOrderItems().subscribe(data => {
      this.items = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object)
        };
      });
    });
    this.orderService.getOrderItems().subscribe(data => {
      console.log(data);;
    });
  }
  ngAfterViewInit() {
    console.log(this.items);
  }

  deleteItem(itemId: string) {
    console.log(itemId)
    this.orderService.deleteOrderItem(itemId).then(() => {
      console.log('Item deleted successfully!');
      this.getOrderItems();
    });
  }
  getOrderItems() {
    this.orderService.getOrderItems().subscribe(data => {
      this.items = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object)
        };
      });
    });
  }
}
