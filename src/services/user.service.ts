import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionSnapshots, docSnapshots, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { User } from "./user.model";
import { Auth, signOut } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _loggedUserId = new BehaviorSubject<string>('null');

  collection = 'users';

  constructor(private auth: Auth, private firestore: Firestore) {}

  getDocument(id: string) {
    return docSnapshots( doc(this.firestore, `${this.collection}/${id}`) );
  }

  getList() {
    return collectionSnapshots( collection(this.firestore, this.collection) );
  }

  create(item: User) {
    return addDoc( collection(this.firestore, this.collection), item );
  }

  delete(item: User) {
    return deleteDoc( doc(this.firestore, `${this.collection}/${item.id}`) );
  }

  update(item: User, id: string) {
    return updateDoc( doc(this.firestore, `${this.collection}/${id}`), {
        id: item.id,
        name: item.name,
        email: item.email,
        image: item.image,
        to_watch_list: item.to_watch_list,
        watched_list: item.watched_list,
        watching_list: item.watching_list
    });
  }

  logOut() {
    return signOut(this.auth);
  }

  setLoggedUserId(value: string) {
    this._loggedUserId.next(value);
  }
}