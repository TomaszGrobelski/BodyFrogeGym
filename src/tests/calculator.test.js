import { expect, test } from 'vitest'
import { bmiFunction } from '../js/bmiFunction';  


test('should calculate BMI and determine weight category correctly', () => {
    // Symuluj dane wejściowe
    const inputWeightValue = 60;
    const inputHeightValue = 180;

    const { BMI, category } = bmiFunction(inputWeightValue, inputHeightValue);

    expect(BMI).toBeCloseTo(18.52, 2); // 

    expect(category).toBe('Niedowaga');
  });

