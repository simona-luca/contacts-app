import { NgModule } from '@angular/core';
import { ContactListComponent } from '../components/contact-list/contact-list.component';
import { ContactFormComponent } from '../components/contact-form/contact-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    ContactListComponent,
    ContactFormComponent
  ],
  exports: [
    ContactListComponent,
    ContactFormComponent
  ]
})
export class SharedModule {
}
