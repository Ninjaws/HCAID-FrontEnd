import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostdeadly',
  templateUrl: './mostdeadly.component.html',
  styleUrls: ['./mostdeadly.component.scss'],
})
export class MostdeadlyComponent implements OnInit {
  deadly_mushrooms = [
    [
      'Deathcap',
      'Amanita phalloides',
      './assets/deadliest_mushrooms/death-cap.jpg',
    ],
    [
      '',
      'Conocybe filaris',
      './assets/deadliest_mushrooms/conocybe-filaris.jpg',
    ],
    [
      'Webcaps',
      'Cortinarius species',
      './assets/deadliest_mushrooms/webcap.jpg',
    ],
    [
      'Autumn Skullcap',
      'Galerina marginata',
      './assets/deadliest_mushrooms/autumn-skullcap.jpg',
    ],
    [
      'Destroying Angels',
      'Amanita species',
      './assets/deadliest_mushrooms/destroying-angel.jpg',
    ],
    [
      '',
      'Podostroma cornu-damae',
      './assets/deadliest_mushrooms/podostroma-cornu-damae.jpg',
    ],
    [
      'Deadly Dapperling',
      'Lepiota brunneoincaranta',
      './assets/deadliest_mushrooms/deadly-dapperling.jpg',
    ],
  ];

  constructor() {}

  ngOnInit() {}
}
