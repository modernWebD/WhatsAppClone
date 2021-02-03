import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebaChatComponent } from './sidebar/sideba-chat/sideba-chat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA91dAUGCe1-CJIwC-nbqGW7g7TUOJlo-0",
  authDomain: "whatsappclone-29aef.firebaseapp.com",
  databaseURL: "https://whatsappclone-29aef.firebaseio.com",
  projectId: "whatsappclone-29aef",
  storageBucket: "whatsappclone-29aef.appspot.com",
  messagingSenderId: "735798205812",
  appId: "1:735798205812:web:cc92da5cdcbe959149a021"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    SidebarComponent,
    SidebaChatComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
