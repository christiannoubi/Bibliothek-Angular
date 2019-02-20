import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BibmitarbeiterListComponent } from './bibmitarbeiter-list/bibmitarbeiter-list.component';
import { BibmitgliedEditComponent } from './bibmitglied-edit/bibmitglied-edit.component';
import { BibmitgliedListComponent } from './bibmitglied-list/bibmitglied-list.component';
import { BuchListComponent } from './buch-list/buch-list.component';
import { BuchEditComponent } from './buch-edit/buch-edit.component';
import { HomeComponent } from './home/home.component';
import {BibmitarbeiterEditComponent} from "./bibmitarbeiter-edit/bibmitarbeiter-edit.component";
import {RouterModule, Routes} from "@angular/router";
import {BuchService} from "./shared/buch/buch.service";
import {BibmitgliedService} from "./shared/bibmitglied/bibmitglied.service";
import {BibmitarbeiterService} from "./shared/bibmitarbeiter/bibmitarbeiter.service";
import {HttpClientModule} from "@angular/common/http";
import {MatCheckboxModule, MatToolbarModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/typings/esm5/card";
import {MatButtonModule} from "@angular/material/typings/button";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/typings/input";
import {MatListModule} from "@angular/material/typings/list";

const appRoutes: Routes = [


  {
    path: 'home',component: HomeComponent
  },

  {
    path: 'bibmitarbeiter-list',
    children: [
      {path: '', component: BibmitarbeiterListComponent},
      {path: ':id', component: BibmitarbeiterListComponent}]
  },
  {
    path: 'bibmitarbeiter-add',
    children: [
      {path: '', component: BibmitarbeiterEditComponent},
      {path: ':id', component: BibmitarbeiterEditComponent}]
  },
  {
    path: 'bibmitarbeiter-edit/:id',
    children: [
      {path: '', component: BibmitarbeiterEditComponent},
      {path: ':id', component: BibmitarbeiterEditComponent}]
  },

  {
    path: 'bibmitglied-list',
    component: BibmitgliedListComponent
  },
  {
    path: 'bibmitglied-add',
    component: BibmitgliedEditComponent
  },
  {
    path: 'bibmitglied-edit/:id',
    component: BibmitgliedEditComponent
  },

  {
    path: 'buch-list',
    component: BuchListComponent
  },
  {
    path: 'buch-add',
    component: BuchEditComponent
  },
  {
    path: 'buch-edit/:id',
    component: BuchEditComponent
  },
  {
    path: '',redirectTo: '/home', pathMatch: 'full'

  },
  {
    path: '**',redirectTo:'/home' ,pathMatch:'full'
  },

];

@NgModule({
  declarations: [
    AppComponent,
    BibmitarbeiterEditComponent,
    BibmitarbeiterListComponent,
    BibmitgliedEditComponent,
    BibmitgliedListComponent,
    BuchListComponent,
    BuchEditComponent,
    HomeComponent,
    MatButtonModule,
    MatCheckboxModule
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [BuchService, BibmitgliedService, BibmitarbeiterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
