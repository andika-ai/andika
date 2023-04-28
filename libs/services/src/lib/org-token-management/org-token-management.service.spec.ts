import { TestBed } from '@angular/core/testing';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { of } from 'rxjs';
import {OrgTokenManagementService } from './org-token-management.service';
import { OrgOpenAISubscription } from '@andika/model';

describe('SubscriptionService', () => {
  let service: OrgTokenManagementService;
  let mockCollection: Partial<AngularFirestoreCollection<OrgOpenAISubscription>>;

  beforeEach(() => {
    mockCollection = {
      add: jasmine.createSpy().and.returnValue(Promise.resolve({ id: 'abc123' })),
      doc: jasmine.createSpy().and.returnValue({
        update: jasmine.createSpy().and.returnValue(Promise.resolve()),
        delete: jasmine.createSpy().and.returnValue(Promise.resolve())
      })
    };

    TestBed.configureTestingModule({
      providers: [
        OrgTokenManagementService,
        {
          provide: AngularFirestore,
          useValue: { collection: jasmine.createSpy().and.returnValue(mockCollection) }
        }
      ]
    });

    service = TestBed.inject(OrgTokenManagementService);
  });

  it('should add a subscription', async () => {
    const item: OrgOpenAISubscription = {
      id: '123',
      apiKey: 'abc',
      totalTokens: 1000,
      remainingTokens: 750,
      monthlyLimit: 500,
      lastTopUp: new Date('2022-03-21'),
      created: new Date('2022-03-01'),
      modified: new Date('2022-03-15'),
      createdBy: 'John Doe',
    };
    await service.addSubscription(item);
    expect(mockCollection.add).toHaveBeenCalledWith({ ...item, createdAt: jasmine.any(Date), createdBy: jasmine.any(String) });
  });

  // it('should update a subscription', async () => {
  //   const item: OrgOpenAISubscription = {
  //     id: '123',
  //     apiKey: 'abc',
  //     totalTokens: 1000,
  //     remainingTokens: 750,
  //     monthlyLimit: 500,
  //     lastTopUp: new Date('2022-03-21'),
  //     created: new Date('2022-03-01'),
  //     modified: new Date('2022-03-15'),
  //     createdBy: 'John Doe',
  //   };
  //   await service.updateSubscription(item);
  //   expect(mockCollection.doc).toHaveBeenCalledWith('123');
  //   expect(mockCollection.doc('123').update).toHaveBeenCalledWith({ ...item, updatedAt: jasmine.any(Date), updatedBy: jasmine.any(String) });
  // });

  // it('should delete a subscription', async () => {
  //   const item: OrgOpenAISubscription = { id: '123', apiKey: 'abc', totalTokens: 10 };
  //   await service.deleteSubscription(item);
  //   expect(mockCollection.doc).toHaveBeenCalledWith('123');
  //   expect(mockCollection.doc('123').delete).toHaveBeenCalled();
  // });
});
