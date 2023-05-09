import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDoc, setDoc, collectionSnapshots, docSnapshots, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Series } from "./series.model";

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  collection = 'series';

  constructor(private firestore: Firestore) {}

  getDocument(id: string) {
    return docSnapshots( doc(this.firestore, `${this.collection}/${id}`) );
  }

  getList() {
    return collectionSnapshots( collection(this.firestore, this.collection) );
  }

  create(item: Series) {
    return addDoc( collection(this.firestore, this.collection), item );
  }

  delete(item: Series) {
    return deleteDoc( doc(this.firestore, `${this.collection}/${item.id}`) );
  }

  update(item: Series, id: string) {
    return updateDoc( doc(this.firestore, `${this.collection}/${id}`), {
        id: item.id,
        title: item.title,
        director: item.director,
        cast: item.cast,
        episodes: item.episodes,
        seasons: item.seasons,
        release_date: item.release_date,
        genres: item.genres,
        synopsis: item.synopsis,
        links: item.links,
        image: item.image
    });
  }

}