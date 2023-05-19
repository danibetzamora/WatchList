import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionSnapshots, docSnapshots, doc, updateDoc, deleteDoc, arrayUnion } from '@angular/fire/firestore';
import { User } from "./user.model";
import { Auth, signOut } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { arrayRemove } from 'firebase/firestore';

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
        last_name: item.last_name,
        birth_date: item.birth_date,
        email: item.email,
        image: item.image,
        films_to_watch_list: item.films_to_watch_list,
        films_watched_list: item.films_watched_list,
        series_to_watch_list: item.series_to_watch_list,
        series_watching_list: item.series_watching_list,
        series_watched_list: item.series_watched_list,
        videos_to_watch_list: item.videos_to_watch_list,
        videos_watched_list: item.videos_watched_list
    });
  }

  addFilmToWatchList(userID: string, filmID: string): void {
    const userRef = doc(this.firestore, 'users', userID);
    const updateData = { ['films_to_watch_list']: arrayUnion(filmID) };

    updateDoc(userRef, updateData)
      .then(() => {
        console.log('New item successfully added');
      })
      .catch((error) => {
        console.error('Error adding new item', error);
      });
  }

  addFilmToWatchedList(userID: string, filmID: string): void {
    const userRef = doc(this.firestore, 'users', userID);
    const updateData = { ['films_watched_list']: arrayUnion(filmID) };

    updateDoc(userRef, updateData)
      .then(() => {
        console.log('New item successfully added');
      })
      .catch((error) => {
        console.error('Error adding new item', error);
      });
  }

  removeFilmFromToWatchList(userID: string, filmID: string): void {
    const userRef = doc(this.firestore, 'users', userID);
    const updateData = { ['films_to_watch_list']: arrayRemove(filmID) };
  
    updateDoc(userRef, updateData)
      .then(() => {
        console.log('Item successfully removed from To Watch List');
      })
      .catch((error) => {
        console.error('Error removing item from To Watch List', error);
      });
  }
  
  removeFilmFromWatchedList(userID: string, filmID: string): void {
    const userRef = doc(this.firestore, 'users', userID);
    const updateData = { ['films_watched_list']: arrayRemove(filmID) };
  
    updateDoc(userRef, updateData)
      .then(() => {
        console.log('Item successfully removed from Watched List');
      })
      .catch((error) => {
        console.error('Error removing item from Watched List', error);
      });
  }

  addSeriesToWatchList(userID: string, seriesID: string): void {
    const userRef = doc(this.firestore, 'users', userID);
    const updateData = { ['series_to_watch_list']: arrayUnion(seriesID) };

    updateDoc(userRef, updateData)
      .then(() => {
        console.log('New item successfully added');
      })
      .catch((error) => {
        console.error('Error adding new item', error);
      });
  }

  addSeriesToWatchedList(userID: string, seriesID: string): void {
    const userRef = doc(this.firestore, 'users', userID);
    const updateData = { ['series_watched_list']: arrayUnion(seriesID) };

    updateDoc(userRef, updateData)
      .then(() => {
        console.log('New item successfully added');
      })
      .catch((error) => {
        console.error('Error adding new item', error);
      });
  }

  addSeriesToWatchingList(userID: string, seriesID: string): void {
    const userRef = doc(this.firestore, 'users', userID);
    const updateData = { ['series_watching_list']: arrayUnion(seriesID) };

    updateDoc(userRef, updateData)
      .then(() => {
        console.log('New item successfully added');
      })
      .catch((error) => {
        console.error('Error adding new item', error);
      });
  }

  removeSeriesFromToWatchList(userID: string, seriesID: string): void {
    const userRef = doc(this.firestore, 'users', userID);
    const updateData = { ['series_to_watch_list']: arrayRemove(seriesID) };
  
    updateDoc(userRef, updateData)
      .then(() => {
        console.log('Item successfully removed from To Watch List');
      })
      .catch((error) => {
        console.error('Error removing item from To Watch List', error);
      });
  }
  
  removeSeriesFromWatchedList(userID: string, seriesID: string): void {
    const userRef = doc(this.firestore, 'users', userID);
    const updateData = { ['series_watched_list']: arrayRemove(seriesID) };
  
    updateDoc(userRef, updateData)
      .then(() => {
        console.log('Item successfully removed from Watched List');
      })
      .catch((error) => {
        console.error('Error removing item from Watched List', error);
      });
  }

  removeSeriesFromWatchingList(userID: string, seriesID: string): void {
    const userRef = doc(this.firestore, 'users', userID);
    const updateData = { ['series_watching_list']: arrayRemove(seriesID) };
  
    updateDoc(userRef, updateData)
      .then(() => {
        console.log('Item successfully removed from Watching List');
      })
      .catch((error) => {
        console.error('Error removing item from Watching List', error);
      });
  }

  addVideoToWatchList(userID: string, videoID: string): void {
    const userRef = doc(this.firestore, 'users', userID);
    const updateData = { ['videos_to_watch_list']: arrayUnion(videoID) };

    updateDoc(userRef, updateData)
      .then(() => {
        console.log('New item successfully added');
      })
      .catch((error) => {
        console.error('Error adding new item', error);
      });
  }

  addVideoToWatchedList(userID: string, videoID: string): void {
    const userRef = doc(this.firestore, 'users', userID);
    const updateData = { ['videos_watched_list']: arrayUnion(videoID) };

    updateDoc(userRef, updateData)
      .then(() => {
        console.log('New item successfully added');
      })
      .catch((error) => {
        console.error('Error adding new item', error);
      });
  }

  removeVideoFromToWatchList(userID: string, videoID: string): void {
    const userRef = doc(this.firestore, 'users', userID);
    const updateData = { ['videos_to_watch_list']: arrayRemove(videoID) };
  
    updateDoc(userRef, updateData)
      .then(() => {
        console.log('Item successfully removed from To Watch List');
      })
      .catch((error) => {
        console.error('Error removing item from To Watch List', error);
      });
  }
  
  removeVideoFromWatchedList(userID: string, videoID: string): void {
    const userRef = doc(this.firestore, 'users', userID);
    const updateData = { ['videos_watched_list']: arrayRemove(videoID) };
  
    updateDoc(userRef, updateData)
      .then(() => {
        console.log('Item successfully removed from Watched List');
      })
      .catch((error) => {
        console.error('Error removing item from Watched List', error);
      });
  }

  logOut() {
    return signOut(this.auth);
  }

  setLoggedUserId(value: string) {
    this._loggedUserId.next(value);
  }
}