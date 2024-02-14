import { buildSnapshotName, visit } from '@/cypress/support/utils';

const dataTestId = 'price';
const variants = ['default', 'discount', 'credit', 'free', 'reward'];

describe('<Price />', () => {
  it('Base', () => {
    const page = visit({ dataTestId, storyId: 'information-price--price' });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it.each(variants)('Variant - %s', (variant) => {
    const page = visit({
      dataTestId,
      storyId: 'information-price--price',
      variant
    });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });
});
