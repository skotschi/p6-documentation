import { NgModule } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { PostComponent } from './components/post/post.component';

import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { PagesService } from './services/pages.service';
<<<<<<< HEAD
import { NavigationComponent } from './components/navigation/navigation.component';
=======
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
>>>>>>> teamflow


// Entry Points
const DIRECTIVES = [
];

// Components
const COMPONENTS = [
  PostComponent,
<<<<<<< HEAD
  NavigationComponent
];
=======
  NavbarComponent,
  SidebarComponent,
]
>>>>>>> teamflow

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
<<<<<<< HEAD
    NavigationComponent,
=======
    NavbarComponent,
    SidebarComponent,
>>>>>>> teamflow
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
