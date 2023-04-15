import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutSectionComponent } from './components/about/about-section/about-section.component';
import { ProjectSectionComponent } from './components/projects/project-section/project-section.component';
import { ContactsectionComponent } from './components/contacts/contactsection/contactsection.component';

const routes: Routes = [
  { path: 'about', component: AboutSectionComponent},
  { path: 'projects', component:ProjectSectionComponent},
  { path: 'contacts', component:ContactsectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
