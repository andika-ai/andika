
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { last, map } from 'rxjs/operators';

import { OrgOpenAISubscription } from '@andika/model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/compat/firestore';



@Injectable()
export class OrgTokenManagementService {
    monthlyLimit = 0;
    totalTokens = 0;
    remainingTokens = 0
    lastTopUp = 0;


    // private subscriptionsCollection: AngularFirestoreCollection<OrgOpenAISubscription>;
    // subscriptions$: Observable<OrgOpenAISubscription[]>;
    private subscriptionsCollection: AngularFirestoreCollection<OrgOpenAISubscription>;
    subscriptions$: Observable<OrgOpenAISubscription[]>;

    constructor(private _afs: AngularFirestore) {
        this.subscriptionsCollection = this._afs.collection<OrgOpenAISubscription>('org_subscriptions');
        this.subscriptions$ = this.subscriptionsCollection.snapshotChanges().pipe(
            map(actions =>
                actions.map(a => {
                    const data = a.payload.doc.data() as OrgOpenAISubscription;
                    const id = a.payload.doc.id;
                    return { id, ...data };
                })
            )
        );
    }

    addSubscription(subscription: OrgOpenAISubscription): Promise<DocumentReference<OrgOpenAISubscription>> {
        const subscriptionId = this._afs.createId();
        return this.subscriptionsCollection.doc(subscriptionId).set(subscription).then(() => {
            return this.subscriptionsCollection.doc(subscriptionId).ref;
        });
    }

    getAllSubscription(): Observable<OrgOpenAISubscription[]> {
        return this.subscriptions$;
    }

    updateSubscription(subscription: OrgOpenAISubscription): Promise<void> {
        return this.subscriptionsCollection.doc(subscription.id).update(subscription);
    }

    deleteSubscription(subscription: OrgOpenAISubscription): Promise<void> {
        return this.subscriptionsCollection.doc(subscription.id).delete();
    }

    getLatestSubscription(): Observable<OrgOpenAISubscription> {
        return this.subscriptions$.pipe(
            last(),
            map(subscriptions => subscriptions[0])
        );
    }


    // private _updateRemainingTokens(tokensUsed: number): void {
    //     const currentDate = new Date();
    //     const timeSinceLastTopUp = currentDate.getTime() - this.lastTopUp.getTime();
    //     const daysSinceLastTopUp = Math.floor(timeSinceLastTopUp / (1000 * 60 * 60 * 24));
    //     const tokensToAdd = Math.min(this.monthlyLimit, this.totalTokens - this.remainingTokens);
    //     const newRemainingTokens = Math.max(0, this.remainingTokens - tokensUsed);

    //     if (daysSinceLastTopUp > 30 && tokensToAdd > 0) {
    //         this.remainingTokens += tokensToAdd;
    //         this.lastTopUp = currentDate;
    //     }

    //     this.remainingTokens = newRemainingTokens;
    // }

}



