import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListComponent } from './contact-list.component';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should call edit.emit when editContact calls', () => {
    spyOn(component.edit, 'emit');
    const contact = {
      id: 1,
      lastName: 'test',
      firstName: 'test 2',
      email: 'test@gmail.com',
      phone: '12345',
      isFavorite: false
    };
    component.editContact(contact);
    expect(component.edit.emit).toHaveBeenCalledWith(contact);
  });

  it('should call remove.emit when deleteContact calls', () => {
    spyOn(component.remove, 'emit');
    const contact = {
      id: 1,
      lastName: 'test',
      firstName: 'test 2',
      email: 'test@gmail.com',
      phone: '12345',
      isFavorite: true
    };
    component.deleteContact(contact);
    expect(component.remove.emit).toHaveBeenCalledWith(contact);
  });
});

