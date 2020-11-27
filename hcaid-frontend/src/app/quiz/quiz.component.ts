import { Component, OnInit } from '@angular/core';
import { DxRadioGroupModule } from 'devextreme-angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  sporePrintColors = [
    'Buff',
    'Chocolate',
    'Black',
    'Brown',
    'Orange',
    'Green',
    'Purple',
    'White',
    'Yellow',
  ];

  ringTypes = ['Evanescent', 'Flaring', 'Large', 'None', 'Pendant'];

  stalkShapes = ['Enlarging', 'Tapering'];

  gillColors = [
    'Buff',
    'Red',
    'Gray',
    'Chocolate',
    'Black',
    'Brown',
    'Orange',
    'Pink',
    'Green',
    'Purple',
    'White',
    'Yellow',
  ];

  habitats = [
    'Woods',
    'Grasses',
    'Leaves',
    'Meadows',
    'Paths',
    'Urban',
    'Waste',
  ];

  populations = [
    'Abundant',
    'Clustered',
    'Numerous',
    'Scattered',
    'Several',
    'Solitary',
  ];

  bruises = ['No bruises', 'Has bruises'];

  odors = [
    'Almond',
    'Creosote',
    'Foul',
    'Anise',
    'Musty',
    'None',
    'Pungent',
    'Spicy',
    'Fishy',
  ];

  options = [
    [
      'spore-print-color',
      'What color is its spore print?',
      this.sporePrintColors,
    ],
    ['ring-type', 'What type of ring does it have?', this.ringTypes],
    [
      'stalk-shape',
      'What kind of shape does its stalk have?',
      this.stalkShapes,
    ],
    ['gill-color', 'What color does the gill have?', this.gillColors],
    ['habitat', 'What kind of habitat does it live in?', this.habitats],
    ['population', 'What kind of population does it have?', this.populations],
    ['bruise', 'Does it have bruises?', this.bruises],
    ['odor', 'How does it smell?', this.odors],
  ];

  selectedSporePrintColor = [1, 0, 0, 0, 0, 0, 0, 0, 0];
  selectedRingType = [1, 0, 0, 0, 0];
  selectedStalkShape = [1, 0];
  selectedGillColor = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  selectedHabitat = [1, 0, 0, 0, 0, 0, 0];
  selectedPopulation = [1, 0, 0, 0, 0, 0];
  selectedBruise = [1, 0];
  selectedOdor = [1, 0, 0, 0, 0, 0, 0, 0, 0];

  result = 0.0;
  risk = 'low';
  resultCalculated = false;

  constructor(private apiService: ApiService) {}

  changeSelectedValue(object: any) {
    console.log(object);

    switch (object.element.id) {
      case 'spore-print-color':
        this.selectedSporePrintColor = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.selectedSporePrintColor[
          this.sporePrintColors.indexOf(object.value)
        ] = 1;
        break;
      case 'ring-type':
        this.selectedRingType = [0, 0, 0, 0, 0];
        this.selectedRingType[this.ringTypes.indexOf(object.value)] = 1;
        break;
      case 'stalk-shape':
        this.selectedStalkShape = [0, 0];
        this.selectedStalkShape[this.stalkShapes.indexOf(object.value)] = 1;
        break;
      case 'gill-color':
        this.selectedGillColor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.selectedGillColor[this.gillColors.indexOf(object.value)] = 1;
        break;
      case 'habitat':
        this.selectedHabitat = [0, 0, 0, 0, 0, 0, 0];
        this.selectedHabitat[this.habitats.indexOf(object.value)] = 1;
        break;
      case 'population':
        this.selectedPopulation = [0, 0, 0, 0, 0, 0];
        this.selectedPopulation[this.populations.indexOf(object.value)] = 1;
        break;
      case 'bruise':
        this.selectedBruise = [0, 0];
        this.selectedBruise[this.bruises.indexOf(object.value)] = 1;
        break;
      case 'odor':
        this.selectedOdor = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.selectedOdor[this.odors.indexOf(object.value)] = 1;
        break;
    }
  }

  getResult() {
    let arr = [];
    arr = arr.concat(this.selectedSporePrintColor);
    arr = arr.concat(this.selectedRingType);
    arr = arr.concat(this.selectedStalkShape);
    arr = arr.concat(this.selectedGillColor);
    arr = arr.concat(this.selectedHabitat);
    arr = arr.concat(this.selectedPopulation);
    arr = arr.concat(this.selectedBruise);
    arr = arr.concat(this.selectedOdor);

    this.apiService.predictChance(arr).subscribe(
      (result) => {
        result *= 100;
        if (result < 20) {
          this.risk = 'high';
        } else if (result < 80) {
          this.risk = 'average';
        } else {
          this.risk = 'low';
        }

        this.result = result;
        if (!this.resultCalculated) {
          this.resultCalculated = true;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  numberToString(number: number) {
    return number.toFixed(2);
  }

  ngOnInit() {}
}
