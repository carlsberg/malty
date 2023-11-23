import { CardOrientation, CardStyle } from '@carlsberggroup/malty.atoms.card';
import { ArticleCard } from '@carlsberggroup/malty.molecules.article-card';
import layoutProps from '@carlsberggroup/malty.theme.malty-theme-provider/layout.json';
import { getBreakpointNumber } from '@carlsberggroup/malty.utils.helpers';
import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Carousel as CarouselComponent } from './Carousel';
import { CarouselProps } from './Carousel.types';

export default {
  title: 'Layout/Carousel',
  component: CarouselComponent,
  parameters: {
    importObject: 'Carousel',
    importPath: '@carlsberggroup/malty.organisms.carousel',
    variants: ['default', 'image'],
    controls: {
      sort: 'requiredFirst'
    }
  },
  argTypes: {
    carouselSlide: {
      description: 'Array of React components to be rendered as slides',
      control: 'array',
      table: {
        category: 'Configuration',
        defaultValue: {
          summary: 'none'
        }
      }
    },
    dataTestId: {
      description: 'Data test id for the carousel container',
      control: 'text',
      table: {
        category: 'Configuration',
        defaultValue: {
          summary: 'carousel-container-{YOUR_TEST_ID}'
        }
      }
    },
    negative: {
      description: 'If true, the carousel will have a negative style',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: 'false'
        }
      },
      control: 'boolean'
    },
    perPage: {
      description:
        'The number of slides to be shown at once - This value should NOT be higher than the number of slides. Do not use "breakpoints" in order to apply this rule',
      control: 'number',
      table: {
        category: 'Configuration',
        defaultValue: {
          summary: '1'
        }
      }
    },
    gap: {
      description: 'The gap between the slides - Accepts any valid CSS value',
      control: 'text',
      table: {
        category: 'Configuration',
        defaultValue: {
          summary: 'none'
        }
      }
    },
    innerSpacingX: {
      description: 'Paddings left and right applied in the container that will help positioning arrows',
      table: {
        category: 'Configuration',
        defaultValue: {
          summary: true
        }
      },
      control: 'boolean'
    },
    ariaLabels: {
      description: 'Aria labels for the carousel and its elements - next & prev arrow buttons',
      control: 'text',
      table: {
        category: 'Configuration',
        defaultValue: {
          summary: 'none'
        }
      }
    },
    breakpoints: {
      description: 'Object of breakpoints for the carousel',
      control: 'object',
      table: {
        category: 'Configuration',
        defaultValue: {
          summary: 'none'
        }
      }
    },
    onVisible: {
      description: 'Callback function to be called when a slide becomes visible',
      table: {
        category: 'Events',
        defaultValue: {
          summary: 'none'
        }
      }
    },
    ...generateStorybookSpacing()
  }
} as Meta;

const Template: Story<CarouselProps> = (props) => {
  return <CarouselComponent {...props} />;
};

