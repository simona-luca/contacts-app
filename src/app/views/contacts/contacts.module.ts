import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { SharedModule } from '@app/core/modules/shared.module';
import { ContactsRoutingModule } from './contacts-routing.module';
import { StoreModule } from '@ngrx/store';
import { ContactsStore } from '@app/contacts-store/contacts.store';
import { reducers } from '@app/contacts-store';
import { ContactsServiceMock } from './services/contacts-mock.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContactsRoutingModule,
    StoreModule.forFeature('contacts', reducers)
  ],
  declarations: [
    ContactsComponent,
    ContactEditComponent,
    ContactNewComponent
  ],
  exports: [
    ContactsComponent
  ],
  providers: [ContactsStore, ContactsServiceMock]
})
export class ContactsModule {
}
