import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactsStore } from '@app/contacts-store/contacts.store';
import { Router } from '@angular/router';
import { Contact } from '@app/core/models';
import { ContactsServiceMock } from './services/contacts-mock.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent {
  // contacts$ = this.contactsStore.contacts$;
  contacts$ = this.contactsServiceMock.contacts;

  constructor(private contactsStore: ContactsStore,
              private router: Router,
              private contactsServiceMock: ContactsServiceMock) {
  }

  editContact(contact: Contact) {
    this.router.navigate(['/contacts', contact.id, 'edit']);
  }

  deleteContact(contact: Contact) {
    const r = confirm('Are you sure?');
    if (r) {
      if (contact.id) {
        this.contactsStore.deleteContact(contact.id);
      }
    }
  }
}
