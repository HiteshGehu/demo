import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/order-service.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent  implements OnInit {
  user: any;
  constructor(
    private orderService: OrderServiceService,
    private auth: AngularFireAuth,
    private router: Router
  ) { }

  updateUser() {
    this.orderService.saveDetails(this.user).then(() => {
      alert('User updated!');
    });
  }

  logout() {
    this.orderService.logout().then(() => {
      localStorage.removeItem('isLogin');
      this.router.navigate(['/home']);
    });
  }

  ngOnInit() {
    this.auth.user.subscribe(user => {
      if (user) {
        this.orderService.getDetails(user).subscribe(details => {
          this.user = details;
        });
      }
      console.log(user);
    });
  }

}
