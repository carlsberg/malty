import { Meta, Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Icon } from './icon';
import { ColorsTypes, IconInterface, NamesTypes, SizesTypes } from './icon.types';

const StyledAllIconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledIconPlaceHolder = styled.div`
  height: 48px;
  width: 48px;
`;

const StyledIconWrapper = styled.div`
  height: 48px;
  width: 48px;
`;

function loadIconComponent(name: NamesTypes, iconColor: ColorsTypes, size: SizesTypes) {
  const IconComponent = React.lazy(() => import(`./icons/${name}`));
  return (
    <StyledIconWrapper>
      <React.Suspense fallback={<StyledIconPlaceHolder />}>
        <IconComponent color={iconColor} size={size} />
      </React.Suspense>
    </StyledIconWrapper>
  );
}

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    name: {
      options: NamesTypes,
      description: 'Name options listed below',
      defaultValue: NamesTypes.AddContent,
      control: {
        type: 'select'
      }
    },
    color: {
      options: ColorsTypes,
      description: 'Color options are',
      defaultValue: ColorsTypes.Primary,
      table: {
        defaultValue: {
          summary: 'Primary'
        }
      },
      control: {
        type: 'radio'
      }
    },
    size: {
      options: SizesTypes,
      defaultValue: SizesTypes.Medium,
      description: 'Size options are',
      table: {
        defaultValue: {
          summary: 'Medium'
        }
      },
      control: {
        type: 'radio'
      }
    }
  }
} as Meta;

const Template: Story<IconInterface> = ({ color, size, name = NamesTypes.AddContent }) =>
  loadIconComponent(name, color, size);

export const Main = Template.bind({});
Main.parameters = {
  color: ColorsTypes.Primary,
  size: SizesTypes.Large,
  name: NamesTypes.AddContent,
  docs: {
    source: {
      code: 'code'
    }
  }
};

const AllIconsTemplate: Story<IconInterface> = ({ color, size }) => (
  <StyledAllIconsWrapper>
    {Object.values(NamesTypes).map((name) => loadIconComponent(name, color, size))}
  </StyledAllIconsWrapper>
);

export const AllIcons = AllIconsTemplate.bind({});
AllIcons.parameters = {
  color: ColorsTypes.Primary,
  size: SizesTypes.Large,
  docs: {
    source: {
      code: 'code'
    }
  }
};
