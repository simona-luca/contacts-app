import { Observable, of } from 'rxjs';
import { Contact } from '@app/core/models';


export class ContactsServiceMock {

  contacts = [{
    id: 1,
    lastName: 'test',
    firstName: 'test 1',
    email: 'test1@gmail.com',
    phone: '12345',
    isFavorite: true
  }, {
    id: 2,
    lastName: 'test',
    firstName: 'test 2',
    email: 'test2@gmail.com',
    phone: '12345',
    isFavorite: false
  }];

  show(conactId: number): Observable<Contact> {
    return of({
      id: 1,
      lastName: 'test',
      firstName: 'test 2',
      email: 'test@gmail.com',
      phone: '12345',
      isFavorite: true
    });
  }

  create(contact: Contact) {
    return of({
      id: 1,
      lastName: 'test',
      firstName: 'test 2',
      email: 'test@gmail.com',
      phone: '12345',
      isFavorite: true
    });
  }

  destroy(id: number): Observable<number> {
    return of(1);
  }

  update(contact: Contact): Observable<Contact> {
    return of(contact);
  }

}
