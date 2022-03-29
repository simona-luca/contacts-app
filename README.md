# ContactsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Code Challenge - Contacts App

Technologies to be used:
- Angular (v9+) & Material
- NGRx store & Rxjs

The app will have one page, the Contacts Page.

Contact entity contains: firstName, lastName, email, phone, favourite.

Contacts Page needs to contain:
- header with search field + Add Contact button
- table with contacts:
    - columns for each field + Actions for Edit/Delete
    - favourite column with star icon and option to toggle the favourite field
    - Add/Edit Contact dialog
    - confirm Delete Contact dialog

All CRUD actions need to be linked to store;

The following should be used:
- lazy loaded modules
- reactive forms ( + validators for email/phone )
- use of interfaces/services
- use of store
