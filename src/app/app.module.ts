import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './_shared/components/loading/loading.component';
import { MaterialModule } from './_shared/modules/material.module';
import { FontawesomeModule } from './_shared/modules/fontawesome.module';
import { MaskPhoneDirective } from './_shared/directives/mask-phone.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './_shared/interceptors/loading.interceptor';
import { ErrorInterceptor } from './_shared/interceptors/error.interceptor';
import { ErrorComponent } from './error/error.component';
import { PortraitComponent } from './_shared/components/portrait/portrait.component';
import { SocialsComponent } from './_shared/components/socials/socials.component';
import { EducationsComponent } from './_shared/components/educations/educations.component';
import { ExperiencesComponent } from './_shared/components/experiences/experiences.component';
import { SkillsComponent } from './_shared/components/skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './_shared/components/resume/resume.component';
import { ProjectsComponent } from './_shared/components/projects/projects.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    MaskPhoneDirective,
    ErrorComponent,
    PortraitComponent,
    SocialsComponent,
    EducationsComponent,
    ExperiencesComponent,
    SkillsComponent,
    PortfolioComponent,
    ResumeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontawesomeModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
