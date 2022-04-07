import React from 'react';
import RenderChildDashboard from '../components/pages/ChildDashboard/RenderChildDashboard';
import { render, screen } from '@testing-library/react';

describe('RenderChildDashboard component', () => {
  it('should render without errors', () => {
    render(<RenderChildDashboard />);
    expect(screen.getByTestId('child-dashboard')).toBeInTheDocument();
  });
});
