import { Text, TextColor, TextStyle } from '@carlsberg/malty.atoms.text';
import { Meta, StoryObj } from '@storybook/react';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Tooltip } from './Tooltip';
import { TooltipPlacement, TooltipPositionStrategy, TooltipProps, TooltipToggle } from './Tooltip.types';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;

  span {
    width: 0;
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;

const TooltipComponent = ({
  placement,
  toggle,
  isDark,
  dataTestId,
  autoHideDuration,
  isOpen,
  children,
  tooltipId,
  ...props
}: TooltipProps) => {
  const tooltipTextColor = isDark ? TextColor.White : TextColor.DigitalBlack;
  const renderTooltipEventToggle = () => (
    <Text textStyle={TextStyle.TinyBold} color={tooltipTextColor}>
      {children}
    </Text>
  );
  const toggleVisibility = (open: boolean) => () => {
    if (open) {
      Tooltip.openTooltip('tooltip');
    } else {
      Tooltip.closeTooltip('tooltip');
    }
  };

  const startTimer = () => {
    Tooltip.startTooltipTimer('tooltip');
  };

  const renderTriggerComponent = useCallback(
    (setTriggerElement) => (
      <p data-testid="tooltip-trigger-element" ref={setTriggerElement}>
        Choose your toggle control and play with me!!!
      </p>
    ),
    []
  );

  return (
    <StyledContainer>
      <Tooltip
        {...props}
        tooltipId={tooltipId}
        triggerComponent={renderTriggerComponent}
        placement={placement}
        toggle={toggle}
        isOpen={isOpen}
        isDark={isDark}
        autoHideDuration={autoHideDuration}
        dataTestId={dataTestId}
      >
        {toggle === TooltipToggle.Event ? renderTooltipEventToggle() : children}
      </Tooltip>

      {toggle === TooltipToggle.Event && (
        <p>
          <button onClick={toggleVisibility(true)} type="button">
            Show
          </button>
          <button onClick={toggleVisibility(false)} type="button">
            Hide
          </button>
          <button onClick={startTimer} type="button">
            Open with timer
          </button>
        </p>
      )}
    </StyledContainer>
  );
};

const meta: Meta<TooltipProps> = {
  title: 'Information/Tooltip',
  component: Tooltip,
  parameters: {
    importObject: 'Tooltip',
    importPath: '@carlsberg/malty.atoms.tooltip'
  },
  render: (args) => <TooltipComponent {...args} />,
  argTypes: {
    tooltipId: {
      control: 'text',
      description: 'Tooltip Id',
      table: {
        defaultValue: {
          summary: 'tooltip'
        },
        type: {
          summary: 'string'
        }
      }
    },
    triggerComponent: {
      control: false,
      description:
        "Anchor element to have Tooltip anchor to. The position is based on this element. If no anchor provided the Tooltip will show in it's corresponding position on the markup, and anchor on itself",
      table: {
        type: {
          summary: '(setTriggerElement: React.Dispatch<React.SetStateAction<HTMLElement | null>>) => React.ReactNode'
        }
      }
    },
    isOpen: {
      description: 'Tooltip visibility. Overrides all variants actions that toggle visibility',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean | undefined'
        }
      }
    },
    placement: {
      description: 'Tooltip position',
      options: Object.values(TooltipPlacement),
      table: {
        defaultValue: {
          summary: TooltipPlacement.Bottom
        },
        type: {
          summary: 'TooltipPlacement'
        }
      },
      control: 'select'
    },

    positionStrategy: {
      description: 'Tooltip positioning strategy.',
      options: Object.values(TooltipPositionStrategy),
      mapping: TooltipPositionStrategy,
      table: {
        defaultValue: {
          summary: TooltipPositionStrategy.Absolute
        },
        type: {
          summary: 'TooltipPositionStrategy | undefined'
        }
      },
      control: 'select'
    },
    children: {
      description: 'Content for the Tooltip, can be a `string`, a `React Element` or just simply `HTML`.',
      table: {
        type: {
          summary: 'string | JSX.Element'
        }
      },
      control: 'text'
    },
    toggle: {
      description: 'Expected Tooltip behaviour for trigger.',
      options: Object.values(TooltipToggle),
      mapping: TooltipToggle,
      table: {
        defaultValue: {
          summary: TooltipToggle.Hover
        },
        type: {
          summary: 'TooltipToggle | undefined'
        }
      },
      control: 'select'
    },
    isDark: {
      description: 'Dark theme for the Tooltip.',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: true
        },
        type: {
          summary: 'boolean | undefined'
        }
      }
    },
    dataTestId: {
      control: 'text',
      description: 'Tooltip data-testid',
      table: {
        defaultValue: {
          summary: 'tooltip'
        },
        type: {
          summary: 'string | undefined'
        }
      }
    },
    autoHideDuration: {
      control: 'number',
      description: 'Set auto hide duration - available only for `Event` toggle',
      table: {
        defaultValue: {
          summary: 5000
        },
        type: {
          summary: 'number | undefined'
        }
      }
    },
    onClose: {
      description: 'Function to be executed when tooltip state is changed to hidden.',
      control: 'none',
      table: {
        type: {
          summary: '(() => void) | undefined'
        }
      }
    }
  }
};

type Story = StoryObj<TooltipProps>;

export const Base: Story = {
  args: {
    placement: TooltipPlacement.Bottom,
    toggle: TooltipToggle.Hover,
    dataTestId: 'tooltip',
    children: 'A simple Tooltip content with some text. Thanks for open me!',
    isDark: true,
    tooltipId: 'tooltip'
  }
};

export const Light: Story = {
  args: {
    ...Base.args,
    isDark: false
  }
};

export default meta;
