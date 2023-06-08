import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { Story } from '@storybook/react';
import React from 'react';
import { Hero as HeroComponent } from './Hero';
import { HeroProps } from './Hero.types';

enum HeroVariants {
  Required = 'required',
  Actions = 'actions',
  Scroll = 'scroll',
  Default = 'default'
}

export default {
  title: 'Layout/Hero',
  component: HeroComponent,
  parameters: {
    importObject: 'Hero',
    importPath: '@carlsberggroup/malty.molecules.hero',
    variants: Object.values(HeroVariants)
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the hero'
    },
    description: {
      control: 'text',
      description: 'Description of the hero'
    },
    imageSrc: {
      control: 'text',
      description: 'Hero background Image URL'
    },
    dataTestId: {
      control: 'text',
      description: 'Hero data-testid'
    },
    actions: {
      control: 'object',
      desciption:
        'An array of maximum 2 actions structured as such "actions?: ActionButtonProps[] | React.ReactNode | JSX.Element;"'
    },
    scrollText: {
      control: 'text',
      description: 'The text for the scroll, if nothing is passed then the scroll will not be displayed'
    },
    height: {
      control: 'text',
      description: 'This sets the height value dynamically, the min-height will always be 80vh as default'
    }
  }
};

const Template: Story<HeroProps> = (args) => {
  return <HeroComponent {...args} />;
};

export const Hero = Template.bind({});

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

const requiredProps: HeroProps = {
  title: 'Welcome to Carlsberg Online',
  description: 'Now you can order all your favourite products on your smartphone or computer within minutes.',
  imageSrc:
    'https://s3-alpha-sig.figma.com/img/1a8e/2a97/368bfc9d97adcbd3d02f0159e7692a8e?Expires=1686528000&Signature=d4mISd9mfZCDWUkCfS57I9ft4qibCOQvC1iadlvHcs~QKPdybMicFZ7C~dqgrsDErGneBIf5~XNsPLqZRRHsxCRZqDXY6SpdbjNu9FtM-ak3uD7ZCSFB6my4Bx1wSJVv5arsbGil7PuqkrIVOSoK83d~9JOmAEP--OPFqQo8KF77P0kHVRZyOTTVIUSiszBe7b9GmzGBq1ebkXfKOwM20DIAc6dKQi1qIoqrPBep02PstrzbWHKr1LVsnNiY9~00mllHePEwUXmWKZz4UMLHnR~M7X6CwpDq1~JOB0E~xC80pJna8rrcV5Jl9gGkgu~y5w6W9zc6ad-W5GtIV9YOHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
};

switch (variant) {
  case HeroVariants.Required:
    Hero.args = {
      ...requiredProps
    };
    break;
  case HeroVariants.Actions:
    Hero.args = {
      ...requiredProps,
      actions: [
        {
          style: ButtonStyle.Primary,
          label: 'I want to know more',
          onClick: () => alert('First button pressed!')
        },
        {
          style: ButtonStyle.Secondary,
          label: 'I am ok',
          onClick: () => alert('Second button pressed!')
        }
      ]
    };
    break;
  case HeroVariants.Scroll:
    Hero.args = {
      ...requiredProps,
      scrollText: 'Scroll to know more'
    };
    break;
  default:
    Hero.args = {
      ...requiredProps,
      actions: [
        {
          negative: true,
          color: ButtonColor.DigitalBlack,
          style: ButtonStyle.Primary,
          label: 'I want to know more',
          onClick: () => alert('First button pressed!')
        },
        {
          negative: true,
          color: ButtonColor.DigitalBlack,
          style: ButtonStyle.Secondary,
          label: 'I am ok',
          onClick: () => alert('Second button pressed!')
        }
      ],
      scrollText: 'Scroll to know more'
    };
    break;
}
