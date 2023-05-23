
// import { Observable } from 'rxjs';

// import { last, map } from 'rxjs/operators';
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/compat/firestore';
// import { User } from '@andika/model'
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    // private usersCollection: AngularFirestoreCollection<User>;
    // users$: Observable<User[]>;
    constructor(
        // private _afs: AngularFirestore
        ) {
        // this.usersCollection = this._afs.collection<User>('users');
        // this.users$ = this.usersCollection.snapshotChanges().pipe(
        //     map(actions =>
        //         actions.map(a => {
        //             const data = a.payload.doc.data() as User;
        //             const id = a.payload.doc.id;
        //             return { id, ...data };
        //         })
        //     )
        // );
    }


    // get activeUser(){
    //     const user = JSON.parse(localStorage.getItem('user')!);
    //     if(user!==null){
    //         return user;
    //     } else {
    //         return null;
    //     }
    // }

    // getAllUsers(): Observable<User[]> {
    //     return this.users$;
    // }

    // updateUser(user: User): Promise<void> {
    //     return this.usersCollection.doc(user.uid).update(user);
    // }
    
    // // Get a user by ID
    // getUserById(id: string): Observable<any> {
    //     try {
    //         const userRef = this._afs.collection('users').doc(id);
    //         const user = userRef.get();
    //         return user;
    //     } catch (error) {
    //         throw new Error(`Error getting user by ID: ${error}`);
    //     }
    // }

    // // Get a user by email
    // getUserByEmail(email: string): Observable<any> {
    //     try {
    //         const usersRef = this._afs.collection('users', ref=> ref.where('email', '==', email))
    //         .get();
    //         return usersRef;
    //     } catch (error) {
    //         throw new Error(`Error getting user by email: ${error}`);
    //     }
    // }

}