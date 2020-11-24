import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DxTabsModule } from 'devextreme-angular';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  tabs: string[] = ['Home', 'Information', 'Mostdeadly'];

  tabContent: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  selectTab(id: any) {
    console.log(id);

    const routerString = '/' + id.itemData.toLowerCase();
    this.router.navigate([routerString]);
  }
}
