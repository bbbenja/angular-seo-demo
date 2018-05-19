import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamSummaryComponent } from './team-summary/team-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TeamDetailComponent,
    TeamSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
