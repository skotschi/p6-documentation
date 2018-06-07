import { NgModule } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { PostComponent } from './components/post/post.component';

import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { PagesService } from './services/pages.service';


// Entry Points
const DIRECTIVES = [
]

// Components
const COMPONENTS = [
  PostComponent,
]

// modules
const MODULES = [
  RouterModule,
  HttpModule
]

@NgModule({
  imports: [
    CommonModule,
    ...MODULES
  ],
  declarations: [
    ...DIRECTIVES,
    ...COMPONENTS,
  ],
  entryComponents: [
    ...DIRECTIVES
  ],
  providers:[
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
