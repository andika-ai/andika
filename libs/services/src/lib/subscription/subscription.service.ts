import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { last, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/compat/firestore';
import { Subscription, User } from '@andika/model'
import { UserService } from '../user/user.service';

@Injectable()
export class SubscriptionService {
    private subscriptionsCollection: AngularFirestoreCollection<Subscription>;
    subscriptions$: Observable<Subscription[]>;
    constructor(private _afs: AngularFirestore, private userService: UserService) {
        this.subscriptionsCollection = this._afs.collection<Subscription>('subscriptions');
        this.subscriptions$ = this.subscriptionsCollection.snapshotChanges().pipe(
            map(actions =>
                actions.map(a => {
                    const data = a.payload.doc.data() as Subscription;
                    const id = a.payload.doc.id;
                    return { id, ...data };
                })
            )
        );
    }


    addUserSubscription(subscription: Subscription): Promise<DocumentReference<Subscription>> {
        const subscriptionId = this._afs.createId();
        return this.subscriptionsCollection.doc(subscriptionId).set(subscription).then(() => {
            return this.subscriptionsCollection.doc(subscriptionId).ref;
        });
    }

    getSubscriptionsByUserId(userId: string): Promise<Subscription[]>{
        // Get a reference to the subscriptions collection
        const subscriptionsRef = this._afs.collection('subscriptions');
    
        // Query for subscriptions where user_id  is equal to userId
        const query = subscriptionsRef.ref.where('user_id', '==', userId)
    
        // Return a Promise of the query snapshot
        return new Promise((resolve, reject) => {
            query.get()
            .then((querySnapshot) => {
                const subscriptions = [] as Subscription[];
                querySnapshot.forEach((doc: any) => {
                    // Add each document to the array of subscriptions
                    subscriptions.push({ id: doc.id, ...doc.data() });
                });
                resolve(subscriptions);
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
    


    getAllUserSubscription(): Observable<Subscription[]> {
        return this.subscriptions$;
    }

    // TODO: brings errors endless loop
    updateUserSubscription(subscription: Subscription): Promise<void> {
        return this.subscriptionsCollection.doc(subscription.id).update(subscription);
    }

    deleteUserSubscription(subscription: Subscription): Promise<void> {
        return this.subscriptionsCollection.doc(subscription.id).delete();
    }

}
