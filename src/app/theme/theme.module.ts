import { NgModule } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { PostComponent } from './components/post/post.component';

import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { PagesService } from './services/pages.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


// Entry Points
const DIRECTIVES = [
]

// Components
const COMPONENTS = [
  PostComponent,
  NavbarComponent,
  SidebarComponent,
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
    NavbarComponent,
    SidebarComponent,
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
