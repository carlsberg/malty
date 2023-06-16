import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Hero } from './Hero';
import { ActionButtonProps, HeroProps } from './Hero.types';

describe('Hero', () => {
  const heroProps: HeroProps = {
    title: 'This is the title of the banner',
    description: 'This is the description of the banner',
    imageSrc:
      'https://s3-alpha-sig.figma.com/img/1a8e/2a97/368bfc9d97adcbd3d02f0159e7692a8e?Expires=1686528000&Signature=d4mISd9mfZCDWUkCfS57I9ft4qibCOQvC1iadlvHcs~QKPdybMicFZ7C~dqgrsDErGneBIf5~XNsPLqZRRHsxCRZqDXY6SpdbjNu9FtM-ak3uD7ZCSFB6my4Bx1wSJVv5arsbGil7PuqkrIVOSoK83d~9JOmAEP--OPFqQo8KF77P0kHVRZyOTTVIUSiszBe7b9GmzGBq1ebkXfKOwM20DIAc6dKQi1qIoqrPBep02PstrzbWHKr1LVsnNiY9~00mllHePEwUXmWKZz4UMLHnR~M7X6CwpDq1~JOB0E~xC80pJna8rrcV5Jl9gGkgu~y5w6W9zc6ad-W5GtIV9YOHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  };

  const actions: ActionButtonProps[] = [
    {
      key: 'primary',
      color: ButtonColor.ThemePrimary,
      style: ButtonStyle.Primary,
      text: 'I want to know more',
      onClick: jest.fn()
    },
    {
      key: 'secondary',
      color: ButtonColor.ThemePrimary,
      style: ButtonStyle.Secondary,
      text: 'I am ok',
      onClick: jest.fn()
    }
  ];

  const scrollText = 'Scroll to know more';
  const scrollIcon = 'icon-ArrowSmallDown';

  it('renders required props successfully', () => {
    render(<Hero {...heroProps} />);
    const primaryButton = screen.queryByText(actions[0].text as string);
    const secondaryButton = screen.queryByText(actions[1].text as string);

    expect(screen.getByText(heroProps.title)).toBeVisible();
    expect(screen.getByText(heroProps.description)).toBeVisible();
    expect(primaryButton).not.toBeInTheDocument();
    expect(secondaryButton).not.toBeInTheDocument();
    expect(screen.queryByText(scrollText)).not.toBeInTheDocument();
    expect(screen.queryByTestId(scrollIcon)).not.toBeInTheDocument();
  });

  it('renders actions successfully', () => {
    render(<Hero {...heroProps} actions={actions} />);

    const primaryButton = screen.getByText(actions[0].text as string);
    const secondaryButton = screen.getByText(actions[1].text as string);

    expect(primaryButton).toBeVisible();
    expect(secondaryButton).toBeVisible();

    userEvent.click(primaryButton);
    userEvent.click(secondaryButton);

    expect(actions[0].onClick).toHaveBeenCalledTimes(1);
    expect(actions[1].onClick).toHaveBeenCalledTimes(1);
  });

  it('renders scroll successfully', () => {
    render(<Hero {...heroProps} scrollText={scrollText} />);

    expect(screen.getByText(scrollText)).toBeVisible();
    expect(screen.getByTestId(scrollIcon)).toBeVisible();
  });
});
