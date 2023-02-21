import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CareersComponent } from './components/careers/careers.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { OurTeamComponent } from './components/about/our-team/our-team.component';
import { BlogComponent } from './components/about/blog/blog.component';
import { NewsComponent } from './components/about/news/news.component';
import { CareerItemComponent } from './components/careers/career-item/career-item.component';
import { CareerDetailsComponent } from './components/careers/career-details/career-details.component';
import { CareersService } from './components/careers/careers.service';
import { JobFormComponent } from './components/careers/career-details/job-form/job-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    CareersComponent,
    FooterComponent,
    HomeComponent,
    OurTeamComponent,
    BlogComponent,
    NewsComponent,
    CareerItemComponent,
    CareerDetailsComponent,
    JobFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [CareersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
