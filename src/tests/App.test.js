import React from 'react';
import { cleanup } from '@testing-library/react';
import renderWithRedux from '../util';
import App from '../App';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryAllByText } = renderWithRedux(<App />);
    const btnMoveArray = queryAllByText(/move/i);

    expect(btnMoveArray.length).toBe(3);
  });
});