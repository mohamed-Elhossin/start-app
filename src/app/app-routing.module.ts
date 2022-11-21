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
  { path: "home", component: HeroComponent },
  { path: "", component: HeroComponent },
  { path: "about", component: AboutComponent },
  { path: "services", component: ServicesComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "team", component: TeamComponent },
  { path: "why-us", component: WhyUsComponent },
  { path: "404", component: NotFoundComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
