import { SignUpComponent } from './users/sign-up/sign-up.component';
import { LoginComponent } from './users/login/login.component';
import { UpdateTeacherComponent } from './teachers/update-teacher/update-teacher.component';
import { CreateTeacherComponent } from './teachers/create-teacher/create-teacher.component';
import { ListTeacherComponent } from './teachers/list-teacher/list-teacher.component';
import { UpdateStudentComponent } from './Student/update-student/update-student.component';
import { ShowStudentComponent } from './Student/show-student/show-student.component';
import { CreateStudentComponent } from './Student/create-student/create-student.component';
import { ListStudentComponent } from './Student/list-student/list-student.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { WhyUsComponent } from './main/why-us/why-us.component';
import { TeamComponent } from './main/team/team.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { ServicesComponent } from './main/services/services.component';
import { AboutComponent } from './main/about/about.component';
import { HeroComponent } from './hero/hero.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // UI Routes
  { path: "home/:name", component: HeroComponent },
  { path: "", component: LoginComponent },
  { path: "about", component: AboutComponent },
  { path: "services", component: ServicesComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "team", component: TeamComponent },
  { path: "why-us", component: WhyUsComponent },
  { path: "404", component: NotFoundComponent },
  // Student
  { path: "listStudent", component: ListStudentComponent },
  { path: "createStudent", component: CreateStudentComponent },
  { path: "showStudent/:id", component: ShowStudentComponent },
  { path: "editStudent/:id", component: UpdateStudentComponent },
  // Teachers
  { path: "listTeacher", component: ListTeacherComponent },
  { path: "createTeacher", component: CreateTeacherComponent },
  { path: "editTeacher/:id", component: UpdateTeacherComponent },
  // Users
  { path: "login", component: LoginComponent },
  { path: "signUp", component: SignUpComponent },
  // NotFound
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
