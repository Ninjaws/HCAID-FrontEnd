import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { MostdeadlyComponent } from './mostdeadly/mostdeadly.component';
import { QuizComponent } from './quiz/quiz.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '',
  runGuardsAndResolvers: 'always',
  canActivate: [],
  children: [
      { path: '', component: HomeComponent },
       { path: 'information', component: InformationComponent },
       { path: 'mostdeadly', component: MostdeadlyComponent },
       { path: 'quiz', component: QuizComponent}
        ] },

  { path: '**', redirectTo: '', pathMatch: 'full' }
  ];
