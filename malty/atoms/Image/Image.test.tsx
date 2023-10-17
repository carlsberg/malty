import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Image } from '.';

const testImageSrc = 'https://via.placeholder.com/400';
const altText = 'Image Component';
const dataTestId = 'image';

describe('Image component', () => {
  it('should render the component with the correct alt description', () => {
    render(<Image src={testImageSrc} cover={false} alt={altText} dataTestId={dataTestId} />);

    expect(screen.getByAltText(altText)).toBeDefined();
  });

  it('should render with the assigned dataTestid', () => {
    render(<Image src={testImageSrc} cover={false} alt={altText} dataTestId={dataTestId} />);

    expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
  });

  it('should render with the correct caption', () => {
    render(<Image src={testImageSrc} cover={false} alt={altText} dataTestId={dataTestId} figcaption="caption text" />);

    expect(screen.getByText('caption text')).toBeInTheDocument();
  });
  it('should render with the correct caption testId', () => {
    render(<Image src={testImageSrc} cover={false} alt={altText} dataTestId={dataTestId} figcaption="caption text" />);

    expect(screen.getByTestId('image-figcaption')).toBeInTheDocument();
  });

  it('should render the icon correctly in case an error occurs', () => {
    render(<Image src="wrongSrc" cover={false} alt={altText} dataTestId={dataTestId} fallbackSrc="" />);

    fireEvent.error(screen.getByTestId(dataTestId));

    expect(screen.getByTestId('icon-Image')).toBeInTheDocument();
  });

  it('should render correctly using the fallbackSrc', () => {
    render(<Image src="not a link" cover={false} alt={altText} dataTestId={dataTestId} fallbackSrc={testImageSrc} />);

    fireEvent.error(screen.getByTestId(dataTestId));

    expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
    expect(screen.getByAltText(altText)).toBeDefined();
  });

  it('should trigger the onClick function when clicked', () => {
    const mockFn = jest.fn();
    render(<Image src={testImageSrc} cover={false} alt={altText} dataTestId={dataTestId} onClick={mockFn} />);

    userEvent.click(screen.getByTestId(dataTestId));

    expect(mockFn).toHaveBeenCalled();
  });

  it('should render with the correct children', () => {
    render(
      <Image src={testImageSrc} cover={false} alt={altText} dataTestId={dataTestId}>
        This is a sample string
      </Image>
    );

    expect(screen.getByText('This is a sample string')).toBeInTheDocument();
  });
});
