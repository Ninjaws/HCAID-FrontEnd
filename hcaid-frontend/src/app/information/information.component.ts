import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {
  indicators = [
    ['Odor', '... has a foul odor', './assets/info/odor2.png'],
    ['Bruises', '... has no bruises', './assets/info/bruising.png'],
    [
      'Population',
      '... grows in a group of several mushrooms',
      './assets/info/population.png',
    ],
    ['Habitat', '... is located near a path', './assets/info/habitat2.png'],
    ['Gill color', '... has a buff-colored gill', './assets/info/gill.png'],
    ['Stalk shape', '... has an enlarging stalk', './assets/info/stalk.png'],
    ['Ring type', '... has a large ring', './assets/info/ring2.png'],
    [
      'Spore-print color',
      '... has a white or chocolate-colored spore-print',
      './assets/info/spore-print.png',
    ],
  ];

  constructor() {}

  ngOnInit() {}
}
