import React from 'react';
import { Image, ImageProps } from '.';

export const BasicImage = () => (
  <Image
    url="https://produits.bienmanger.com/5819-0w470h470_Carlsberg_Elephant_Danish_Beer.jpg"
    cover={false}
    alt="This is an image component"
    border={'Bottom' as ImageProps['border']}
    gradient={'Bottom' as ImageProps['border']}
  />
);
