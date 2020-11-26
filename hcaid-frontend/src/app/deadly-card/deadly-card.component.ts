import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deadly-card',
  templateUrl: './deadly-card.component.html',
  styleUrls: ['./deadly-card.component.css'],
})
export class DeadlyCardComponent implements OnInit {
  @Input() name: string;
  @Input() latin: string;
  @Input() url: string;

  constructor() {}

  ngOnInit() {}
}
