import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DxTabsModule } from 'devextreme-angular';

export class Tab {
  text: string;
  url: string;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  // tabs: string[][] = [
  //   ['Home', 'home'],
  //   ['Information', 'information'],
  //   ['Deadliest Mushrooms', 'mostdeadly'],
  // ];

  tabs = [
    {
      text: 'Home',
      url: 'home',
    },
    {
      text: 'Information',
      url: 'information',
    },
    {
      text: 'Deadliest Mushrooms',
      url: 'mostdeadly',
    },
    {
      text: 'Feedback',
      url: 'feedback',
    },
  ];

  tabContent: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  selectTab(id: any) {
    const routerString = '/' + id.itemData.url;
    this.router.navigate([routerString]);
  }
}
