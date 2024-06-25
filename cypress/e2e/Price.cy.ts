import { buildSnapshotName, visit } from '../support/utils';

const dataTestId = 'price';
const variants = [
  { id: 'discount', label: 'Discount' },
  { id: 'credit', label: 'Credit' },
  { id: 'free', label: 'Free' },
  { id: 'reward', label: 'Reward' }
];

describe('<Price />', () => {
  it('Base', () => {
    const page = visit({ args: { dataTestId }, storyId: 'information-price--base' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  variants.forEach((variant) => {
    it(`${variant.label}`, () => {
      const page = visit({
        args: { dataTestId },
        storyId: `information-price--${variant.id}`
      });

      page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
    });
  });
});
