import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DevExtremeModule, DxRadioGroupModule, DxTabsModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { MostdeadlyComponent } from './mostdeadly/mostdeadly.component';
import { InformationComponent } from './information/information.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      MostdeadlyComponent,
      InformationComponent,
      NavBarComponent,
      QuizComponent
   ],
  imports: [
    BrowserModule,
    DevExtremeModule,
    DxRadioGroupModule,
    DxTabsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
