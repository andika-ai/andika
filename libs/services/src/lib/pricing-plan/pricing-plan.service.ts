import { PricingPlan } from '@andika/model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable()
export class PricingPlanService {
    private pricingPlans: Observable<PricingPlan[]>;
    private pricingPlanCollection: AngularFirestoreCollection<PricingPlan>;
    constructor(private readonly afs: AngularFirestore) {
        this.pricingPlanCollection = this.afs.collection<PricingPlan>('pricing_plans');
        this.pricingPlans = this.pricingPlanCollection.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as PricingPlan;
                const id = a.payload.doc.id;
                return { ...data, id }; // Use object destructuring to remove the `id` property before spreading the remaining properties
            }))
        );
    }


    getPricingPlans(): Observable<PricingPlan[]> {
        return this.pricingPlans;
    }

    /**
     * 
     * @param id 
     * @returns  observable
     * 
     * This version of the method first checks if pricingPlan is defined using an if statement. If pricingPlan is defined, it sets the id property and returns the pricingPlan object. If pricingPlan is undefined, it throws an error indicating that the pricing plan with the specified ID was not found. This ensures that the method always returns a defined Observable<PricingPlan>
     */
    getPricingPlanById(id: string): Observable<PricingPlan> {
        return this.pricingPlanCollection.doc<PricingPlan>(id).valueChanges().pipe(
            take(1),
            map(pricingPlan => {
                if (pricingPlan) {
                    pricingPlan.id = id;
                    return pricingPlan;
                } else {
                    throw new Error(`Pricing plan with ID ${id} not found`);
                }
            })
        );
    }


    addPricingPlan(pricingPlan: PricingPlan): Promise<DocumentReference> {
        return this.pricingPlanCollection.add(pricingPlan);
    }

    updatePricingPlan(pricingPlan: PricingPlan): Promise<void> {
        return this.pricingPlanCollection.doc(pricingPlan.id).update(pricingPlan);
    }

    deletePricingPlan(id: string): Promise<void> {
        return this.pricingPlanCollection.doc(id).delete();
    }

}
