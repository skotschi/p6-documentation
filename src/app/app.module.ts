import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './pages/home/home.component';
import { ThemeModule } from './theme/theme.module';
import { DesignComponent } from './pages/design/design.component';
import { ManagemenrtComponent } from './pages/managemenrt/managemenrt.component';
import { ManagementComponent } from './pages/management/management.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DesignComponent,
    ManagemenrtComponent,
    ManagementComponent,
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
