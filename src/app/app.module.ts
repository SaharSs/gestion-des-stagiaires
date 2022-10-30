import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { InternshipRComponent } from './internship-r/internship-r.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LoginadComponent } from './loginad/loginad.component';
import { RegisteradComponent } from './registerad/registerad.component';
import { RequestComponent } from './request/request.component';
import { RequestedComponent } from './requested/requested.component';
import { InternListComponent } from './intern-list/intern-list.component';
import { UplComponent } from './upl/upl.component';
import { UprequestComponent } from './uprequest/uprequest.component';
import { PendingComponent } from './pending/pending.component';
import { AcceptedComponent } from './accepted/accepted.component';
import { RefusedComponent } from './refused/refused.component';
import { AbsComponent } from './abs/abs.component';
import { AffectComponent } from './affect/affect.component';
import { ListAbsComponent } from './list-abs/list-abs.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UpesComponent } from './upes/upes.component';
import { AdReqComponent } from './ad-req/ad-req.component';
import { AdInternComponent } from './ad-intern/ad-intern.component';
import { UpReqComponent } from './up-req/up-req.component';
import { UpInternComponent } from './up-intern/up-intern.component';
import { AbsenceComponent } from './absence/absence.component';
import { AdAbsenceComponent } from './ad-absence/ad-absence.component';
import { AdUserComponent } from './ad-user/ad-user.component';
import { UpUserComponent } from './up-user/up-user.component';
import { TopicComponent } from './topic/topic.component';
import { TutorComponent } from './tutor/tutor.component';
import { UpToComponent } from './up-to/up-to.component';
import { UpTuComponent } from './up-tu/up-tu.component';
import { SpecialityComponent } from './speciality/speciality.component';
import { LevelComponent } from './level/level.component';
import { UpLevelComponent } from './up-level/up-level.component';
import { UpSpecComponent } from './up-spec/up-spec.component';
import { NbComponent } from './nb/nb.component';
import { StockComponent } from './stock/stock.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    InternshipRComponent,
    NavbarComponent,
    LoginComponent,
    LoginadComponent,
    RegisteradComponent,
    RequestComponent,
    RequestedComponent,
    InternListComponent,
    UplComponent,
    UprequestComponent,
    PendingComponent,
    AcceptedComponent,
    RefusedComponent,
    AbsComponent,
    AffectComponent,
    ListAbsComponent,
    UpesComponent,
    AdReqComponent,
    AdInternComponent,
    UpReqComponent,
    UpInternComponent,
    AbsenceComponent,
    AdAbsenceComponent,
    AdUserComponent,
    UpUserComponent,
    TopicComponent,
    TutorComponent,
    UpToComponent,
    UpTuComponent,
    SpecialityComponent,
    LevelComponent,
    UpLevelComponent,
    UpSpecComponent,
    NbComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    Ng2SearchPipeModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
