import { DocsContext, Markdown } from '@storybook/addon-docs';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledCanvas = styled.div`
  background-color: #d5eaff;
  padding: 15px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
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
    <StyledCanvas>
      <Markdown>
        **This is a themed component:** To see the Theme menu, and be able to change the theme for the
        _MaltyThemeProvider_, please press the 'T' key on your keyboard, and the toolbar should appear above. For more
        details, or if this doesn't work, please reach out to the Malty team.
      </Markdown>
    </StyledCanvas>
  ) : null;
};

export default ThemedComponent;
