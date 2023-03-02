import { PaymentMethod, PaymentStatus, SubscriptionPlan } from "@andika/model";
import { UserService } from "../user/user.service";

export class PaymentService {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    /**
     * Handle the payment process for a user's subscription plan
     * @param userId - the id of the user making the payment
     * @param subscriptionPlan - the subscription plan the user is paying for
     * @param paymentMethod - the payment method the user is using (Stripe or Mpesa)
     * @returns a PaymentStatus indicating the success or failure of the payment
     */
    public async processPayment(userId: string, subscriptionPlan: string, paymentMethod: string): Promise<PaymentStatus> {
        const user = await this.userService.getUserById(userId);
        // if (!user) {
        //     return PaymentStatus.UserNotFound;
        // }

        if (paymentMethod === PaymentMethod.BANK) {
            // implement logic to process payment with Stripe
        } else if (paymentMethod === PaymentMethod.MPESA) {
            // implement logic to process payment with Mpesa
        }

        // update user's subscription status and subscription dates in the database

        return PaymentStatus.SUCCESS;
    }
    
      async handleBankPayment(
    amount: number,
    currency: string,
    source: string
  ): Promise<void> {
    // const charge = await this.stripe.charges.create({
    //   amount,
    //   currency,
    //   source,
    //   description: 'AI Writing Assistant Subscription',
    // });

    // console.log(`Stripe payment succeeded with charge id: ${charge.id}`);
  }
    
    
      async handleMpesaPayment(phoneNumber: string, amount: number): Promise<void> {
    // try {
    //   const response = await axios.post(process.env.MPESA_API_URL, {
    //     phoneNumber,
    //     amount,
    //   });

    //   console.log(`MPESA payment succeeded with transaction id: ${response.data.transactionId}`);
    // } catch (error) {
    //   console.error(`MPESA payment failed: ${error.message}`);
    // }
  }
}





// import * as firebase from "firebase/app";
// import "firebase/firestore";

// export class PaymentService {
//   private firestore: firebase.firestore.Firestore;

//   constructor() {
//     this.firestore = firebase.firestore();
//   }

//   async createPayment(userId: string, paymentData: PaymentData): Promise<void> {
//     return this.firestore.collection("payments").doc(userId).set(paymentData);
//   }

//   async getPayment(userId: string): Promise<PaymentData | undefined> {
//     const paymentDoc = await this.firestore.collection("payments").doc(userId).get();
//     return paymentDoc.data() as PaymentData;
//   }

//   async updatePayment(userId: string, paymentData: PaymentData): Promise<void> {
//     return this.firestore.collection("payments").doc(userId).update(paymentData);
//   }
// }

// interface PaymentData {
//   subscriptionId: string;
//   subscriptionStartDate: firebase.firestore.Timestamp;
//   subscriptionEndDate: firebase.firestore.Timestamp;
//   paymentMethod: string;
//   amountPaid: number;
// }