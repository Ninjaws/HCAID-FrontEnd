import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  DevExtremeModule,
  DxPopupModule,
  DxRadioGroupModule,
  DxTabsModule,
} from 'devextreme-angular';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { MostdeadlyComponent } from './mostdeadly/mostdeadly.component';
import { InformationComponent } from './information/information.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { DeadlyCardComponent } from './deadly-card/deadly-card.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { GaugesModule } from '@biacsics/ng-canvas-gauges';
import { FeedbackComponent } from './feedback/feedback.component';
import { NgxStarRatingModule } from 'ngx-star-rating';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MostdeadlyComponent,
    InformationComponent,
    NavBarComponent,
    QuizComponent,
    DeadlyCardComponent,
    InfoCardComponent,
    FeedbackComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DevExtremeModule,
    DxRadioGroupModule,
    DxTabsModule,
    DxPopupModule,
    GaugesModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxStarRatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
