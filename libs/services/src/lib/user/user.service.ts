import { EnvironmentProvider } from '@andika/config';
import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    // private usersCollection: AngularFirestoreCollection<User>;
    // users$: Observable<User[]>;
    constructor(
        private _http: HttpClient,
        private _environmentProvider: EnvironmentProvider
        ) {}


    updateUser(payload: any, baseUrl: string): Observable<Object> {
        const url = `${baseUrl}/update_user/`;
        return this._http.post(url, payload);
    }

    userChangePassword(userId: string, payload: any, baseUrl: string): Observable<Object> {
        // verify email
        const url = `${baseUrl}/change-password/`;
        return this._http.post(url, payload);
    }


    userChangeEmail(userId: string, payload: any, baseUrl: string): Observable<Object> {
        // verify email
        const url = `${baseUrl}/change-email/`;
        return this._http.post(url, payload);
    }

    get activeUser(): Observable<Object> {
        const url = `${this._environmentProvider.environment.apiRoot}/active-user/`;
        return this._http.get(url);
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