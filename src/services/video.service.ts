import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDoc, setDoc, collectionSnapshots, docSnapshots, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Video } from "./video.model";

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  collection = 'videos';

  constructor(private firestore: Firestore) {}

  getDocument(id: string) {
    return docSnapshots( doc(this.firestore, `${this.collection}/${id}`) );
  }

  getList() {
    return collectionSnapshots( collection(this.firestore, this.collection) );
  }

  create(item: Video) {
    return addDoc( collection(this.firestore, this.collection), item );
  }

  delete(item: Video) {
    return deleteDoc( doc(this.firestore, `${this.collection}/${item.id}`) );
  }

  update(item: Video, id: string) {
    return updateDoc( doc(this.firestore, `${this.collection}/${id}`), {
        id: item.id,
        title: item.title,
        creator: item.creator,
        release_date: item.release_date,
        category: item.category,
        duration: item.duration,
        description: item.description,
        link: item.link,
        image: item.image
    });
  }

}