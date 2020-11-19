import { Component, OnInit } from '@angular/core';
import { DxRadioGroupModule } from 'devextreme-angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  sporePrintColors = ['Buff', 'Chocolate', 'Black', 'Brown', 'Orange', 'Green', 'Purple', 'White', 'Yellow'];

  ringTypes = ['Evanescent', 'Flaring', 'Large', 'None', 'Pendant'];

  stalkShapes = ['Enlarging', 'Tapering'];

  gillColors = ['Buff', 'Red', 'Gray', 'Chocolate', 'Black', 'Brown', 'Orange', 'Pink', 'Green', 'Purple', 'White', 'Yellow'];

  habitats = ['Woods', 'Grasses', 'Leaves', 'Meadows', 'Paths', 'Urban', 'Waste'];

  populations = ['Abundant', 'Clustered', 'Numerous', 'Scattered', 'Several', 'Solitary'];

  bruises = ['No bruises', 'Has bruises'];

  odors = ['Almond', 'Creosote', 'Foul', 'Anise', 'Musty', 'None', 'Pungent', 'Spicy', 'Fishy'];


  constructor(private apiService: ApiService)
  {
    apiService.predictChance([
                              0,0,0,0,0,0,0,1,0,
                              0,0,1,0,0,
                              1,0,
                              1,0,0,0,0,0,0,0,0,0,0,0,
                              0,1,0,0,0,0,0,
                              0,0,0,0,1,0,
                              1,0,
                              0,0,1,0,0,0,0,0,0])
                              .subscribe(result => {console.log(result); }, error => {console.log(error); });
  }

  convertToArray(): number[]
  {
    const arr = [0,0,0]
    return arr;
  }

  getResult()
  {
    const arr = this.convertToArray();

    this.apiService.predictChance([
      0,0,0,0,0,0,0,1,0,
      0,0,1,0,0,
      1,0,
      1,0,0,0,0,0,0,0,0,0,0,0,
      0,1,0,0,0,0,0,
      0,0,0,0,1,0,
      1,0,
      0,0,1,0,0,0,0,0,0])
      .subscribe(result => {console.log(result); }, error => {console.log(error); });
  }

  ngOnInit() {
  }

}
