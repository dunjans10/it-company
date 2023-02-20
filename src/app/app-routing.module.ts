import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'careers', component:CareersComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
