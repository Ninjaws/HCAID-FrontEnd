import { Component, OnInit } from '@angular/core';
import { rand } from '@tensorflow/tfjs';
import { DxRadioGroupModule } from 'devextreme-angular';
import { PredictService } from '../predict.service';

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

  // All inputs that dont lead to the lowest possible poison index
  suboptimalValues = [];
  // All recommendations, pick one randomly for the hint
  recommendations = [];
  hint = '';
  //Whether the user has changed a value for the first time
  valueChanged = false;

  constructor(private predictService: PredictService) {}

  changeSelectedValue(object: any) {
    this.valueChanged = true;
    // this.suboptimalValues = [];

    switch (object.element.id) {
      case 'spore-print-color':
        this.selectedSporePrintColor = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.selectedSporePrintColor[
          this.sporePrintColors.indexOf(object.value)
        ] = 1;

        // Checking for optimal input
        if (object.value === 'Black' || object.value === 'Brown') {
          this.suboptimalValues.splice(
            this.suboptimalValues.indexOf('spore-print-color'),
            1
          );
        } else {
          if (this.suboptimalValues.indexOf('spore-print-color') === -1) {
            this.suboptimalValues.push('spore-print-color');
          }
        }

        break;
      case 'ring-type':
        this.selectedRingType = [0, 0, 0, 0, 0];
        this.selectedRingType[this.ringTypes.indexOf(object.value)] = 1;

        // Checking for optimal input
        if (object.value === 'Pendant') {
          this.suboptimalValues.splice(
            this.suboptimalValues.indexOf('ring-type'),
            1
          );
        } else {
          if (this.suboptimalValues.indexOf('ring-type') === -1) {
            this.suboptimalValues.push('ring-type');
          }
        }
        break;
      case 'stalk-shape':
        this.selectedStalkShape = [0, 0];
        this.selectedStalkShape[this.stalkShapes.indexOf(object.value)] = 1;

        // Checking for optimal input
        if (object.value === 'Tapering') {
          this.suboptimalValues.splice(
            this.suboptimalValues.indexOf('stalk-shape'),
            1
          );
        } else {
          if (this.suboptimalValues.indexOf('stalk-shape') === -1) {
            this.suboptimalValues.push('stalk-shape');
          }
        }
        break;
      case 'gill-color':
        this.selectedGillColor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.selectedGillColor[this.gillColors.indexOf(object.value)] = 1;

        // Checking for optimal input
        if (
          object.value === 'Brown' ||
          object.value === 'Purple' ||
          object.value === 'White'
        ) {
          this.suboptimalValues.splice(
            this.suboptimalValues.indexOf('gill-color'),
            1
          );
        } else {
          if (this.suboptimalValues.indexOf('gill-color') === -1) {
            this.suboptimalValues.push('gill-color');
          }
        }
        break;
      case 'habitat':
        this.selectedHabitat = [0, 0, 0, 0, 0, 0, 0];
        this.selectedHabitat[this.habitats.indexOf(object.value)] = 1;
        // Checking for optimal input
        if (object.value === 'Woods' || object.value === 'Waste') {
          this.suboptimalValues.splice(
            this.suboptimalValues.indexOf('habitat'),
            1
          );
        } else {
          if (this.suboptimalValues.indexOf('habitat') === -1) {
            this.suboptimalValues.push('habitat');
          }
        }
        break;
      case 'population':
        this.selectedPopulation = [0, 0, 0, 0, 0, 0];
        this.selectedPopulation[this.populations.indexOf(object.value)] = 1;
        // Checking for optimal input
        if (object.value === 'Abundant') {
          this.suboptimalValues.splice(
            this.suboptimalValues.indexOf('population'),
            1
          );
        } else {
          if (this.suboptimalValues.indexOf('population') === -1) {
            this.suboptimalValues.push('population');
          }
        }
        break;
      case 'bruise':
        this.selectedBruise = [0, 0];
        this.selectedBruise[this.bruises.indexOf(object.value)] = 1;
        // Checking for optimal input
        if (object.value === 'Has bruises') {
          this.suboptimalValues.splice(
            this.suboptimalValues.indexOf('bruise'),
            1
          );
        } else {
          if (this.suboptimalValues.indexOf('bruise') === -1) {
            this.suboptimalValues.push('bruise');
          }
        }
        break;
      case 'odor':
        this.selectedOdor = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.selectedOdor[this.odors.indexOf(object.value)] = 1;
        // Checking for optimal input
        if (object.value === 'None') {
          this.suboptimalValues.splice(
            this.suboptimalValues.indexOf('odor'),
            1
          );
        } else {
          if (this.suboptimalValues.indexOf('odor') === -1) {
            this.suboptimalValues.push('odor');
          }
        }
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

    this.predictService.predict(arr).then(
      (result) => {
        result *= 100;
        if (result < 20) {
          this.risk = 'high';
        } else if (result < 80) {
          this.risk = 'average';
        } else {
          this.risk = 'low';
        }

        this.getRecommendations();

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

  getRecommendations() {
    this.recommendations = [];

    // Only give recommendations if the risk is reasonably high
    if (this.risk === 'low') {
      return;
    }
    for (const value of this.suboptimalValues) {
      if (value === 'spore-print-color') {
        this.recommendations.push(' the spore-print color to Black or Brown');
      }
      if (value === 'ring-type') {
        this.recommendations.push(' the ring-type to Pendant');
      }
      if (value === 'stalk-shape') {
        this.recommendations.push(' the stalk-shape to Tapering');
      }
      if (value === 'gill-color') {
        this.recommendations.push(' the gill-color to Brown, Purple or White');
      }
      if (value === 'habitat') {
        this.recommendations.push(' the habitat to Woods or Waste');
      }
      if (value === 'population') {
        this.recommendations.push(' the population to Abudant');
      }
      if (value === 'bruise') {
        this.recommendations.push(' the bruises to Has bruises');
      }
      if (value === 'odor') {
        this.recommendations.push(' the odor to None');
      }
    }

    if (this.recommendations.length === 0) {
      this.recommendations.push(' more values');
    }

    const index = Math.floor(Math.random() * this.recommendations.length);

    this.hint = this.recommendations[index];
  }

  ngOnInit() {}
}
