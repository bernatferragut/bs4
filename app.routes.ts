import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // these are functions

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { Canvas1Component } from './canvas1/canvas1.component';


// Route Configuration Array
export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'canvas1', component: Canvas1Component }
    ]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
