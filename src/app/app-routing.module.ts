import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InternshipRComponent } from './internship-r/internship-r.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RequestComponent } from './request/request.component';
import { RequestedComponent } from './requested/requested.component';
import { InternListComponent } from './intern-list/intern-list.component';
import { UplComponent } from './upl/upl.component';
import { UprequestComponent } from './uprequest/uprequest.component';
import { AcceptedComponent } from './accepted/accepted.component';
import { RefusedComponent } from './refused/refused.component';
import { PendingComponent } from './pending/pending.component';
import { AbsComponent } from './abs/abs.component';
import { AffectComponent } from './affect/affect.component';
import { ListAbsComponent } from './list-abs/list-abs.component';
import { UpesComponent } from './upes/upes.component';
import { AdReqComponent } from './ad-req/ad-req.component';
import { AdInternComponent } from './ad-intern/ad-intern.component';
import { UpReqComponent } from './up-req/up-req.component';
import { UpInternComponent } from './up-intern/up-intern.component';
import { AbsenceComponent } from './absence/absence.component';
import { AdAbsenceComponent } from './ad-absence/ad-absence.component';
import { AdUserComponent } from './ad-user/ad-user.component';
import { UpUserComponent } from './up-user/up-user.component';
import { LoginadComponent } from './loginad/loginad.component';
import { TopicComponent } from './topic/topic.component';
import { TutorComponent } from './tutor/tutor.component';
import { UpToComponent } from './up-to/up-to.component';
import { UpTuComponent } from './up-tu/up-tu.component';
import { SpecialityComponent } from './speciality/speciality.component';
import { LevelComponent } from './level/level.component';
import { UpLevelComponent } from './up-level/up-level.component';
import { UpSpecComponent } from './up-spec/up-spec.component';
import { NbComponent } from './nb/nb.component';


const routes: Routes = [
  
  {path:'internship-r',component:InternshipRComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'loginad',component:LoginadComponent},
  {path:'request',component:RequestComponent},
  {path:'requested',component:RequestedComponent},
  {path:'intern-list',component:InternListComponent},
  {path:'intern-list/:key',component:UplComponent},
  {path:'request/:key',component:UprequestComponent},
  {path:'accepted',component:AcceptedComponent},
  {path:'refused',component:RefusedComponent},
  {path:'pending',component:PendingComponent},
  {path:'accepted/:key',component:AbsComponent},
  {path:'affect',component:AffectComponent},
  {path:'list-abs',component:ListAbsComponent},
  {path:'requested/:key',component:UpesComponent},
  {path:'ad-req',component:AdReqComponent},
  {path:'ad-intern',component:AdInternComponent},
  {path:'ad-req/:key',component:UpReqComponent},
  {path:'ad-intern/:key',component:UpInternComponent},
  {path:'ad-absence',component:AdAbsenceComponent},
  {path:'ad-absence/:key',component:AbsenceComponent},
  {path:'ad-user',component:AdUserComponent},
  {path:'ad-user/:key',component:UpUserComponent},
  {path:'topic',component:TopicComponent},
  {path:'tutor',component:TutorComponent},
  {path:'topic/:key',component:UpToComponent},
  {path:'tutor/:key',component:UpTuComponent},
  {path:'speciality',component:SpecialityComponent},
  {path:'level',component:LevelComponent},
  {path:'level/:key',component:UpLevelComponent},
  {path:'speciality/:key',component:UpSpecComponent},
  {path:'nb',component:NbComponent},
  
  
 
]

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
