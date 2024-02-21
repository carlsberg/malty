import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'price';
const variants = ['default', 'discount', 'credit', 'free', 'reward'];

describe('<Price />', () => {
  it('Base', () => {
    const page = visit({ dataTestId, storyId: 'information-price--price' });

    page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
  });

  variants.forEach((variant) => {
    it(`Variant - ${variant}`, () => {
      const page = visit({
        dataTestId,
        storyId: 'information-price--price',
        variant
      });

      page.getFullPageWithVisibleTarget(dataTestId).compareSnapshot(buildSnapshotName());
    });
  });
});
