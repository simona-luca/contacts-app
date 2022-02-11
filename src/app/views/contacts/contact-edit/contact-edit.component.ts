import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Contact } from '@app/core/models';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { ContactsStore } from '@app/contacts-store/contacts.store';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactEditComponent implements OnInit {

  contact$ = this.activatedRoute.params.pipe(
    map(params => params.contactId),
    switchMap(id => this.contactsStore.getContactById(id))
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private contactsStore: ContactsStore
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // update our id from the backend in case it was modified by another client
      this.contactsStore.loadContact(+params.contactId);
    });
  }

  submitted(contact: Contact) {
    this.contactsStore.updateContact(contact);
  }

}
