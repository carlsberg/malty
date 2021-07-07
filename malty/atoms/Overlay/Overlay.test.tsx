import { jsonRenderer } from '@/utils/test';
import { Overlay } from '.';

describe('overlay', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Overlay />);
    expect(view).toMatchSnapshot();
  });
});
