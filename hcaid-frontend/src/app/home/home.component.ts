import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quizStarted = false;

  constructor() {}

  ngOnInit() {}

  startQuiz() {
    if (!this.quizStarted) this.quizStarted = true;
  }
}
