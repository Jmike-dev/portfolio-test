import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AboutSectionComponent } from './components/about/about-section/about-section.component';
import { ProjectSectionComponent } from './components/projects/project-section/project-section.component';
import { ContactsectionComponent } from './components/contacts/contactsection/contactsection.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutSectionComponent,
    ProjectSectionComponent,
    ContactsectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
