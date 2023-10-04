import { DocsContext, Markdown } from '@storybook/addon-docs';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledCanvas = styled.div`
  background-color: #ffe1e1;
  padding: 15px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  p.sbdocs.sbdocs-p {
    margin: 0px !important;
  }
`;

export const InfoComponent = () => {
  const context = useContext(DocsContext);
  const [story] = useState(context.getStoryContext(context.storyById(context.id)));
  const [params] = useState(story.parameters);
  const [info, setInfo] = useState(params.info ? params.info : false);

  useEffect(() => {
    setTimeout(function () {
      setInfo(params.info ? params.info : false);
    }, 10);
  }, [context]);

  return info ? (
    <StyledCanvas>
      <Markdown>{info}</Markdown>
    </StyledCanvas>
  ) : null;
};

export default InfoComponent;