export const Carousel = Template.bind({});
const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'image':
    Carousel.args = {
      carouselSlide: [
        {
          id: 1,
          slideComponent: <img src="https://picsum.photos/id/45/1920/800" width="100%" />,
          slideDataTestId: 'carousel'
        },
        {
          id: 2,
          slideComponent: <img src="https://picsum.photos/id/15/1920/800" width="100%" />,
          slideDataTestId: 'carousel2'
        },
        {
          id: 3,
          slideComponent: <img src="https://picsum.photos/id/25/1920/800" width="100%" />,
          slideDataTestId: 'carousel3'
        },
        {
          id: 4,
          slideComponent: <img src="https://picsum.photos/id/75/1920/800" width="100%" />,
          slideDataTestId: 'carousel'
        },
        {
          id: 5,
          slideComponent: <img src="https://picsum.photos/id/65/1920/800" width="100%" />,
          slideDataTestId: 'carousel2'
        },
        {
          id: 6,
          slideComponent: <img src="https://picsum.photos/id/85/1920/800" width="100%" />,
          slideDataTestId: 'carousel3'
        }
      ],
      breakpoints: {},
      negative: false,
      ariaLabels: {
        carousel: 'images-carousel',
        next: 'next-image',
        prev: 'previous-image'
      },
      gap: '1rem',
      perPage: 1,
      innerSpacingX: false,
      dataTestId: 'malty'
    };

    break;

  default:
    Carousel.args = {
      carouselSlide: [
        {
          id: 1,
          slideComponent: (
            <ArticleCard
              title="This is card 01 "
              description="Nunc vitae feugiat ante, in suscipit sapien. Vivamus auctor porttitor ex. Suspendisse lorem odio. Nunc vitae feugiat ante, in suscipit sapien. Vivamus auctor porttitor ex. Suspendisse lorem odio."
              date="12/06/2022"
              imageSrc="https://picsum.photos/320/180"
              dataTestId="article-card"
              orientation={CardOrientation.Portrait}
              cardStyle={CardStyle.Shadowed}
            />
          ),
          slideDataTestId: 'carousel-1'
        },
        {
          id: 2,
          slideComponent: (
            <ArticleCard
              title="This is an article card 02"
              description="Nunc vitae feugiat ante, uspendisse lorem odio."
              date="12/06/2022"
              imageSrc="https://picsum.photos/320/180"
              dataTestId="article-card"
              orientation={CardOrientation.Portrait}
              cardStyle={CardStyle.Outlined}
            />
          ),
          slideDataTestId: 'carousel-2'
        },
        {
          id: 3,
          slideComponent: (
            <ArticleCard
              title="This is an article card 03"
              description="Nunc vitae feugitor porttitor ex. Suspendisse lorem odio."
              date="12/06/2022"
              imageSrc="https://picsum.photos/320/180"
              dataTestId="article-card"
              orientation={CardOrientation.Portrait}
              cardStyle={CardStyle.Plain}
            />
          ),
          slideDataTestId: 'carousel-3'
        },
        {
          id: 4,
          slideComponent: (
            <ArticleCard
              title="Card 04"
              description="Nunc vitae feugiat ante, in suscipit sapien. Vivamus auctor porttitor ex. Suspendisse lorem odio."
              date="12/06/2022"
              imageSrc="https://picsum.photos/320/180"
              dataTestId="article-card"
              orientation={CardOrientation.Portrait}
              cardStyle={CardStyle.Shadowed}
            />
          ),
          slideDataTestId: 'carousel-4'
        },
        {
          id: 5,
          slideComponent: (
            <ArticleCard
              title="This is an article card Title 05"
              description="Nunc vitae feugiat ante, in suscipit sapien. Nunc vitae feugiat ante, in suscipit sapien. Vivamus auctor porttitor ex. Suspendisse lorem odio. Nunc vitae feugiat ante, in suscipit sapien. Vivamus auctor porttitor ex. Suspendisse lorem odio. Vivamus auctor porttitor ex. Suspendisse lorem odio."
              date="12/06/2022"
              imageSrc="https://picsum.photos/320/180"
              dataTestId="article-card"
              orientation={CardOrientation.Portrait}
              cardStyle={CardStyle.Shadowed}
            />
          ),
          slideDataTestId: 'carousel-5'
        },
        {
          id: 6,
          slideComponent: (
            <ArticleCard
              title="This is an article card 06"
              description="Nunc vitae feugiat ante, uspendisse lorem odio."
              date="12/06/2022"
              imageSrc="https://picsum.photos/320/180"
              dataTestId="article-card"
              orientation={CardOrientation.Portrait}
              cardStyle={CardStyle.Outlined}
            />
          ),
          slideDataTestId: 'carousel-6'
        },
        {
          id: 7,
          slideComponent: (
            <ArticleCard
              title="This is an 07"
              description="Nunc vitae feugiat ante, uspendisse lorem odio."
              date="12/06/2022"
              imageSrc="https://picsum.photos/320/180"
              dataTestId="article-card"
              orientation={CardOrientation.Portrait}
              cardStyle={CardStyle.Outlined}
            />
          ),
          slideDataTestId: 'carousel-7'
        },
        {
          id: 8,
          slideComponent: (
            <ArticleCard
              title="This is an article card Title 08"
              description="Nunc vitae feugiat ante, uspendisse lorem odio."
              date="12/06/2022"
              imageSrc="https://picsum.photos/320/180"
              dataTestId="article-card"
              orientation={CardOrientation.Portrait}
              cardStyle={CardStyle.Outlined}
            />
          ),
          slideDataTestId: 'carousel-8'
        },
        {
          id: 9,
          slideComponent: (
            <ArticleCard
              title="This is an article card 09"
              description="Nunc vitae feugiat ante, uspendisse lorem odio."
              date="12/06/2022"
              imageSrc="https://picsum.photos/320/180"
              dataTestId="article-card"
              orientation={CardOrientation.Portrait}
              cardStyle={CardStyle.Outlined}
            />
          ),
          slideDataTestId: 'carousel-9'
        }
      ],
      breakpoints: {
        [getBreakpointNumber(layoutProps.medium['device-max-width'].value)]: { perPage: 6 },
        [getBreakpointNumber(layoutProps.small['device-max-width'].value)]: { perPage: 4 },
        [getBreakpointNumber(layoutProps.xsmall['device-max-width'].value)]: { perPage: 2 }
      },
      negative: false,
      ariaLabels: {
        carousel: 'products-carousel',
        next: 'next-product',
        prev: 'previous-product'
      },
      gap: '1rem',
      perPage: 7,
      innerSpacingX: true,
      dataTestId: 'malty'
    };

    break;
}
