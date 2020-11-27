import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  popupVisible = false;

  constructor(private title: Title) {
    title.setTitle('Mushroom Poison Predictor');
  }

  ngOnInit() {
    this.popupVisible = true;
  }
}
