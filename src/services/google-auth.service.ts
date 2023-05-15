import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { Firestore, getFirestore, doc, addDoc, setDoc, collection, query, where, getDocs} from '@angular/fire/firestore';
import { Router, RouterLink } from '@angular/router';
import { getAuth, signInWithPopup, GoogleAuthProvider, EmailAuthCredential } from "firebase/auth";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  constructor(
    private db: Firestore,
    private router: Router
  ) { }

  
  async signInWithGoogle(){
    const app = initializeApp(environment.firebase);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then(async (result) => {

      // The signed-in user info.
      const user = result.user;
      
      // Checks if user exists
      const Ref = collection(this.db, "users");
      const q = query(Ref, where("email", "==", user.email));
      const querySnapshot = getDocs(q);

      //if it doesn´t exist, it is created
      if((await querySnapshot).empty){
        await addDoc( collection(this.db, "users"), {
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          image: user.photoURL,
        } )
        console.log("user doesnt exist")
      }else{
        console.log("user exists" + "\n" + 
                    "name: " + user.displayName + "\n" + 
                    "email: " + user.email + "\n" +
                    "uid: " + user.uid + "\n" + 
                    "photo: " + user.photoURL)
      }

      this.router.navigate(["home"]);

    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }
}
