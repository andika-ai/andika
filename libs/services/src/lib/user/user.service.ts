import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


export class UserService {

    constructor(public firestore: AngularFirestore) {
    }

    // Get a user by ID
    getUserById(id: string): Observable<any> {
        try {
            const userRef = this.firestore.collection('users').doc(id);
            const user = userRef.get();
            return user;
        } catch (error) {
            throw new Error(`Error getting user by ID: ${error}`);
        }
    }

    // Get a user by email
    getUserByEmail(email: string): Observable<any> {
        try {
            const usersRef = this.firestore.collection('users', ref=> ref.where('email', '==', email))
            .get();
            return usersRef;
        } catch (error) {
            throw new Error(`Error getting user by email: ${error}`);
        }
    }

    // // Create a new user
    // async createUser(user: {
    //     username: string;
    //     email: string;
    //     password: string;
    //     subscription_status: string;
    //     subscription_start_date: firebase.firestore.Timestamp;
    //     subscription_end_date: firebase.firestore.Timestamp;
    // }): Promise<void> {
    //     try {
    //         const usersRef = this.firestore.collection('users');
    //         await usersRef.add(user);
    //     } catch (error) {
    //         throw new Error(`Error creating user: ${error}`);
    //     }
    // }

    // // Update a user
    // async updateUser(id: string, updates: {
    //     username?: string;
    //     email?: string;
    //     password?: string;
    //     subscription_status?: string;
    //     subscription_start_date?: firebase.firestore.Timestamp;
    //     subscription_end_date?: firebase.firestore.Timestamp;
    // }): Promise<void> {
    //     try {
    //         const userRef = this.firestore.collection('users').doc(id);
    //         await userRef.update(updates);
    //     } catch (error) {
    //         throw new Error(`Error updating user: ${error}`);
    //     }
    // }

    // // Delete a user
    // async deleteUser(id: string): Promise<void> {
    //     try {
    //         const userRef = this.firestore.collection('users').doc(id);
    //         await userRef.delete();
    //     } catch (error) {
    //         throw new Error(`Error deleting user: ${error}`);
    //     }
    // }
}