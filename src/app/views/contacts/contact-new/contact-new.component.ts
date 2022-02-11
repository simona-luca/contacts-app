import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Contact } from '@app/core/models';
import { Router } from '@angular/router';
import { ContactsStore } from '@app/contacts-store/contacts.store';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactNewComponent {

  constructor(
    private contactsStore: ContactsStore,
    private router: Router
  ) {
  }

  submitted(contact: Contact) {
    this.contactsStore.createContact(contact);
    this.router.navigate(['/contacts']);
  }

}
