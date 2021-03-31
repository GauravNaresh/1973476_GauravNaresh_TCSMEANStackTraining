import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { ScoreComponent } from './score/score.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path:"\start", component: StartComponent},
  {path:"\exam", component: ExamComponent},
  {path:"\score", component:ScoreComponent},
  {path:"", redirectTo: "\start", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
