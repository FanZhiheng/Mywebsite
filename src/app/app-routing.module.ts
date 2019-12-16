import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/landingpage', pathMatch: 'full'},
  {path: 'landingpage', component: LandingPageComponent,data: { animation: 'isLeft'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
