import { Component } from '@angular/core';
import { OrderServiceService } from '../order-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public email:any;
  public password:any;
  public name:any;
  public phone:any;

  loginEmail:any;
  loginPassword:any;

  loggingIn:boolean = false;

  constructor(
    public router:Router,
    public fireService:OrderServiceService
  ) { }

  ngOnInit() {
  }

  login() {
    this.fireService.login({email: this.loginEmail, password: this.loginPassword}).then(res => {
      if (res?.user?.uid) {
        localStorage.setItem('isLogin', "true");
        this.router.navigate(['/pages']);
      }
    }, err => {
      alert(err.message);
      console.log(err);
    })
  }

  togglePage(){
    this.loggingIn = !this.loggingIn
  }

  signup(){ 
    this.fireService.signup({email:this.email,password:this.password}).then(res=>{
      if(res?.user?.uid){
        let data = {
          email:this.email,
          password:this.password,
          displayName:this.name,
          uid:res.user.uid,
          phoneNumber: this.phone
        }
        this.fireService.saveDetails(data).then(res=>{
         alert('Account Created!');
         this.router.navigate(['/pages']);
        },err=>{
          console.log(err);
        })
      }
    },err=>{
      alert(err.message);

      console.log(err);
    })
  }

}
