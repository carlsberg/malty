import type { ArgTypes } from '@storybook/react';

export interface SpaceProps {
  m?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  mx?: string;
  my?: string;
}

export const space = <Props extends SpaceProps>({ m = '', mx, my, mt, mr, mb, ml }: Props) => `
    margin: ${m};
    margin-top: ${mt ?? my ?? ''};
    margin-bottom: ${mb ?? my ?? ''};
    margin-right: ${mr ?? mx ?? ''};
    margin-left: ${ml ?? mx ?? ''};
`;

export function spreadSpaceProps<Props extends SpaceProps>(props: Props) {
  const { m, mt, mr, mb, ml, mx, my, ...restProps } = props;

  return { spaceProps: { m, mt, mr, mb, ml, mx, my }, restProps };
}

export function generateStorybookSpacing(): ArgTypes {
  return {
    m: {
      description: 'margin',
      control: 'text',
      table: {
        category: 'Spacing'
      }
    },
    mt: {
      description: 'margin-top',
      control: 'text',
      table: {
        category: 'Spacing'
      }
    },
    mr: {
      description: 'margin-right',
      control: 'text',
      table: {
        category: 'Spacing'
      }
    },
    mb: {
      description: 'margin-bottom',
      control: 'text',
      table: {
        category: 'Spacing'
      }
    },
    ml: {
      description: 'margin-left',
      control: 'text',
      table: {
        category: 'Spacing'
      }
    },
    mx: {
      description: 'margin-left, margin-right',
      control: 'text',
      table: {
        category: 'Spacing'
      }
    },
    my: {
      description: 'margin-top, margin-bottom',
      control: 'text',
      table: {
        category: 'Spacing'
      }
    }
  };
}
