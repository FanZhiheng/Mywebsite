import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SeniordesignPageComponent } from './pages/seniordesign-page/seniordesign-page.component'
import { ContectPageComponent } from './pages/contect-page/contect-page.component';
import { ResumeComponent } from './pages/resume/resume.component';

const routes: Routes = [
  {path: '', redirectTo: '/landingpage', pathMatch: 'full'},
  {path: 'landingpage', component: LandingPageComponent,data: { animation: 'isLeft'}},
  {path: 'seniordesign', component: SeniordesignPageComponent, data: { animation: 'isRight'}},
  {path: 'contect', component: ContectPageComponent, data: {animation: 'isLeft'}},
  {path: 'resume', component: ResumeComponent, data: {animation: 'isRight'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
