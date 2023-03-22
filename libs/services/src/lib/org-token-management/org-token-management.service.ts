
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { OrgOpenAISubscription } from '@andika/model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';



@Injectable()
export class OrgTokenManagementService {
    monthlyLimit = 0;
    totalTokens = 0;
    remainingTokens = 0
    lastTopUp = 0;


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

    addSubscription(subscription: OrgOpenAISubscription) {
        const subscriptionId = this._afs.createId();
        return this._afs.collection('/org_subscriptions').add(subscription)
    }


    updateSubscription(item: OrgOpenAISubscription) {
        this.subscriptionsCollection.doc(item.id).update(item);
    }

    deleteSubscription(item: OrgOpenAISubscription) {
        this.subscriptionsCollection.doc(item.id).delete();
    }

    // private _updateRemainingTokens(tokensUsed: number): void {
    //     const currentDate = new Date();
    //     const timeSinceLastTopUp = currentDate.getTime() - this.lastTopUp.getTime();
    //     const daysSinceLastTopUp = Math.floor(timeSinceLastTopUp / (1000 * 60 * 60 * 24));
    //     const tokensToAdd = Math.min(this.monthlyLimit, this.totalTokens - this.remainingTokens);
    //     const newRemainingTokens = Math.max(0, this.remainingTokens - tokensUsed);

    //     if (daysSinceLastTopUp > 30 && tokensToAdd > 0) {
    //       this.remainingTokens += tokensToAdd;
    //       this.lastTopUp = currentDate;
    //     }

    //     this.remainingTokens = newRemainingTokens;
    //   }

}
