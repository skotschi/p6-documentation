# P6Documentation

This project is used as a base for project documentation development. 
When developing for this project, you will mostly want to do one of two things:
* create a general, reusable component such as a header, a comment area, a profile picture...
* create a page to display content that is reachable via routing.

## 1 Creating a reusable component
Navigate into `src/app/theme/components` in your commandline. *Inside* this folder, run `ng generate component [component name]` to create the necessary files and folders. This command will create 4 files for you in a folder named like your component. Put HTML markup inside the `.html` styling inside `.scss` and logic inside `.ts`.

## 2 Adding a page
Navigate into `src/app/pages` in your commandline. *Inside* this folder, run `ng generate component [page name]` to create the necessary files and folders. Then go into `src/app/app.routing.ts` to create a url for your page.

# Angular CLi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
