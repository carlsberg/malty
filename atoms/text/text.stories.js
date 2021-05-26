import { Text } from './text';
import { Align, Color, Size, Weight } from './text.types';

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    color: {
      options: Color,
      defaultValue: Color.Primary,
      control: {
        type: 'select'
      }
    },
    size: {
      options: Size,
      defaultValue: Size.Medium,
      control: {
        type: 'select'
      }
    },
    align: {
      options: Align,
      defaultValue: Align.Left,
      control: {
        type: 'select'
      }
    },
    weight: {
      options: Weight,
      defaultValue: Weight.Normal,
      control: {
        type: 'select'
      }
    }
  }
};
const Template = ({ content, size, color, align, weight }) => (
  <Text color={color} size={size} align={align} weight={weight}>
    {content}
  </Text>
);

export const Main = Template.bind({});
Main.args = {
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem augue, cursus ac sem in, fringilla sagittis ligula. Curabitur viverra laoreet convallis. Nam mi tortor, pellentesque sollicitudin pretium in, lacinia ut nunc.'
};
