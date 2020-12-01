import { Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { MostdeadlyComponent } from './mostdeadly/mostdeadly.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [],
    children: [
      { path: '', component: HomeComponent },
      { path: 'information', component: InformationComponent },
      { path: 'mostdeadly', component: MostdeadlyComponent },
      { path: 'feedback', component: FeedbackComponent },
    ],
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
