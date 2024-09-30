import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../../order-service.service';
@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
})
export class NewOrderComponent {

  constructor(
    private orderService: OrderServiceService
  ) { }

  orders = this.orderService.items;
  // Items for the new order (optional)
  newItems:{ name: string, quantity: number }[] = [
    { name: '', quantity: 1 }
  ];

  // Function to handle form submission
  onSubmit(form: any) {
    if (form.valid) {
      const newOrder: any = {
        type: form.value.type,
        pickUpAddress: form.value.pickAddress || '',
        dropOffAddress: form.value.dropAddress || '',
        amount: form.value.amount,
        status: form.value.status,
        items: this.newItems.filter(item => item.name),
        userId: this.orderService.userId
      };
      
      this.orderService.createOrderItem(newOrder).then(() => {
        alert('Order saved successfully!');
        // this.newItems = [{ name: '', quantity: 1 }];
      }).catch((error) => {
        console.error('Error saving order:', error);
      });

      // form.resetForm();
      // this.newItems = [{ name: '', quantity: 1 }];
    }
  }

  addItem() {
    this.newItems.push({ name: '', quantity: 1 });
  }

  removeItem(index: number) {
    if (this.newItems.length > 1) {
      this.newItems.splice(index, 1);
    }
  }


}
