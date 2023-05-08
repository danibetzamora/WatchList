import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionSnapshots, docSnapshots, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Film } from "./film.model";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  collection = 'films';

  constructor(private firestore: Firestore) {}

  getDocument(id: string) {
    return docSnapshots( doc(this.firestore, `${this.collection}/${id}`) );
  }

  getList() {
    return collectionSnapshots( collection(this.firestore, this.collection) );
  }

  create(item: Film) {
    return addDoc( collection(this.firestore, this.collection), item );
  }

  delete(item: Film) {
    return deleteDoc( doc(this.firestore, `${this.collection}/${item.id}`) );
  }

  update(item: Film, id: string) {
    return updateDoc( doc(this.firestore, `${this.collection}/${id}`), {
        id: item.id,
        title: item.title,
        director: item.director,
        cast: item.cast,
        duration: item.duration,
        release_date: item.release_date,
        genres: item.genres,
        production_company: item.production_company,
        synopsis: item.synopsis,
        links: item.links,
        image: item.image
    });
  }
}