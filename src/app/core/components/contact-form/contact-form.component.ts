import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Contact } from '@app/core/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent implements OnInit, OnChanges {

  @Input() contact: Contact = {
    id: 0,
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    isFavorite: false
  };

  @Output() save = new EventEmitter<Contact>();
  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [this.contact.id],
      firstName: [this.contact.firstName, Validators.required],
      lastName: [this.contact.lastName, Validators.required],
      email: [this.contact.email, Validators.required],
      phone: [this.contact.phone],
      isFavorite: [this.contact.isFavorite]
    });
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.contact) {
      this.form.patchValue({ ...this.contact });
    }
  }

  submit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }

}
