import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './main/about/about.component';
import { ServicesComponent } from './main/services/services.component';
import { WhyUsComponent } from './main/why-us/why-us.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { TeamComponent } from './main/team/team.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ListStudentComponent } from './Student/list-student/list-student.component';
import { CreateStudentComponent } from './Student/create-student/create-student.component';
import { UpdateStudentComponent } from './Student/update-student/update-student.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ShowStudentComponent } from './Student/show-student/show-student.component';
import { ListTeacherComponent } from './teachers/list-teacher/list-teacher.component';
import { CreateTeacherComponent } from './teachers/create-teacher/create-teacher.component';
import { UpdateTeacherComponent } from './teachers/update-teacher/update-teacher.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';
import { LoginComponent } from './users/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    WhyUsComponent,
    PortfolioComponent,
    TeamComponent,
    NotFoundComponent,
    ListStudentComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    ShowStudentComponent,
    ListTeacherComponent,
    CreateTeacherComponent,
    UpdateTeacherComponent,
    SignUpComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
