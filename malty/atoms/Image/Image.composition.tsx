import React from 'react';
import { Image } from '.';
import { ImageProps } from './Image.types';

export const BasicImage = () => <Image src="https://via.placeholder.com/200" alt="This is an image component" />;

export const ContainImage = () => (
  <Image
    src="https://via.placeholder.com/300x200"
    alt="This is sample live image component"
    border={'Left' as ImageProps['border']}
    overlay={'25' as ImageProps['overlay']}
    width="200"
    height="200"
  />
);

export const CoverImage = () => (
  <Image
    src="https://via.placeholder.com/200x300"
    alt="This is sample live image component"
    border={'Right' as ImageProps['border']}
    overlay={'50' as ImageProps['overlay']}
    cover
    width="200"
    height="200"
  />
);

export const ContentImage = () => (
  <Image
    src="https://via.placeholder.com/200x200"
    alt="This is sample live image component"
    border={'Top' as ImageProps['border']}
    width="200"
    height="200"
  >
    <h4 style={{ textAlign: 'center' }}>This is a child h4 tag</h4>
  </Image>
);

export const GradientImage = () => (
  <Image
    src="https://via.placeholder.com/200x300"
    alt="This is sample live image component"
    border={'Left' as ImageProps['border']}
    gradient={'Right' as ImageProps['gradient']}
    cover
    width="200"
    height="200"
  />
);
