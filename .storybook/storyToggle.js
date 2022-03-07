import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { DocsContext, Canvas, Description } from '@storybook/addon-docs';

const StyledCanvas = styled(Canvas)`
  background-color: #fff5e0;
  padding: 0;
  p.sbdocs.sbdocs-p {
    margin: 0px !important;
  }
`;

export const StoryToggle = () => {
  const context = useContext(DocsContext);
  const [story] = useState(context.getStoryContext(context.storyById(context.id)));
  const [params] = useState(story.parameters);
  const [variants, setVariants] = useState(params.variants ? params.variants.toString().replaceAll(',', ', ') : '');
  const [copy, setCopy] = useState('');

  const updateContent = () => {
    setVariants(params.variants ? params.variants.toString().replaceAll(',', ', ') : '');
    setCopy(
      variants
        ? `The following versions of this component's story are available for use as values of \`variant\` as a URL parameter: ${variants}`
        : ``
    );
  };

  useEffect(() => {
    setTimeout(function () {
      updateContent();
    }, 10);
  }, [context]);

  return copy && variants ? (
    <>
      <StyledCanvas>
        <Description>{copy}</Description>
      </StyledCanvas>
    </>
  ) : (
    <></>
  );
};

export default StoryToggle;
