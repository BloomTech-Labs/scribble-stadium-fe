import React, { useState, useEffect } from 'react';
import { screen, render } from '@testing-library/react';
import CropCloud from '../components/pages/WordCloud/CropCloud.js';
import { Provider } from 'react-redux';

describe('Croupcloud component', () => {});
it('renders without erors', () => {
  render(<CropCloud />);
  const cropCloud = screen.getByTestId(/cropcloud/i);
  expect(cropCloud).toBeInTheDocument();
});
