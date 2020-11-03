import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { NgwWowModule } from 'ngx-wow';
import { AngularFireModule } from '@angular/fire';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { environment } from 'src/app/service/firebase';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnackBarComponent } from './contact/snack-bar/snack-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent,
    SnackBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
