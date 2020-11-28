import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Injectable({
  providedIn: 'root',
})
export class PredictService {
  async predict(input: number[]): Promise<number> {
    const model = await tf.loadLayersModel(
      'assets/model/mushroom_predictor.json'
    );
    const prediction: any = model.predict(tf.tensor([input]));
    const result: number = prediction.dataSync()[0];
    return result;
  }
}
