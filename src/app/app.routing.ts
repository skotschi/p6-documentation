import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DesignComponent } from './pages/design/design.component';

const App_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'design',
        component: DesignComponent
    },
    {
        path: 'design/:article',
        component: DesignComponent
    },
];


@NgModule({
  imports: [RouterModule.forRoot(App_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

