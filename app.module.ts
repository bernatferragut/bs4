import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule,
        MdCardModule,
        MdMenuModule,
        MdToolbarModule,
        MdIconModule,
        MdInputModule } from '@angular/material';
import 'hammerjs';
import { router } from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { Canvas1Component } from './canvas1/canvas1.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    Canvas1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    RouterModule.forRoot(router, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
