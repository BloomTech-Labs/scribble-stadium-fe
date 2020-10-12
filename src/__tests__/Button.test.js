import React from 'react';
import { render } from '@testing-library/react';

import { Button } from '../components/common';

describe('<Button /> test suite', () => {
  it('button text, className, and isDisabled comes from prpos', () => {
    const { getByText } = render(
      <Button buttonText="Test Button" isDisabled={true} />
    );
    const button = getByText(/test button/i);
    expect(button.textContent).toBe('Test Button');
    expect(button.className).toBe('primary');
    expect(getByText('Test Button').closest('button').disabled).toBeTruthy();
  });

  it('button text, className, and isDisabled changes on a re-render', () => {
    const { getByText, rerender } = render(<Button buttonText="Test Button" />);
    const button = getByText(/test button/i);
    expect(button.textContent).toBe('Test Button');
    expect(button.className).toBe('primary');
    rerender(
      <Button
        buttonText="Test Rerender Button"
        isDisabled={false}
        classType="secondary"
      />
    );
    expect(button.textContent).toBe('Test Rerender Button');
    expect(button.className).not.toBe('primary');
    expect(button.className).toBe('secondary');

    expect(
      getByText('Test Rerender Button').closest('button').disabled
    ).toBeFalsy();
  });
});
