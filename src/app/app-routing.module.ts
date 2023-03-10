import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/about/blog/blog.component';
import { NewsComponent } from './components/about/news/news.component';
import { OurTeamComponent } from './components/about/our-team/our-team.component';
import { CareerDetailsComponent } from './components/careers/career-details/career-details.component';
import { JobFormComponent } from './components/careers/career-details/job-form/job-form.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent },
  {path:'our-team', component:OurTeamComponent},
  {path:'blog', component:BlogComponent},
  {path:'news', component:NewsComponent},
  {path:'careers', component:CareersComponent},
  {path:'job-details/:id', component:CareerDetailsComponent},
  {path:'job-form', component:JobFormComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
