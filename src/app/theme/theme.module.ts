import { NgModule } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { PostComponent } from './components/post/post.component';

import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { PagesService } from './services/pages.service';
import { NavigationComponent } from './components/navigation/navigation.component';


// Entry Points
const DIRECTIVES = [
];

// Components
const COMPONENTS = [
  PostComponent,
  NavigationComponent
];

// modules
const MODULES = [
  RouterModule,
  HttpModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MODULES
  ],
  declarations: [
    ...DIRECTIVES,
    ...COMPONENTS,
    NavigationComponent,
  ],
  entryComponents: [
    ...DIRECTIVES
  ],
  providers: [
    AsyncPipe,
    PagesService
  ],
  exports: [
    ...DIRECTIVES,
    ...COMPONENTS,
    ...MODULES
  ],
})
export class ThemeModule { }
