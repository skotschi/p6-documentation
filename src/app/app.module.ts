import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './pages/home/home.component';
import { ThemeModule } from './theme/theme.module';
import { DesignComponent } from './pages/design/design.component';
import { ConceptComponent } from './pages/concept/concept.component';
import { TechComponent } from './pages/tech/tech.component';
import { PrototypeComponent } from './pages/prototype/prototype.component';
import { ManagementComponent } from './pages/management/management.component';
import { FormalitiesComponent } from './pages/formalities/formalities.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DesignComponent,
    ConceptComponent,
    TechComponent,
    PrototypeComponent,
    ManagementComponent,
    FormalitiesComponent,
  ],
  imports: [
    AppRoutingModule,
    ThemeModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
