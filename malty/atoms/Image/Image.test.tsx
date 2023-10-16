import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { Image } from '.';

const testImageSrc = 'https://via.placeholder.com/400';
const altText = 'Image Component';
const dataTestId = 'image';

describe('Image component', () => {
  it('should renders the component with the correct alt description', () => {
    render(<Image src={testImageSrc} cover={false} alt={altText} dataTestId={dataTestId} />);

    expect(screen.getAllByAltText(altText)).toBeDefined();
  });

  it('should render with the assigned dataTestid', () => {
    render(<Image src={testImageSrc} cover={false} alt={altText} dataTestId={dataTestId} />);

    expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
  });

  it('should render with the correct caption', () => {
    render(<Image src={testImageSrc} cover={false} alt={altText} dataTestId={dataTestId} figcaption="caption text" />);

    expect(screen.getByTestId('image-figcaption')).toHaveTextContent('caption text');
  });

  it('should render with the assigned height', () => {
    render(<Image src={testImageSrc} cover={false} alt={altText} dataTestId={dataTestId} height="50" />);

    expect(screen.getByTestId(dataTestId)).toHaveAttribute('height', '50');
  });

  it('should render with the assigned width', () => {
    render(<Image src={testImageSrc} cover={false} alt={altText} dataTestId={dataTestId} width="50" />);

    expect(screen.getByTestId(dataTestId)).toHaveAttribute('width', '50');
  });
});
