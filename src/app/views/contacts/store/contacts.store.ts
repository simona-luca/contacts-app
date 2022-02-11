import { Injectable } from '@angular/core';
import * as fromContacts from '@app/contacts-store';
import { select, Store } from '@ngrx/store';
import { Contact } from '@app/core/models';
import { create, load, remove, update } from '@app/contacts-store/contacts-actions';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ContactsStore {

  contacts$ = new BehaviorSubject([]);

  // contacts$ = this.store.pipe(select(fromContacts.getAllContacts));

  constructor(private store: Store<fromContacts.ContactsState>) {
  }

  loadContact(id: number) {
    this.store.dispatch(load({ id }));
  }

  createContact(contact: Contact) {
    this.store.dispatch(create({ contact }));
  }

  updateContact(contact: Contact) {
    this.store.dispatch(update({ contact }));
  }

  deleteContact(id: number) {
    this.store.dispatch(remove({ id }));
  }

  getContactById(id: number) {
    return this.store.pipe(
      select(fromContacts.getContactById(id))
    );
  }
}
