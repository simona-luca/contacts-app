import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactEditComponent } from './contact-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import * as fromContacts from '@app/contacts-store';
import { Actions } from '@ngrx/effects';
import { ContactFormComponent } from '@app/core/components/contact-form/contact-form.component';
import { ContactsStore } from '@app/contacts-store/contacts.store';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContactEditComponent', () => {
  let component: ContactEditComponent;
  let fixture: ComponentFixture<ContactEditComponent>;
  let contactsStore: ContactsStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactEditComponent, ContactFormComponent],
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
    fixture = TestBed.createComponent(ContactEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    contactsStore = fixture.debugElement.injector.get(ContactsStore);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

