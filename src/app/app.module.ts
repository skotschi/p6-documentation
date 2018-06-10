import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './pages/home/home.component';
import { ThemeModule } from './theme/theme.module';
import { DesignComponent } from './pages/design/design.component';
import { ArticleComponent } from './pages/article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DesignComponent,
    ArticleComponent,
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
