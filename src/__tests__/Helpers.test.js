import { modalInstructions, progressInfo } from '../utils/helpers';

describe('<Helpers />', () => {
  it('should render', () => {
    expect(Object.keys(modalInstructions).length > 0).toBe(true);
  });
  it('should render', () => {
    expect(Object.keys(progressInfo).length > 0).toBe(true);
  });
});
