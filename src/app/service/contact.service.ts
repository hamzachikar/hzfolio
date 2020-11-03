import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

interface ContactModel{
  name:string;
   email:string;
     message:string
}
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private dbPath = '/messages';
  dataRef: AngularFireList<ContactModel> = null;

  constructor( private db: AngularFireDatabase) {
    this.dataRef= db.list(this.dbPath);
  }
  create(data:ContactModel): any {
    console.log('lol')
    return this.dataRef.push(data);
  }
}
