"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6365],{8746:(v,d,r)=>{r.r(d),r.d(d,{AccountPageModule:()=>_});var p=r(177),a=r(4341),i=r(791),s=r(3225),n=r(3953),m=r(8769),g=r(8831);function h(o,l){if(1&o){const c=n.RV6();n.j41(0,"div")(1,"ion-header")(2,"ion-toolbar",1)(3,"ion-item",2)(4,"ion-label",3)(5,"h1"),n.EFF(6,"Welcome! "),n.k0s(),n.j41(7,"p")(8,"ion-text",4),n.EFF(9),n.k0s()()()()()(),n.j41(10,"ion-card",5)(11,"ion-item",6)(12,"ion-label",7),n.EFF(13,"Name"),n.k0s(),n.j41(14,"ion-input",8),n.mxI("ngModelChange",function(e){n.eBV(c);const u=n.XpG();return n.DH7(u.user.displayName,e)||(u.user.displayName=e),n.Njj(e)}),n.k0s()(),n.j41(15,"ion-item",6)(16,"ion-label",7),n.EFF(17,"Email"),n.k0s(),n.j41(18,"ion-input",8),n.mxI("ngModelChange",function(e){n.eBV(c);const u=n.XpG();return n.DH7(u.user.email,e)||(u.user.email=e),n.Njj(e)}),n.k0s()(),n.j41(19,"ion-item",6)(20,"ion-label",7),n.EFF(21,"Phone"),n.k0s(),n.j41(22,"ion-input",8),n.mxI("ngModelChange",function(e){n.eBV(c);const u=n.XpG();return n.DH7(u.user.phoneNumber,e)||(u.user.phoneNumber=e),n.Njj(e)}),n.k0s()(),n.j41(23,"ion-button",9),n.bIt("click",function(){n.eBV(c);const e=n.XpG();return n.Njj(e.updateUser())}),n.EFF(24,"Update"),n.k0s(),n.j41(25,"ion-button",10),n.bIt("click",function(){n.eBV(c);const e=n.XpG();return n.Njj(e.logout())}),n.EFF(26,"Logout"),n.k0s()()()}if(2&o){const c=n.XpG();n.R7$(9),n.SpI(" ",c.user.displayName," "),n.R7$(5),n.R50("ngModel",c.user.displayName),n.R7$(4),n.R50("ngModel",c.user.email),n.R7$(4),n.R50("ngModel",c.user.phoneNumber)}}const f=[{path:"",component:(()=>{var o;class l{constructor(t,e,u){this.orderService=t,this.auth=e,this.router=u}updateUser(){this.orderService.saveDetails(this.user).then(()=>{alert("User updated!")})}logout(){this.orderService.logout().then(()=>{alert("Logged out!"),this.router.navigate(["/home"])})}ngOnInit(){this.auth.user.subscribe(t=>{t&&this.orderService.getDetails(t).subscribe(e=>{this.user=e}),console.log(t)})}}return(o=l).\u0275fac=function(t){return new(t||o)(n.rXU(m.L),n.rXU(g.DS),n.rXU(s.Ix))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-account"]],decls:1,vars:1,consts:[[4,"ngIf"],["color","white"],["lines","none"],["color","primary"],["color","dark"],[1,"ion-padding"],["lines","full"],["position","stacked"],[3,"ngModelChange","ngModel"],["expand","full",3,"click"],["expand","full","color","danger",3,"click"]],template:function(t,e){1&t&&n.DNE(0,h,27,4,"div",0),2&t&&n.Y8G("ngIf",e.user)},dependencies:[p.bT,a.BC,a.vS,i.Jm,i.b_,i.eU,i.$w,i.uz,i.he,i.IO,i.ai,i.Gw]}),l})()}];let C=(()=>{var o;class l{}return(o=l).\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[s.iI.forChild(f),s.iI]}),l})(),_=(()=>{var o;class l{}return(o=l).\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[p.MD,a.YN,i.bv,C]}),l})()}}]);