import React from 'react';
import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRedux from '../util';
import App from '../App';
import '@testing-library/jest-dom';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should have 3 buttons with text move', () => {
    const { queryAllByText } = renderWithRedux(<App />);
    const btnMoveArray = queryAllByText(/move/i);

    expect(btnMoveArray.length).toBe(3);
  });

  test('the page should have 3 images with alt color car starting on the left', () => {
    const { queryAllByAltText } = renderWithRedux(<App />);
    const cars = queryAllByAltText(/car$/);

    expect(cars.length).toBe(3);
    cars.forEach((car) => {
      expect(car.className).toMatch(/left$/);
    });
  });

  test('the cars should move to the right when their move button is clicked', () => {
    const { queryAllByText, queryAllByAltText } = renderWithRedux(<App />);

    const [ btnRed, btnBlue, btnYellow ] = queryAllByText(/move/i);
    const [ redCar, blueCar, yellowCar ] = queryAllByAltText(/car$/);

    expect(redCar.className).toBe('car-left');
    userEvent.click(btnRed);
    expect(redCar.className).toBe('car-right');

    expect(blueCar.className).toBe('car-left');
    userEvent.click(btnBlue);
    expect(blueCar.className).toBe('car-right');

    expect(yellowCar.className).toBe('car-left');
    userEvent.click(btnYellow );
    expect(yellowCar.className).toBe('car-right');
  }) 
});