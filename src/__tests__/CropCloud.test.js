import React, { useState, useEffect } from 'react';
import { screen, render } from '@testing-library/react';
import cropcloud from '../components/pages/WordCloud/CropCloud.js';
import { Provider } from 'react-redux';

describe('Croupcloud component', () => {});
it('renders without erors', () => {
  render(<CropCloud />);
  const cropCloud = screen.getByTestId('cropcloud');
  expect(cropCloud).toBeInTheDocument();
});
