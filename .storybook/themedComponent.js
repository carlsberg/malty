import { Canvas, Description, DocsContext } from '@storybook/addon-docs';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledCanvas = styled(Canvas)`
  background-color: #d5eaff;
  padding: 0;
  p.sbdocs.sbdocs-p {
    margin: 0px !important;
  }
`;

export const ThemedComponent = () => {
  const context = useContext(DocsContext);
  const [story] = useState(context.getStoryContext(context.storyById(context.id)));
  const [params] = useState(story.parameters);
  const [themed, setThemed] = useState(params.themed ? params.themed : false);

  useEffect(() => {
    setTimeout(function () {
      setThemed(params.themed ? params.themed : false);
    }, 10);
  }, [context]);

  return themed ? (
    <>
      <StyledCanvas>
        <Description>
          **This is a themed component:** To see the Theme menu, and be able to change the theme for the
          _MaltyThemeProvider_, please press the 'T' key on your keyboard, and the toolbar should appear above. For more
          details, or if this doesn't work, please reach out to the Malty team.
        </Description>
      </StyledCanvas>
    </>
  ) : (
    <></>
  );
};

export default ThemedComponent;
