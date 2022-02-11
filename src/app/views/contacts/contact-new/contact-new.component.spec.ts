import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactNewComponent } from './contact-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromContacts from '@app/contacts-store';
import { RouterTestingModule } from '@angular/router/testing';
import { Actions } from '@ngrx/effects';
import { ContactFormComponent } from '@app/core/components/contact-form/contact-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContactsStore } from '@app/contacts-store/contacts.store';
import { Router } from '@angular/router';

describe('ContactNewComponent', () => {
  let component: ContactNewComponent;
  let fixture: ComponentFixture<ContactNewComponent>;
  let contactsStore: ContactsStore;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactNewComponent, ContactFormComponent],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot([]),
        StoreModule.forFeature('contacts', fromContacts.reducers),
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        Actions,
        ContactsStore
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    contactsStore = fixture.debugElement.injector.get(ContactsStore);
    router = fixture.debugElement.injector.get(Router);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
