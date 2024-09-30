import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(
    public firestore: AngularFirestore,
    public auth: AngularFireAuth
  ) {}

  userId: any;
  items: any;

  ngOnInit() {
  }

  createOrderItem(item: any) {
    return this.firestore.collection("items").add(item);
  }

  getOrderItems() {
    // return this.firestore.collection("items").doc(this.userId).valueChanges();
    console.log(this.userId);
    return this.firestore.collection("items", ref => ref.where('userId', '==', this.userId)).snapshotChanges();
  }
  
  updateOrderItem(id: string, updatedData: any) {
    return this.firestore.collection("items").doc(id).update(updatedData);
  }
  
  deleteOrderItem(id: string) {
    return this.firestore.collection("items").doc(id).delete();
  }
  
  loginWithEmail(data: any) {
    return this.auth.signInWithEmailAndPassword(data.email, data.password);
  }

  signup(data: any) {
    return this.auth.createUserWithEmailAndPassword(data.email, data.password);
  }

  login(credentials: {email: string, password: string}) {
    return this.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  saveDetails(data: any) {
    return this.firestore.collection("users").doc(data.uid).set(data);
  }

  getDetails(data: any) {
    this.userId = data.uid;
    return this.firestore.collection("users").doc(data.uid).valueChanges();
  }
  
  logout() {
    return this.auth.signOut();
  }
}
