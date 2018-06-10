import { NgModule } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { PostComponent } from './components/post/post.component';

import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { PageService } from './services/page.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';


// Entry Points
const DIRECTIVES = [
]

// Components
const COMPONENTS = [
  PostComponent,
  NavigationComponent,
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
    HeaderComponent,
  ],
  entryComponents: [
    ...DIRECTIVES
  ],
  providers:[
    AsyncPipe,
    PageService
  ],
  exports: [
    ...DIRECTIVES,
    ...COMPONENTS,
    ...MODULES
  ],
})
export class ThemeModule { }
