import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DesignComponent } from './pages/design/design.component';
import { ConceptComponent } from './pages/concept/concept.component';
import { FormalitiesComponent } from './pages/formalities/formalities.component';
import { ManagementComponent } from './pages/management/management.component';
import { TechComponent } from './pages/tech/tech.component';
import { PrototypeComponent } from './pages/prototype/prototype.component';

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
    {
        path: 'concept',
        component: ConceptComponent
    },
    {
        path: 'concept/:article',
        component: ConceptComponent
    },
    {
        path: 'formalities',
        component: FormalitiesComponent
    },
    {
        path: 'formalities:article',
        component: FormalitiesComponent
    },
    {
        path: 'management',
        component: ManagementComponent
    },
    {
        path: 'management/:article',
        component: ManagementComponent
    },
    {
        path: 'technology',
        component: TechComponent
    },
    {
        path: 'technology/:article',
        component: TechComponent
    },
    {
        path: 'prototype',
        component: PrototypeComponent
    },
    {
        path: 'prototype/:article',
        component: PrototypeComponent
    }
];


@NgModule({
  imports: [RouterModule.forRoot(App_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

